export function createButton(id, text, onclick) {
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
