const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING = "showing";

function enrollName(text) {
  localStorage.setItem(USER_LS, text);
}

function askName() {
  form.classList.add(SHOWING);
  form.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  helloGreeting(currentValue);
  enrollName(currentValue);
}

function helloGreeting(text) {
  form.classList.remove(SHOWING);
  greeting.classList.add(SHOWING);
  greeting.innerHTML = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askName();
  } else {
    helloGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
