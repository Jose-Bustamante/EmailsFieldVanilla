import isValidEmailCheck from "../utils/isValidEmail";

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
    bubble.remove();
    return false;
  };
  document.getElementById("emailsField").prepend(bubble);
  window.emailFieldComponent.default.emailList.push(fieldValue);
}
