let form = document.forms;
let nameAl = document.querySelector(".nameAl");
let Inputs = document.querySelectorAll("input");
let emailAl = document.querySelector(".emailAl");
let subAl = document.querySelector(".subAl");
let messAl = document.querySelector(".messAl");
let nameRegux = /[a-z]+/gi;
let emailRegux = /\w+@[a-z]+.[a-z]+/gi;

function emailValidation() {
  if (emailRegux.test(Inputs[1].value)) {
    emailAl.style.bottom = "-10px";
  } else {
    emailAl.style.bottom = "-50px";
  }
}
function nameValidation() {
  if (nameRegux.test(Inputs[0].value) && Inputs[0].value.trim() !== "") {
    console.log("name validated");
    nameAl.style.bottom = "-10px";
  } else {
    nameAl.style.bottom = "-50px";
  }
}
function subValidation() {
  if (
    Inputs[2].value.trim().length > 4 &&
    Inputs[2].value.trim().length <= 20
  ) {
    console.log("subj validated");
    subAl.style.bottom = "-10px";
  } else {
    subAl.style.bottom = "-50px";
  }
}

form[0].addEventListener("submit", function (e) {
  e.preventDefault();
  emailValidation();
  subValidation();
  nameValidation();
console.log(nameRegux.test(Inputs[0].value));
  console.log(Inputs[2].value.trim().length > 4);
  console.log(Inputs[2].value.trim().length <= 20);
  console.log(emailRegux.test(Inputs[1].value));
  if (
    Inputs[2].value.trim().length > 4 &&
    Inputs[2].value.trim().length <= 20 &&
    nameRegux.test(Inputs[0].value) &&
    emailRegux.test(Inputs[1].value)
  ) {
    form[0].submit();
  }
});
