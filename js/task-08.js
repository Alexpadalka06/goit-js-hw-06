const registerForm = document.querySelector("form");
registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const mail = form.elements.email.value;
  const password = form.elements.password.value;

  if (mail === "" || password === "") {
    return alert("Please fill in all the fields!");
  }

  const data = {
    mail: mail,
    password: password,
  };

  console.log(data);
  form.reset();
}
