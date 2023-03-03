const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
function changeTextSize() {
  textEl.style.fontSize = inputEl.value + "px";
}
changeTextSize();
inputEl.addEventListener("input", changeTextSize);
