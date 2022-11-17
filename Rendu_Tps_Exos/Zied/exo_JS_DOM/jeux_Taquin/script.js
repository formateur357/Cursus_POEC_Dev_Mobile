

// lorsque l'on clique sur un bouton, l'échange avec la case vide.

var videLigne = 4;
var videCol = 4;
var nbrclicks = 0;


//let array_swapp;

function swap(ligne, col) {
  if (
    (ligne == videLigne && (videCol - 1 == col || videCol + 1 == col))
    || (col == videCol && (videLigne - 1 == ligne || videLigne + 1 == ligne))
  ) {



    nbrclicks = nbrclicks + 1; // nbrclicks +=1;
    //console.log(nbrclicks);

    var n_clicks = document.getElementById("compteur");
    //n_clicks = n_clicks.removeChild(n_clicks.childNodes[0]);
    //n_clicks.innerHTML=nbrclicks


    if (nbrclicks == 1) {
      n_clicks.innerHTML = "premier coup"

    } else {
      n_clicks.innerHTML = (nbrclicks + " coups joué");
    }

    var newCase = "case" + ligne + col;
    var newVide = "case" + videLigne + videCol;

    //console.log(newCase);
    //console.log(newVide);
    /*function changeClass("class") { 
      document.getElementById('case').className = "newClass"; 
    }*/

    /* document.querySelector("#case").inner.HTML= "hide Result";*/
    var chCase = document.getElementById(newCase);
    var chVide = document.getElementById(newVide);

    //console.log(chCase);
    //console.log(chVide);

    var valLigne = chCase.removeChild(chCase.childNodes[0]);
    var valCol = chVide.removeChild(chVide.childNodes[0]);

    chCase.appendChild(valCol);
    chVide.appendChild(valLigne);

    chCase.setAttribute("class", "vide");
    chVide.setAttribute("class", "grille");




    videLigne = ligne;
    videCol = col;
    //win();
    //classList.replace( grille , vide )
    //var array_swapp = document.querySelector(".bloc").children;
  }


}


//Array.from(array);
/*
function win() {
  var array = document.querySelector(".bloc").children;
console.log(array);
}
*/
function shuffle() {
  var array = document.querySelector(".bloc").children;
  let currentIndex = array.length, randomIndex;
  console.log(array);


  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex].innerHTML, array[randomIndex].innerHTML] = [
      array[randomIndex].innerHTML, array[currentIndex].innerHTML];

    [array[currentIndex].className, array[randomIndex].className] = [
      array[randomIndex].className, array[currentIndex].className];
  }

  videLigne = parseInt(document.getElementsByClassName("vide")[0].id[4]);
  videCol = parseInt(document.getElementsByClassName("vide")[0].id[5]);
}




