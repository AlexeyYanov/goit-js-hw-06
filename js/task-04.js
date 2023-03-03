const butDec = document.querySelector('[data-action="decrement"]');
const butInc = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");
const countObj = {
  counterValue: 0,
  decr() {
    this.counterValue -= 1;
  },
  incr() {
    this.counterValue += 1;
  },
};
butDec.addEventListener("click", () => {
  countObj.decr();
  valueEl.textContent = countObj.counterValue;
});
butInc.addEventListener("click", () => {
  countObj.incr();
  valueEl.textContent = countObj.counterValue;
});

console.log(butDec, butInc);
