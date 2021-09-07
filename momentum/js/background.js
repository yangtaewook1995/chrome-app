const images = [
  "sample-1.jpeg",
  "sample-2.jpeg",
  "sample-3.jpeg",
  "sample-4.jpeg",
];

const randNum = Math.floor(Math.random() * 4);
const randImage = images[randNum];

const bgImage = document.createElement("img");

bgImage.src = "img/" + randImage;

document.body.appendChild(bgImage);
