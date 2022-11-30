let para = document.getElementById("parag1");
let active =
  "color: white; background-color: black; border: 1px red dashed; padding: 5px;";

function changer_style() {
  para.setAttribute("style", active);
}

let titre = document.getElementById("titre");

let color = document.getElementById("color");
let padding = document.getElementById("padding");
let height = document.getElementById("height");
let width = document.getElementById("width");
let arrondi = document.getElementById("arrondi");
let rotation = document.getElementById("rotation");

function changeTitre() {
  newColor = `background-color : rgb(${color.value},${color.value},${color.value});`;
  newPadding = `padding : ${padding.value}px;`;
  newHeight = `height : ${height.value}px;`;
  newwidth = `width : ${width.value}px;`;
  newArrondi = `border-radius : ${arrondi.value}%;`;
  newRotation = `transform: rotate(${rotation.value}deg); `;

  titre.setAttribute(
    "style",
    newColor + newPadding + newHeight + newwidth + newArrondi + newRotation
  );
}
