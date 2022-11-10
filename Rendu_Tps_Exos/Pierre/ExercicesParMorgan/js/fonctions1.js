/*
fonctions1.js
*/

function changer_style() {
  //
  let container = document.getElementById("parag1");
  // alert("changer_style");
  container.style.color = "white";
  container.style.backgroundColor = "black";
  container.style.borderWidth = 3;
  container.style.borderStyle = "dashed";
  container.style.borderColor = "grey";
}

function changer_classe_active() {
  //
  let container = document.getElementById("parag1");
  container.className = "default";
  // alert("changer_classe_active");
}
