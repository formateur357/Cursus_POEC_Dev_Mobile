//mémoriser l'emplacement de la case vide
var emptyLign = 4;
var emptyCol = 4;
var nbClick = 0;
//photo instantanée au début du jeu qui serira plus tard à déterminer si jeu gagné
let lst = Array.from(document.querySelector(".jeu").children).map(child => child.innerHTML);
console.log(lst);

//fonction qui échange la case cliquée avec la case vide
function move(lign, col) {
  if (
    (emptyLign == lign && (col == emptyCol - 1 || col == emptyCol + 1)) ||
    (emptyCol == col && (lign == emptyLign - 1 || lign == emptyLign + 1))
  ) {
    //maj nombre clicks
    nbClick = nbClick + 1;
    //récuprération du compteur
    var compteurClick = document.getElementById("compteurClick");

    //couper fil ducompteur
    compteurClick.removeChild(compteurClick.childNodes[0]);

    //amener la valeur clicks
    var compteurText;
    if (nbClick == 1) {
      compteurText = document.createTextNode("Un seul coup joué !");
    } else {
      compteurText = document.createTextNode(nbClick + " coups joués !");
    }

    compteurClick.appendChild(compteurText);

    //récupération des noms des cases cliquée et vide
    var clickName = "case" + lign + col;
    var emptyName = "case" + emptyLign + emptyCol;

    //on récupère les noeuds des boutons
    var clickNode = document.getElementById(clickName);
    var emptyNode = document.getElementById(emptyName);

    //on récupère la valeur textuelle des boutons
    var clickValue = clickNode.removeChild(clickNode.childNodes[0]);
    var emptyValue = emptyNode.removeChild(emptyNode.childNodes[0]);

    //on interchange ces valeurs
    clickNode.appendChild(emptyValue);
    emptyNode.appendChild(clickValue);

    //on interchange les classes des boutons
    clickNode.setAttribute("class", "emptyCase");
    emptyNode.setAttribute("class", "case");

    //on elève le focus sur la case cliquée
    clickNode.blur();

    //on mémorise le nouvel emplacement de la case vide
    (emptyLign = lign), (emptyCol = col);

    //por vérifier si jeu gagné
    let lst_move = Array.from(document.querySelector(".jeu").children).map(child => child.innerHTML);
    console.log(lst_move);
    //"JSON.stingify()" permet de comparer deux valeur de même format et nature
    if(JSON.stringify(lst) == JSON.stringify(lst_move)){
      document.getElementById('victoire').innerHTML="c'est fini !!";
      document.getElementById('victoire').style.color="red";
    }
   
  }
}

//Mélange aléatoire
function melange() {
  var lign;
  var col;
  var alea = document.querySelector(".jeu");

  for (var i = alea.children.length; i >= 0; i--) {
    alea.appendChild(alea.children[(Math.random() * i) | 0]);
    emptyLign = lign;
    emptyCol = col;
  }
}

//AUTRE METHODE POUR MELANGE ALEATOIRE

// function shuffle() {
//   var array = document.querySelector(".jeu").children;
//   let currentIndex = array.length, randomIndex;

//   // While there remain elements to shuffle.
//   while (currentIndex != 0) {

//     // Pick a remaining element.
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     // And swap it with the current element.
//     [array[currentIndex].innerHTML, array[randomIndex].innerHTML] = [
//       array[randomIndex].innerHTML, array[currentIndex].innerHTML];

//     [array[currentIndex].className, array[randomIndex].className] = [
//       array[randomIndex].className, array[currentIndex].className];
//   }
// }

//Pour retrouver coordonnées de la case vide
// videLigne = parseInt(document.getElementsByClassName("vide")[0].id[4]);
//videCol = parseInt(document.getElementsByClassName("vide")[0].id[5]);





 
  
  
 
