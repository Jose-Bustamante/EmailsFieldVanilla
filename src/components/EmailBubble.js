import isValidEmailCheck from "../utils/isValidEmail";
import { checkBrowser } from "../utils/browserUtils";

export function createEmailBubble(fieldValue, id) {
  var isValidEmail = isValidEmailCheck(fieldValue);
  var bubble = document.createElement("div");

  if (isValidEmail) {
    bubble.setAttribute("class", "emailBubles emailBublesValid");
  } else bubble.setAttribute("class", "emailBubles emailBublesInvalid");

  bubble.innerHTML = fieldValue;

  bubble.onclick = function () {
    window.emailFieldComponent[id].emailList = window.emailFieldComponent[
      id
    ].emailList.filter((e) => e !== fieldValue);
    if (checkBrowser() === "IE11") bubble.parentNode.removeChild(bubble);
    else bubble.remove();
    return false;
  };
  console.log("AQUI --<> ", id);
  document
    .getElementById(`emailTextField${id}`)
    .insertAdjacentElement("beforebegin", bubble);
  window.emailFieldComponent[id].emailList.push(fieldValue);
}
