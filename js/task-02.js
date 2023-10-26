const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ul = document.querySelector("#ingredients");

let list = [];
ingredients.forEach((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ` ${ingredient}`;
  list.push(item);
});

ul.append(...list);
