const itemEl = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${itemEl.length}`);
itemEl.forEach((elem) => {
  const title = elem.querySelector("h2");
  console.log("");
  console.log(title.textContent);
  const liItemEl = elem.querySelectorAll("li");
  console.log(`Element: ${liItemEl.length}`);
});
