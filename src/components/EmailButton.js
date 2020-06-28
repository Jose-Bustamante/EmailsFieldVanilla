export function createButton(text, onclick, appendToId) {
  var button = document.createElement("button");
  button.setAttribute("content", text);
  button.onclick = function () {
    onclick(appendToId);
    return false;
  };
  button.setAttribute("class", "emailButtons");
  button.innerHTML = text;
  document
    .getElementById(`emailButtonsContainer${appendToId}`)
    .appendChild(button);
}
