const name = document.getElementById("name");
const date = document.getElementById("date");
const email = document.getElementById("email");
const password = document.getElementById("password");
const checkContainer = document.querySelector(".label-check");
const check = document.querySelector(".check");
const labelCheck = document.querySelector(".label-check");
const submit = document.querySelector(".submit");
const app = document.querySelector(".app");
const success = document.querySelector(".success");

const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submit.addEventListener("mouseenter", function () {
  if (
    !name.value ||
    date.value == "" ||
    !email.value.match(emailCheck) ||
    !check.checked ||
    password.value == ""
  ) {
    if (!name.value) red(name);
    if (name.value) green(name);
    if (!date.value) red(date);
    if (date.value) green(date);
    if (!email.value.match(emailCheck)) red(email);
    if (email.value.match(emailCheck)) green(email);
    if (!check.checked) red(checkContainer);
    if (check.checked) green(checkContainer);
    if (!password.value) red(password);
    if (password.value) green(password);
    movingSubmit();
  } else {
    submit.style.color = "green";
  }
});

submit.addEventListener("click", function (e) {
  e.preventDefault();
  app.classList.add("none");
  success.classList.remove("hidden");
});

const red = function (input) {
  input.style.border = "2px solid red";
};
const green = function (input) {
  input.style.border = "2px solid green";
};

const movingSubmit = function () {
  if (!submit.classList.contains("move-right"))
    submit.classList.toggle("move-right");
  submit.classList.toggle("move-left");
  submit.style.color = "red";
};
