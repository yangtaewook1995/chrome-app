const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
const loginclock = document.querySelector("h2#clock");
const todo = document.querySelector("#todo-form");
const loginquote = document.querySelector("#quote");
const weather = document.querySelector("#weather");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paingGreetings(userName) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = "Hello " + userName;
  loginclock.classList.remove(HIDDEN_CLASSNAME);
  todo.classList.remove(HIDDEN_CLASSNAME);
  loginquote.classList.remove(HIDDEN_CLASSNAME);
  weather.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  loginForm.classList.add(HIDDEN_CLASSNAME);

  paingGreetings(userName);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName == null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);

  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paingGreetings(savedUserName);
}
