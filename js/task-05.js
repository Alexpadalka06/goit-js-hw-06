const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", handleInput);

function handleInput(event) {
  if (event.currentTarget.value === "") {
    nameOutput.textContent = "Anonymous";
  } else if (event.currentTarget.value.trim() !== "") {
    nameOutput.textContent = "";
    const result = event.currentTarget.value;

    nameOutput.append(result);
  }
}
