let canvas = document.getElementById("taquin");
let context = canvas.getContext("2d"); //définition du contexte du canvas
let img = new Image(); //l'objet image qui va permettre de découper celle-ci
let parts = []; // tableau qui va contenir les blocs mélangés

// si il y a plusieurs images, non obligatoire
let elts = document.getElementsByName("img");
for (let elt of elts) {
  if (elt.checked == true) {
    img.src = elt.value;
    break;
  }
}

let w = Math.floor(img.width / 3); //largeur d'un bloc taquin
img.onload = init_taquin;

// découpe de l'image et affichage sur le canvas
function init_taquin() {
  context.clearRect(0, 0, img.width, img.height); //on efface le canvas
  parts = [1, 2, 3, 4, 5, 6, 7, 8]; //8 morceaux à dessiner
  //  0 1 2
  //  3 4 5
  //  6 7 8

  /*Mélange aléatoire*/
  shuffle(parts); //on brasse au hasard
  for (let i = 0; i < 8; i++) {
    // on dessine les 8 morceaux
    let sx = (parts[i] % 3) * w;
    let sy = Math.floor(parts[i] / 3) * w;
    let dx = (i % 3) * w;
    let dy = Math.floor(i / 3) * w;
    context.drawImage(img, sx, sy, w, w, dx, dy, w, w);
    //https://developer.mozilla.org/fr/docs/Web/API/CanvasRenderingContext2D/drawImage

    /*
    dx
    La coordonnée x dans le canvas de destination où placer le coin supérieur gauche de l'image source.

    dy
    La coordonnée y dans le canvas de destination où placer le coin supérieur gauche de l'image source.

    dLargeur
    La largeur de l'image dessinée dans le contexte de la balise canvas. Cela permet d'ajuster la taille de l'image. Si cet argument n'est pas spécifié, l'image prendra sa largeur normale.

    dHauteur
    La hauteur de l'image dessinée dans le contexte de la balise canvas. Cela permet d'ajuster la taille de l'image. Si cet argument n'est pas spécifié, l'image prendra sa hauteur normale.

    sx
    La coordonnée x du bord en haut à gauche de la partie de l'image source à dessiner dans le contexte du canvas.

    sy
    La coordonnée y du bord en haut à gauche de la partie de l'image source à dessiner dans le contexte du canvas.

    sLargeur
    La largeur de la partie de l'image source à dessiner dans le contexte. Si ce n'est pas spécifié, cet argument prend la valeur de la largeur de l'image moins sx, autrement dit l'image dessinée dans le contexte sera la partie de l'image d'origine à partir du point s de coordonnées (sx ; sy) et jusqu'au bord en bas à droite.

    sHauteur
    La hauteur de la partie de l'image source à dessiner dans le contexte. De la même manière que pour sLargeur, si aucune valeur n'est donnée cet argument prendra la valeur de la hauteur de l'image moins sy.*/

  }
  parts.push(0); // on ajoute la case vide (haut-gauche dans l'image)
  console.log(parts);
}

// gestion du click sur le canvas
canvas.addEventListener("click", (event) => {
  let coord = { x: event.offsetX, y: event.offsetY }; //on récupère les coordonnées
  if (isNear(coord)) {
    //on permute l'image si c'est possible
    if (isSorted(parts)) {
      // si le tableau est trié c'est gagné
      window.alert("Gagné !!!!");
    }
  }
});

function isNear(coord) {
  let c = Math.floor(coord.x / w);
  let l = Math.floor(coord.y / w);
  let i0 = parts.indexOf(0);        /*La méthode indexOf() renvoie le premier indice pour lequel on trouve un élément donné dans un tableau. Si l'élément cherché n'est pas présent dans le tableau, la méthode renverra -1.*/
  let c0 = i0 % 3;
  let l0 = Math.floor(i0 / 3);
  let deltac = Math.abs(c - c0);   /*La fonction Math.abs() renvoie la valeur absolue d'un nombre.*/
  let deltal = Math.abs(l - l0);
  //    i
  //  i 0 i au dessus dessous droit ou gauche
  //    i
  if (deltal + deltac == 1) {
    //move image
    let dx = c0 * w;
    let dy = l0 * w;
    let i = l * 3 + c;
    let sx = (parts[i] % 3) * w;
    let sy = Math.floor(parts[i] / 3) * w;
    console.log("move :", dx, dy, sx, sy);
    context.drawImage(img, sx, sy, w, w, dx, dy, w, w);
    //efface Image
    dx = c * w;
    dy = l * w;
    context.clearRect(dx, dy, w, w);
    //mise a jour du taquin
    parts[i0] = parts[i];
    parts[i] = 0;
    console.log(parts);
    return true;
  } else return false;
}

function isSorted(tab) {
  for (let i = 0; i < tab.length - 1; i++) {
    if (tab[i] > tab[i + 1]) {
      return false;
    }
  }
  return true;
}

document.getElementById("img1").addEventListener("change", function () {
  img.src = this.value;
});
document.getElementById("img2").addEventListener("change", function () {
  img.src = this.value;
});

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
}
