const title = document.getElementById("title");
const hellos = document.getElementsByClassName("some");
const query = document.querySelector(".something h1");

title.innerText = "Got you";
hellos[0].innerText = "Test you";
query.innerText = "Query too";

// console.log(title);
// console.log(hellos);
// console.log(query);

function handelQueryClick() {
  console.log("title clicked");
  query.innerText = "Query you";
}

query.style.color = "blue";

query.addEventListener("click", handelQueryClick);
