import { createEmailBubble } from "./EmailBubble";
import { checkBrowser } from "../utils/browserUtils";

function handleFieldChange(e, id) {
  var field = document.getElementById(e.target.getAttribute("id"));
  var fieldValue = e.target.value;
  var keynum;
  if (window.event) {
    // IE
    keynum = e.keyCode;
  } else if (e.which) {
    // Netscape/Firefox/Opera
    keynum = e.which;
  }
  if (fieldValue.length) {
    switch (keynum) {
      case 9:
      case 13:
        createEmailBubble(fieldValue, id);
        field.value = "";
        break;
      case 32:
        if (fieldValue !== " ") {
          const browser = checkBrowser();
          if (browser === "IE11" || browser === "Firefox")
            fieldValue = fieldValue.substring(0, fieldValue.length - 1);
          createEmailBubble(fieldValue, id);
        }
        field.value = "";
        break;
      case 188:
        if (fieldValue !== ",") {
          fieldValue = fieldValue.substring(0, fieldValue.length - 1);
          createEmailBubble(fieldValue, id);
        }
        field.value = "";
        break;
      default:
        break;
    }
  }
}

function handleOnBlur(e, id) {
  var fieldValue = e.target.value;
  if (fieldValue.length) {
    var field = document.getElementById(e.target.getAttribute("id"));

    createEmailBubble(fieldValue, id);
    field.value = "";
  }
}

function handlePaste(e, id) {
  var pastedText = "";
  if (typeof e.clipboardData === "undefined")
    // IE11 & Edge support
    pastedText = window.clipboardData.getData("Text");
  else pastedText = e.clipboardData.getData("text/plain");

  var pastedTestArray = pastedText.split(/[ ,]+/);

  var field = document.getElementById(e.target.getAttribute("id"));

  for (var i = 0, len = pastedTestArray.length; i !== len; i++) {
    createEmailBubble(pastedTestArray[i], id);
  }
  field.value = "";
}

export function createEmailsField(id) {
  var emailsField = document.createElement("div");
  emailsField.setAttribute("class", "emailBox");
  emailsField.setAttribute("id", "emailsField");
  emailsField.onclick = function () {
    emailsInput.focus();
    return false;
  };

  var emailsInput = document.createElement("input");
  emailsInput.setAttribute("class", "emailsInput");
  emailsInput.setAttribute("type", "email");
  emailsInput.setAttribute("id", `emailTextField${id}`);
  emailsInput.onkeyup = function (e) {
    handleFieldChange(e, id);
    return false;
  };
  emailsInput.onblur = function (e) {
    handleOnBlur(e, id);
    return false;
  };
  emailsInput.onpaste = function (e) {
    handlePaste(e, id);
    return false;
  };

  emailsInput.setAttribute("multiple", "true");

  emailsField.appendChild(emailsInput);
  document.getElementById(`emailContainer${id}`).appendChild(emailsField);
}
