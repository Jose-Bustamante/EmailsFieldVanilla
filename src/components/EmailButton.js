export function createButton(id, text, onclick) {
  var button = document.createElement("button");
  button.id = id;
  button.setAttribute("content", text);
  button.onclick = function () {
    onclick();
    return false;
  };
  button.setAttribute("class", "emailButtons");
  button.innerHTML = text;
  document.getElementById("emailButtonsContainer").appendChild(button);
}
