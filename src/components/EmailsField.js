import { createEmailBubble } from "./EmailBubble";

function handleFieldChange(e, emailFieldComponent) {
  // console.log("AQUI -->", emailFieldComponent);
  var field = document.getElementById("emailTextField");
  var fieldValue = field.value;
  var keynum;
  if (window.event) {
    // IE
    keynum = e.keyCode;
  } else if (e.which) {
    // Netscape/Firefox/Opera
    keynum = e.which;
  }
  if (keynum == 9 || keynum == 32 || keynum == 188 || keynum == 13) {
    createEmailBubble(fieldValue, emailFieldComponent);
    field.value = "";
  }

  e.preventDefault();
}

export function createEmailsField(emailFieldComponent) {
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
    handleFieldChange(e, emailFieldComponent);
    return false;
  };
  emailsInput.onpaste = function (e) {
    console.log("paste", e.value);
  };

  emailsInput.setAttribute("multiple", "true");

  emailsField.appendChild(emailsInput);
  document.getElementById("emailContainer").appendChild(emailsField);
}
