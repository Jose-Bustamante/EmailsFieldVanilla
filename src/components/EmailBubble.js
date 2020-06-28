export function createEmailBubble(fieldValue, emailFieldComponent) {
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
    bubble.remove();
    return false;
  };

  document.getElementById("emailsField").prepend(bubble);
  emailFieldComponent.default.emailList.push(fieldValue);
}
