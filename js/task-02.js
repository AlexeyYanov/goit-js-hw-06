const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsArr = ingredients.map((elem) => {
  const ingEl = document.createElement("li");
  ingEl.textContent = elem;
  ingEl.classList.add("item");
  return ingEl;
});

const ingredientsList = document.querySelector("#ingredients");
ingredientsList.append(...ingredientsArr);
