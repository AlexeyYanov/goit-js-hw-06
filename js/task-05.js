const inputEl = document.querySelector("#name-input");
console.log(inputEl);
const outputEl = document.querySelector("#name-output");

// inputEl.addEventListener("input", (event) => {
//   console.log(event.target.value);
//   if (event.target.value.trim() === "") {
//     outputEl.textContent = "Anonymous";
//   } else {
//     outputEl.textContent = event.target.value;
//   }
//   console.log(outputEl.textContent);
// });

inputEl.addEventListener("input", (event) => {
  outputEl.textContent = event.currentTarget.value.trim() || "Anonymous";
});
