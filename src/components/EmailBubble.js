import isValidEmailCheck from "../utils/isValidEmail";
import isIE11 from "../utils/isIE11";

export function createEmailBubble(fieldValue) {
  var isValidEmail = isValidEmailCheck(fieldValue);
  var bubble = document.createElement("div");

  if (isValidEmail) {
    bubble.setAttribute("class", "emailBubles emailBublesValid");
  } else bubble.setAttribute("class", "emailBubles emailBublesInvalid");

  bubble.innerHTML = fieldValue;

  bubble.onclick = function () {
    window.emailFieldComponent.default.emailList = window.emailFieldComponent.default.emailList.filter(
      (e) => e !== fieldValue
    );
    if (isIE11()) bubble.parentNode.removeChild(bubble);
    else bubble.remove();
    return false;
  };
  document
    .getElementById("emailTextField")
    .insertAdjacentElement("beforebegin", bubble);
  window.emailFieldComponent.default.emailList.push(fieldValue);
}
