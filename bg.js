const body = document.querySelector("body");

const IMAGE_NUMBER = 4;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `./images/${imgNumber + 1}.jpeg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function generateRandom() {
  const number = Math.floor(Math.random() * IMAGE_NUMBER);
  return number;
}

function init() {
  const randomNumber = generateRandom();
  paintImage(randomNumber);
}

init();
