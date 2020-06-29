import "./css/styles.css";
import { createButton } from "./components/EmailButton";
import { createEmailsField } from "./components/EmailsField";
import { createEmailBubble } from "./components/EmailBubble";
import isValidEmailCheck from "./utils/isValidEmail";

window.emailFieldComponent = {
  initComponent: (id) => initField(id),
};

export function initField(id = "default") {
  if (window.emailFieldComponent[id]) {
    console.log("ID ALREADY EXISTS!!");
    return null;
  }
  window.emailFieldComponent = {
    [id]: { emailList: [], name: id },
    ...window.emailFieldComponent,
  };

  var mainWrapper = document.createElement("div");
  mainWrapper.setAttribute("class", "mainWrapper");
  mainWrapper.setAttribute("id", `mainWrapperEmails${id}`);

  var emailContainer = document.createElement("div");
  emailContainer.setAttribute("class", "emailContainer");
  emailContainer.setAttribute("id", `emailContainer${id}`);
  emailContainer.innerHTML +=
    '<span class="headerText">Share <b>Board name</b> with others</span>';

  var emailButtonsContainer = document.createElement("div");
  emailButtonsContainer.setAttribute("class", "emailButtonsContainer");
  emailButtonsContainer.setAttribute("id", `emailButtonsContainer${id}`);

  mainWrapper.appendChild(emailContainer);
  mainWrapper.appendChild(emailButtonsContainer);
  document.body.appendChild(mainWrapper);

  createEmailsField(id);
  createButton("Add Email", addRandomEmail, id);
  createButton("Get Emails Count", getEmails, id);
}

function addRandomEmail(id) {
  const emailText = Math.random().toString(36).substring(2, 11) + "@email.com";
  createEmailBubble(emailText, id);
}

function getEmails(id) {
  var validEmails = [];
  var emailList = window.emailFieldComponent[id].emailList;
  for (var i = 0, len = emailList.length; i !== len; i++) {
    var email = emailList[i];
    if (isValidEmailCheck(email)) validEmails.push(email);
  }
  alert(validEmails);
}

// Loading function
document.addEventListener("DOMContentLoaded", function () {
  initField();
});
