<<<<<<< HEAD
// on récupére le modéle gagnant
let lst = Array.from(document.querySelector(".bloc").children).map(child => child.innerHTML);
console.log(lst);
=======
>>>>>>> bd32a63de40c805523530f988c5beb01c08e671f
// lorsque l'on clique sur un bouton, l'échange avec la case vide.

var videLigne = 4;
var videCol = 4;
var nbrclicks = 0;
//var win_array = document.querySelector(".bloc").children;
//console.log(win_array);


//let array_swapp;

function swap(ligne, col) {
  console.log("avant");
  console.log(ligne);
  console.log(col);
  console.log(videLigne);
  console.log(videCol);
  console.log(ligne == videLigne ? "true" : "false");
  console.log((col == videCol - 1) ? "true" : "false");
  console.log((col == videCol + 1) ? "true" : "false");
  console.log(col == videCol ? "true" : "false");
  console.log((ligne == videLigne - 1) ? "true" : "false");
  console.log((ligne == videLigne + 1) ? "true" : "false");
  if (
    (ligne == videLigne && ((col == videCol - 1) ||  (col == videCol + 1)))
    || (col == videCol && ((ligne == videLigne - 1) || (ligne == videLigne + 1)))
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

    // mémoriser le modéle de base = tabWinner

    // comaprer le modéle winner et le newModel aprés chaque coup valide

    // condition et boucle for si tabWinner = newModel  est pareil  donc gagnant sinon continue le jeux
   /* var array_swapp = document.querySelector(".bloc").children;
    console.log(array_swapp);
    console.log(JSON.stringify(array_swapp));*/
    let lst_swap = Array.from(document.querySelector(".bloc").children).map(child => child.innerHTML);
    console.log(lst_swap);
    if(JSON.stringify(lst) == JSON.stringify(lst_swap) )
    {
      document.getElementById("win").innerHTML='YOU WIN';
    }
     

  }
}

function shuffle() {g
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







