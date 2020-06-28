import "./css/styles.css";
import { createButton } from "./components/EmailButton";
import { createEmailsField } from "./components/EmailsField";

var emailFieldComponent = {
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

function click() {
  console.log("On click asda ");
}

// Loading function
document.addEventListener("DOMContentLoaded", function () {
  initField();
  createEmailsField(emailFieldComponent);
  createButton("button1", "Add Email", click);
  createButton("button2", "Get Emails Count", click);
});
