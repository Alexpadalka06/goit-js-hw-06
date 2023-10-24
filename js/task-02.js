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
ingredients.forEach((item) => {
  list = document.createElement("li");
  list.textContent = `${item}`;
  ul.appendChild(list);
  console.log(ul);
});
