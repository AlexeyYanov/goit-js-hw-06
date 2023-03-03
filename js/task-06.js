const inputEl = document.querySelector("#validation-input");
const lim = Number(inputEl.getAttribute("data-length"));
function classToggle(first, second) {
  inputEl.classList.add(first);
  inputEl.classList.remove(second);
}
function checkLimit(event) {
  const lengthValue = event.target.value.trim().length;
  // if (lengthValue === lim) {
  //   classToggle("valid", "invalid");
  // } else {
  //   classToggle("invalid", "valid");
  // }
  lengthValue === lim
    ? classToggle("valid", "invalid")
    : classToggle("invalid", "valid");
}
inputEl.addEventListener("blur", checkLimit);

// const lim = +inputEl.getAttribute("data-length");
