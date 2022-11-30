/* on mémorise l'emplacement de la case vide */
var erow = 2;
var ecol = 2;
var nombreClics = 0;
//____________________________________________________________________

function calqueImage() {
  let allpieces = document.getElementsByClassName("piece");
  console.log(allpieces);
  for (let i = 0; i < allpieces.length; i++) {
    x = ((100 / 2) | 0) * (i % 3) + "%";
    y = ((100 / 2) | 0) * ((i / 3) | 0) + "%";
    console.log(allpieces[i]);
    allpieces[i].style.backgroundImage = "url(image_taquin1.jpg)";
    allpieces[i].style.backgroundSize = "300%";
    allpieces[i].style.backgroundPosition = x + " " + y;
  }
}
calqueImage();

function gamewin() {
  const pieces = document.querySelectorAll("div#puzzle .piece");
  console.log(pieces);
  for (let i = 0; i < pieces.length; i++) {
    if (pieces[i] > pieces[i + 1]) return;
  }
  {
    // Signifier la victoire
    //toujours const avec .documentbyId
  }
}
gamewin();

function swapTiles(id1, id2) {
  var temp = document.getElementById(id2).className;
  document.getElementById(id2).className =
    document.getElementById(id1).className;
  document.getElementById(id1).className = temp;
  temp = document.getElementById(id1).innerHTML;
  document.getElementById(id1).innerHTML =
    document.getElementById(id2).innerHTML;
  document.getElementById(id2).innerHTML = temp;
  erow = parseInt(document.getElementsByClassName("empty")[0].id[5]);
  ecol = parseInt(document.getElementsByClassName("empty")[0].id[6]);
}

/*function swapTiles(block1, block2) {
  var temp = document.getElementById(block1).className;
  document.getElementById(block1).className =
    document.getElementById(block2).className;
  document.getElementById(block2).className = temp;
  temp = document.getElementById(block1).innerHTML;
  document.getElementById(block1).innerHTML =
    document.getElementById(block2).innerHTML;
  document.getElementById(block2).innerHTML = temp;
  erow = parseInt(document.getElementsByClassName("empty")[0].id[5]);
  ecol = parseInt(document.getElementsByClassName("empty")[0].id[6]);
}*/

function shuffle() {
  //Use nested loops to access each block of the 3x3 grid
  for (var row = 1; row <= 3; row++) {
    //For each row of the 3x3 grid
    for (var column = 1; column <= 3; column++) {
      //For each column in this row

      var row2 = Math.floor(Math.random() * 3); //Pick a random row from 1 to 3
      var column2 = Math.floor(Math.random() * 3); //Pick a random column from 1 to 3

      swapTiles("block" + row + column, "block" + row2 + column2); //Swap the look & feel of both blocks
    }
    column = 1;
  }
}

/*function clickTile(row, column) {
  var block = document.getElementById("block" + row + column);
  var tile = block.className;
  if (tile != "tile9") {
    //Checking if white tile on the right
    if (column < 3) {
      if (
        document.getElementById("block" + row + (column + 1)).className ==
        "tile9"
      ) {
        swapTiles("block" + row + column, "block" + row + (column + 1));
        return;
      }
    }
    //Checking if white tile on the left
    if (column > 1) {
      if (
        document.getElementById("block" + row + (column - 1)).className ==
        "tile9"
      ) {
        swapTiles("block" + row + column, "block" + row + (column - 1));
        return;
      }
    }
    //Checking if white tile is above
    if (row > 1) {
      if (
        document.getElementById("block" + (row - 1) + column).className ==
        "tile9"
      ) {
        swapTiles("block" + row + column, "block" + (row - 1) + column);
        return;
      }
    }
    //Checking if white tile is below
    if (row < 3) {
      if (
        document.getElementById("block" + (row + 1) + column).className ==
        "tile9"
      ) {
        swapTiles("block" + row + column, "block" + (row + 1) + column);
        return;
      }
    }
  }
}*/

