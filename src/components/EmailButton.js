export function createButton(text, onclick, appendToId) {
  var button = document.createElement("button");
  button.setAttribute("content", text);
  button.onclick = function () {
    onclick(appendToId);
    return false;
  };
  button.setAttribute("class", "emailButtons");
  button.setAttribute("id", `emailButtons${text}${appendToId}`);
  button.innerHTML = text;
  document
    .getElementById(`emailButtonsContainer${appendToId}`)
    .appendChild(button);
}
