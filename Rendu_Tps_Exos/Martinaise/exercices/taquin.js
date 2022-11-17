/* on mémorise l'emplacement de la case vide */
let elig = 4;
let ecol = 4;
let nbclicks = 0;

/* Fonction qui échange la case (lig,col) avec la case vide */
function move(lig, col) {
  if (
    (elig == lig && (col == ecol - 1 || col == ecol + 1)) ||
    (ecol == col && (lig == elig - 1 || lig == elig + 1))
  ) {
    /* mise à jour du nombre de clics */
    nbclicks += 1;

    /* on récupère l'élément compteur */
    let noeud_compteur = document.getElementById("compteur");
    noeud_compteur.innerHTML =
      nbclicks == 1 ? nbclicks + " coup!!" : nbclicks + " coups!!";

    // /* créer un nouveau noeud textuel avec la valeur nbclicks */
    // var compteur_txt;
    // if (nbclicks == 1) {
    //     compteur_txt = document.createTextNode('un seul coup joué');
    // } else {
    //     compteur_txt = document.createTextNode(nbclicks + ' coups joués');
    // }

    // noeud_compteur.innerHTML = "";

    // /* ajouter ce noeud textuel comme fils de l'élément compteur */
    // noeud_compteur.appendChild(compteur_txt);

    /* on récupère les identifiants des deux boutons concernés */
    let bname = "case" + lig + col;
    let ename = "case" + elig + ecol;

    /* ou on faire autrement => */
    /* on récupère les noeuds(caseremplit=Bnode,casevide=enode) correspondant à ces boutons */
    let bnode = document.getElementById(bname);
    let enode = document.getElementById(ename);

    /* on peut directement utiliser un tampon afin de switcher les deux texte
     */
    let tmp = bnode.innerHTML;
    bnode.innerHTML = enode.innerHTML;
    enode.innerHTML = tmp;

    /* on récupère les fils textuels des deux boutons */
    // var bvalue = bnode.removeChild(bnode.childNodes[0]);
    // var evalue = enode.removeChild(enode.childNodes[0]);

    /* on échange ces fils */
    // bnode.appendChild(evalue);
    // enode.appendChild(bvalue);

    /* on échange les classes des deux boutons */
    document
      .getElementById("case" + lig + col)
      .setAttribute("class", "emptycase");
    document.getElementById("case" + elig + ecol).setAttribute("class", "case");

    /* on enlève le "focus" sur le bouton cliqué */
    // bnode.blur();

    /* on mémorise l'emplacement de la case vide */
    elig = lig;
    ecol = col;
  }
}

// étape pour melanger le jeu aléatoirement
/* 0)determiner le nommbre de case à faire
  prendre en compte si on change de ligne à 3 ou 4 ...
1) choisit de 1ere  case ici case 11
2) choisit 2eme  case ici case 32
3)permutation
-des texte
-des classes
4)passer à la case suivante
5)tant qu'il y'a des cases a faire

*/
function melangejeu() {
  // recupère ma liste jeu
  let divjeu = document.getElementById("jeu");
  //recupère ma liste de button
  let tableaubutton = divjeu.getElementsByTagName("button");
  console.log(tableaubutton);

  // boucle pour parcourir tout le tableau
  for (let i = 0; i < tableaubutton.length; i++) {
    //choix case de depart
    let casedepart = tableaubutton[i];
    //on genère les nombre aléatoire de 11 à 44
    let nomaleatoire =
      "case" + getRandomArbitrary(1, 4) + getRandomArbitrary(1, 4);
    console.log(nomaleatoire);

    let casealeatoire = document.getElementById(nomaleatoire);

    //permutation de text
    // on garde la valeur de depart dans la variable temporaire(tmp)
    let tmp = casedepart.innerHTML;
    casedepart.innerHTML = casealeatoire.innerHTML;
    casealeatoire.innerHTML = tmp;

    //permutation de class get je vais chercher set je mets
    let tmp2 = casedepart.getAttribute("class");
    let tmp3 = casealeatoire.getAttribute("class");
    casedepart.setAttribute("class", tmp3);
    casealeatoire.setAttribute("class", tmp2);

    /* on fait une condition pour savoir quel case est vide et quel est aléatoire pour pouvoir 
        changer les positions de depart(elig = 4;
            let ecol = 4;) qui ont changé avec le mode aléatoire*/
    if (tmp2 == "emptycase") {
      let number = casedepart.id.substring(4, 6);
      let tabnumber = number.split("");

      elig = tabnumber[1];
      ecol = tabnumber[0];

      console.log(tabnumber, elig, ecol);

      // "je suis vide"
    }
    if (tmp3 == "emptycase") {
      let number = casedepart.id.substring(4, 6);
      let tabnumber = number.split("");

      elig = tabnumber[1];
      ecol = tabnumber[0];
      console.log(tabnumber, elig, ecol);

      // "je suis vide"
    }
  }
}
//function melange aléatoire
function getRandomArbitrary(min, max) {
  // pour avoir que des nombres entier on utilise math.floor
  return Math.floor(Math.random() * (max - min) + min);
}
