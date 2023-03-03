function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyPage = document.querySelector("body");
const textColor = document.querySelector(".color");
const buttonEl = document.querySelector(".change-color");
buttonEl.addEventListener("click", () => {
  const colorBackground = getRandomHexColor();
  textColor.textContent = colorBackground;
  bodyPage.style.backgroundColor = colorBackground;
});
