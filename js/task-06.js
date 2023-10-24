const input = document.querySelector("#validation-input");
input.addEventListener("blur", validInput);
function validInput(event) {
  const result = event.currentTarget.value;
  console.log(result);
  if (result > 6) {
  }
}
