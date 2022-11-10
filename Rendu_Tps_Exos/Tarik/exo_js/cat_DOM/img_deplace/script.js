let bouche = document.getElementById("bouche");
let grrr = document.getElementById("grrr");
let miaou = document.getElementById("miaou");
let ronron = document.getElementById("ronron");
let smile = document.getElementById("smile");

let listeImg = [bouche, grrr, miaou, ronron, smile];

let index = 0;

function nextImg() {
  listeImg[index].className = "disable";

  if (index < listeImg.length - 1) {
    index++;
  } else {
    index = 0;
  }

  listeImg[index].className = "enable";
}

function previousImg() {
  listeImg[index].className = "disable";

  if (index > 0) {
    index--;
  } else {
    index = listeImg.length - 1;
  }

  listeImg[index].className = "enable";
}
