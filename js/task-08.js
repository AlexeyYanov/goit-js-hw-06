const userForm = document.querySelector(".login-form");
function handlerUserForm(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  //   const email = event.currentTarget.elements.email;
  //   const password = event.currentTarget.elements.password;
  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    const userInfo = {};
    userInfo.email = email.value;
    userInfo.password = password.value;
    console.log(userInfo);
    userForm.reset();
    //   form`s reset
  }
}
userForm.addEventListener("submit", handlerUserForm);
