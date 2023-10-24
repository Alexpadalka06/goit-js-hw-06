const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", handleInput);

function handleInput(event) {
  nameOutput.textContent = "";
  const result = event.currentTarget.value;
  nameOutput.append(result);
}
