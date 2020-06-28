import { createEmailBubble } from "./EmailBubble";

function handleFieldChange(e) {
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
  if (keynum == 9 || keynum == 32 || keynum == 188 || keynum == 13) {
    if (fieldValue.length) {
      createEmailBubble(fieldValue);
    }
    field.value = "";
  }
}

function handleOnBlur(e) {
  var fieldValue = e.target.value;
  if (fieldValue.length) {
    var field = document.getElementById(e.target.getAttribute("id"));

    createEmailBubble(fieldValue);
    field.value = "";
  }
}

function handlePaste(e) {
  var pastedText = "";
  if (typeof e.clipboardData === "undefined")
    // IE11 & Edge support
    pastedText = window.clipboardData.getData("Text");
  else pastedText = e.clipboardData.getData("text/plain");

  var pastedTestArray = pastedText.split(/[ ,]+/);

  var field = document.getElementById(e.target.getAttribute("id"));

  for (var i = 0, len = pastedTestArray.length; i !== len; i++) {
    createEmailBubble(pastedTestArray[i]);
  }
  field.value = "";
}

export function createEmailsField() {
  var emailsField = document.createElement("div");
  var emailsInput = document.createElement("input");

  emailsField.setAttribute("class", "emailBox");
  emailsField.setAttribute("id", "emailsField");
  emailsField.onclick = function () {
    emailsInput.focus();
    return false;
  };

  emailsInput.setAttribute("class", "emailsInput");
  emailsInput.setAttribute("type", "email");
  emailsInput.setAttribute("id", "emailTextField");
  emailsInput.onkeyup = function (e) {
    handleFieldChange(e);
    return false;
  };
  emailsInput.onblur = function (e) {
    handleOnBlur(e);
    return false;
  };
  emailsInput.onpaste = function (e) {
    handlePaste(e);
    return false;
  };

  emailsInput.setAttribute("multiple", "true");

  emailsField.appendChild(emailsInput);
  document.getElementById("emailContainer").appendChild(emailsField);
}
