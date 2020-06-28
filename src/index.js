import "./css/styles.css";
import { createButton } from "./components/EmailButton";
import { createEmailsField } from "./components/EmailsField";
import { createEmailBubble } from "./components/EmailBubble";
import isValidEmailCheck from "./utils/isValidEmail";

window.emailFieldComponent = {
  default: {
    emailList: [],
  },
  initComponent: () => console.log("TODO"),
};

function initField() {
  var mainWrapper = document.createElement("div");
  mainWrapper.setAttribute("class", "mainWrapper");
  mainWrapper.setAttribute("id", "mainWrapperEmails");

  var emailContainer = document.createElement("div");
  emailContainer.setAttribute("class", "emailContainer");
  emailContainer.setAttribute("id", "emailContainer");
  emailContainer.innerHTML +=
    '<span class="headerText">Share <b>Board name</b> with others</span>';

  var emailButtonsContainer = document.createElement("div");
  emailButtonsContainer.setAttribute("class", "emailButtonsContainer");
  emailButtonsContainer.setAttribute("id", "emailButtonsContainer");

  mainWrapper.appendChild(emailContainer);
  mainWrapper.appendChild(emailButtonsContainer);
  document.body.appendChild(mainWrapper);
}

function addRandomEmail() {
  const emailText = Math.random().toString(36).substring(2, 11) + "@email.com";
  createEmailBubble(emailText);
}

function getEmails() {
  var validEmails = [];
  for (
    var i = 0, len = window.emailFieldComponent.default.emailList.length;
    i !== len;
    i++
  ) {
    var email = window.emailFieldComponent.default.emailList[i];
    if (isValidEmailCheck(email)) validEmails.push(email);
  }
  alert(validEmails);
}

// Loading function
document.addEventListener("DOMContentLoaded", function () {
  initField();
  createEmailsField();
  createButton("button1", "Add Email", addRandomEmail);
  createButton("button2", "Get Emails Count", getEmails);
});