/*
//Resources

//__________________________________________________________________________
function swapcase(block1,block2) {
  var temp = document.getElementById(block1).className;
  document.getElementById(block1).className = document.getElementById(block2).className;
  document.getElementById(block2).className = temp;
}

function shuffleRandom() {
//Use nested loops to access each block of the 3x3 grid
for (var row=1;row<=3;row++) { //For each row of the 3x3 grid
   for (var column=1;column<=3;column++) { //For each column in this row
  
    var row2 = Math.floor(Math.random()*3 + 1); //Pick a random row from 1 to 3
    var column2 = Math.floor(Math.random()*3 + 1); //Pick a random column from 1 to 3
     
    shuffleRandom("block"+row+column,"block"+row2+column2); //Swap the look & feel of both blocks
  } 
} 
}

function clickTile(ligne,column) {
  var block = document.getElementById("block"+row+column);
  var tile = block.className;
  if (tile!="tile9") { 
       //Checking if white tile on the right
       if (column<3) {
         if ( document.getElementById("block"+row+(column+1)).className=="tile9") {
           swapcase("block"+row+column,"block"+row+(column+1));
           return;
         }
       }
       //Checking if white tile on the left
       if (column>1) {
         if ( document.getElementById("block"+row+(column-1)).className=="tile9") {
           swapcase("block"+row+column,"block"+row+(column-1));
           return;
         }
       }
         //Checking if white tile is above
       if (row>1) {
         if ( document.getElementById("block"+(row-1)+column).className=="tile9") {
           swapcase("block"+row+column,"block"+(row-1)+column);
           return;
         }
       }
       //Checking if white tile is below
       if (row<3) {
         if ( document.getElementById("block"+(row+1)+column).className=="tile9") {
           swapcase("block"+row+column,"block"+(row+1)+column);
           return;
         }
       } 
     }   
  }*/

//var casedepart = "block" + row + col;
//var casearrivee = "block" +

/*var numerobouge;
var casebouge = document.getElementById("numerobouge");


var kase1 = document.getElementsByClassName("piece")[0];
var kase2 = document.getElementsByClassName("piece")[0];
var kase3 = document.getElementsByClassName("piece")[0];
var kase4 = document.getElementsByClassName("piece")[0];
var kase5 = document.getElementsByClassName("piece")[0];
var kase6 = document.getElementsByClassName("piece")[0];
var kase7 = document.getElementsByClassName("piece")[0];
var kase8 = document.getElementsByClassName("piece")[0];

var emptyRow, emptyCol;

var shufflepuzzle = function() {
  numerobouge = 0;
  movesblock.innerHTML = casebouge; // update # of moves displayed
  [emptyRow, emptyCol] = [2, 2];

var numeros= [ [0,0], [0,1], [0,2], [1,0], [1,1], [1,2], [2,0], [2,1] ];

var Kase = [kase1, kase2, kase3, kase4, kase5, kase6, kase7, kase8];

for(let i=7; i>=0; i--) {
  let r = Math.round(Math.random() * i); // random integer from 0 to i
  let poppedPos = positions.splice(r, 1); // removes an element from "positions" array at "r" position
  Kase[i].style.gridRow = poppedPos[0][0];
  Kase[i].style.gridColumn = poppedPos[0][1];
}
}
//fonction shuffle debut
var moveblock = function() {
  thisRow = this.style.gridRow.charAt(0);
  thisCol = this.style.gridColumn.charAt(0);
  //console.log("thisRow: "+thisRow+", thisCol: "+thisCol+", erow: "+erow+", ecol: "+ecol);
  if (emptyRow == thisRow) {
    if (parseInt(thisCol)+1 == emptyCol || parseInt(thisCol)-1 == ecol) {
      let tmpCol = thisCol; // current block scope variable
      this.style.gridColumn = emptyCol.toString(); // move it horizontally
      emptyCol = tmpCol;
      numerobouge++;
    }
  } else if (emptyCol == thisCol) {
    if (parseInt(thisRow)+1 == emptyRow || parseInt(thisRow)-1 == emptyRow) {
      let tmpRow = thisRow; // current block scope variable
      this.style.gridRow = emptyRow.toString(); // move it vertically
      emptyRow = tmpRow;
      numerobouge++;
    }
  }
  movesblock.innerHTML = numerobouge; // update # of moves displayed
}

/*case1.onclick = moveTile;
case2.onclick = moveTile;
case3.onclick = moveTile;
case4.onclick = moveTile;
case5.onclick = moveTile;
case6.onclick = moveTile;
case7.onclick = moveTile;
case8.addEventListener("click", moveTile); // alternative way to write it*/
/*
document.getElementById("newgame").onclick = randomizePuzzle;
document.getElementById("solveit").onclick = solvePuzzle;

randomizePuzzle();
*/
//shuffle fin

