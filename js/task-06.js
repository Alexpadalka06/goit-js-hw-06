const input = document.querySelector("#validation-input");
const inputLenght = document.querySelector('input[data-length="6"]');
input.addEventListener("blur", validInput);
function validInput(event) {
  const result = event.currentTarget.value;
  console.log(result);
  if (result.length === Number(inputLenght.dataset.length)) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}
