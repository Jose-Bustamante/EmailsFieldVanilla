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
  document.body.innerHTML +=
    '<div class="mainWrapper" id="mainWrapperEmails"><div class="emailContainer" id="emailContainer"><span class="headerText">Share <b>Board name</b> with others</span></div></div>';
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
