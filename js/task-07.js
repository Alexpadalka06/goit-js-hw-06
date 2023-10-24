const text = document.querySelector("#text");
const input = document.querySelector("#font-size-control");
input.addEventListener("input", (event) => {
  console.log(event.target.value);
  text.style.fontSize = `${event.target.value}em`;
});
