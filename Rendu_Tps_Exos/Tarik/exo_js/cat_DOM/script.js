function overGrr() {
  window.alert("GRRRRRRRR je mors");
}

function clicHere() {
  window.alert("Bon toutou ! ");
}

let body = document.getElementById("body");
function nuit() {
  body.className = "nuit";
}
function jour() {
  body.className = "jour";
}

let smile = document.getElementById("smile");
let bouche = document.getElementById("bouche");
function changeImg() {
  smile.className = "desac";
  bouche.className = "";
}
function changeImgAgain() {
  smile.className = "";
  bouche.className = "desac";
}
