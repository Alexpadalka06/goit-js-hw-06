const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
ingredients.forEach((item) => {
  const ingredients = document.createElement("li");
  ingredients.textContent = `${item}`;
  console.log(ingredients);
});
