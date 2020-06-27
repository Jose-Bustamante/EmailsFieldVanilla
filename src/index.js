import "./css/styles.css";

var emailFieldComponent = {
  default: {
    emailList: [],
  },
  initComponent: () => console.log("TODO"),
};

function click() {
  console.log("On click");
}

function initField() {
  // add the text node to the newly created div
  document.body.innerHTML +=
    '<div class="mainWrapper" id="mainWrapperEmails" onclick="click()"><div class="emailContainer" id="emailContainer"><span class="headerText">Share <b>Board name</b> with others</span></div></div>';
}

function createButton(id, text, onclick) {
  var button = document.createElement("button");
  button.id = id;
  button.setAttribute("content", text);
  button.onclick = function () {
    onclick();
    return false;
  };
  button.setAttribute("class", "buttons");
  button.innerHTML = text;
  document.getElementById("mainWrapperEmails").appendChild(button);
}

function createEmailBubble(fieldValue) {
  var pattern = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
  var isValidEmail = pattern.test(fieldValue);

  var bubble = document.createElement("div");

  if (isValidEmail) {
    bubble.setAttribute("class", "emailBubles emailBublesValid");
  } else bubble.setAttribute("class", "emailBubles emailBublesInvalid");

  bubble.innerHTML = fieldValue;

  bubble.onclick = function () {
    emailFieldComponent.default.emailList = emailFieldComponent.default.emailList.filter(
      (e) => e !== fieldValue
    );
    console.log(emailFieldComponent.default.emailList);
    bubble.remove();
    return false;
  };

  document.getElementById("emailsField").prepend(bubble);
  emailFieldComponent.default.emailList.push(fieldValue);
}

function handleFieldChange(e) {
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
    createEmailBubble(fieldValue);
    field.value = "";
  }

  e.preventDefault();
}

function createEmailsField() {
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
  emailsInput.setAttribute("multiple", "true");

  emailsField.appendChild(emailsInput);
  document.getElementById("emailContainer").appendChild(emailsField);
}

// Loading function
document.addEventListener("DOMContentLoaded", function () {
  // var link = document.createElement("link");
  // link.href = "CSS/styles.css";
  // link.type = "text/css";
  // link.rel = "stylesheet";
  // document.getElementsByTagName("head")[0].appendChild(link);
  initField();
  createEmailsField();
  createButton("button1", "Add Email", click);
  createButton("button2", "Get Emails Count", click);
});
