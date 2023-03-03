function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputNumberBoxes = document.querySelector("#controls > input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");
const minNum = inputNumberBoxes.min;
const maxNum = inputNumberBoxes.max;
console.log(typeof minNum);
buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);
function createBoxes() {
  function rendomrgb() {
    const red = Math.round(Math.random(0, 1) * 255);
    const green = Math.round(Math.random(0, 1) * 255);
    const blue = Math.round(Math.random(0, 1) * 255);
    return `rgb(${red},${green},${blue})`;
  }
  const amount = Number(inputNumberBoxes.value);
  console.log(amount);
  if (amount <= 100 && amount >= 2) {
    const box = [];
    let size = 30;
    for (let i = 0; i < amount; i++) {
      let growsize = size + i * 10;
      const boxEl = `<div style="width:${growsize}px;height:${growsize}px;background-color:${rendomrgb()} "></div>`;
      box.push(boxEl);
    }
    const boxHTML = box.join("");

    divBoxes.insertAdjacentHTML("afterbegin", boxHTML);
    console.log(divBoxes);
  } else {
    alert("Your number is not in the range");
  }
}
function destroyBoxes() {
  divBoxes.innerHTML = "";
  inputNumberBoxes.value = "";
}
