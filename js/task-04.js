const decrementBtn = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
let count = 0;
const span = document.querySelector("#value");
decrementBtn.addEventListener("click", () => {
  count = count - 1;
  console.log(count);
  span.textContent = `${count}`;
});

increment.addEventListener("click", () => {
  count = count + 1;
  console.log(count);
  span.textContent = `${count}`;
});