/* Fonction qui échange la case (row,col) avec la case vide */
function bouge(row, col) {
  if (
    (erow == row && (col == ecol - 1 || col == ecol + 1)) ||
    (ecol == col && (row == erow - 1 || row == erow + 1))
  ) {
    /* mise à jour du nombre de clics */
    nombreClics += 1;

    /* on récupère l'élément compteur */
    var noeud_compteur = document.getElementById("compteur");
    noeud_compteur.innerHTML =
      nombreClics == 1 ? nombreClics + " coup!!" : nombreClics + " coups!!";

    /*var bouton = chercherCaseVide();
  var result = " row = " + row + " col = " + col + " bouton.id " + bouton.id;
  alert(result);
  return result;*/

    // // // /* créer un nouveau noeud textuel avec la valeur nbclicks */
    // var compteur_txt;
    // if (nbclicks == 1) {
    //     compteur_txt = document.createTextNode('un seul coup joué');
    // } else {
    //     compteur_txt = document.createTextNode(nbclicks + ' coups joués');
    // }

    // noeud_compteur.innerHTML = "";

    // // /* ajouter ce noeud textuel comme fils de l'élément compteur */
    // noeud_compteur.appendChild(compteur_txt);

    /* on récupère les identifiants des deux boutons concernés */

    var casepleine = "block" + row + col;
    var casevide = "block" + erow + ecol;
    swapTiles(casepleine, casevide);
    gamewin();

    //var casedepart = "block" + row + col;
    //var casearrivee = "block" +
    //var numerobouge;
    //var casebouge = document.getElementById("numerobouge");
    /*var case 1 = document.getElementsByClassName("piece")[0];
var case 2 = document.getElementsByClassName("piece")[0];
var case 3 = document.getElementsByClassName("piece")[0];
var case 4 = document.getElementsByClassName("piece")[0];
var case 5 = document.getElementsByClassName("piece")[0];
var case 6 = document.getElementsByClassName("piece")[0];
var case 7 = document.getElementsByClassName("piece")[0];
var case 8 = document.getElementsByClassName("piece")[0];
var case 9 = document.getElementsByClassName("empty")[0]*/
    /*var shufflepuzzle = function() {
  numerobouge = 0;
  movesblock.innerHTML = casebouge; // update # of moves displayed
  [erow, ecol] = [2, 2];*/

    /*var tmp = pnoeud.innerHTML;
    pnoeud.innerHTML = enoeud.innerHTML;
    enoeud.innerHTML = tmp;*/

    /* on récupère les noeuds correspondant à ces boutons */
    /*var pnoeud = document.getElementById(casepleine);
    var enoeud = document.getElementById(casevide);*/

    /* on peut directement utiliser un tampon afin de switcher les deux texte */
    /* var tmp = pnoeud.innerHTML;
    pnoeud.innerHTML = enoeud.innerHTML;
    enoeud.innerHTML = tmp; */

    /* on récupère les fils textuels des deux boutons */
    //var pvalue = pnoeud.removeChild(pnoeud.childNodes[0]);
    //var evalue = enoeud.removeChild(enoeud.childNodes[0]);

    /* on échange ces fils */
    //pnoeud.appendChild(evalue);
    //enoeud.appendChild(pvalue);

    /* on échange les classes des deux boutons */
    /* on échange les classes des deux boutons */
    /*document.getElementById("block" + row + col).setAttribute("class", "empty");
    document
      .getElementById("block" + erow + ecol)
      .setAttribute("class", "piece");*/

    /* on enlève le "focus" sur le bouton cliqué */
    // pnoeud.blur();

    /* on mémorise l'emplacement de la case vide */
    /*erow = row;
    ecol = col;*/

    /* ajouter ce noeud textuel comme fils de l'élément compteur */
    //noeud_compteur.appendChild(compteur_txt);
  }
}

/*function bouge1(row, col, uk, po) {
  let result = "" + row + col + uk + po;
  //alert(result);
  alert("" + row + col + uk + po);
  return result;
}*/

/*function chercherCaseVide() {
  let result;
  let casesvides = document.getElementsByClassName("empty");
  //mettre container si on a cherché id=puzzle
  result = casesvides[0];
  return result;
}*/

/*Mélanger aléatoirement les cases au début du jeu.
Détecter la fin de partie.
Adapter le jeu à une version avec les morceaux d'une photo, plutôt qu'avec des boutons*/

function testbravo(succes) {
  var divbravo = document.getElementById("bravo");
  divbravo.innerHTML = "Félicitations !";
  alert("declenche");
  //if (i= true; ; )
  console.log(divbravo);
}
