const ulCategory = document.querySelectorAll("#categories > .item");
console.log(`Number of categories: ${ulCategory.length}`);

ulCategory.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
});
