let bouche = document.getElementById("bouche");
let grrr = document.getElementById("grrr");
let miaou = document.getElementById("miaou");
let ronron = document.getElementById("ronron");
let smile = document.getElementById("smile");

let listeImg = [bouche, grrr, miaou, ronron, smile];

let index = 0;
let intervalID;

function randomImg() {
  listeImg[index].className = "disable";
  index = Math.floor(Math.random() * 5);
  console.log(index);

  listeImg[index].className = "enable";
}

function start() {
  intervalID = setInterval(randomImg, 2000);
}

function stop() {
  clearInterval(intervalID, 2000);
}
