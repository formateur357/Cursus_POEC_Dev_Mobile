/* on mémorise l'emplacement de la case vide */
let elig = 4;
let ecol = 4;
let nbclicks = 0;

/* Fonction qui échange la case (lig,col) avec la case vide */
function move(lig, col) {
  if (
    (elig == lig && (col == ecol - 1 || col == ecol + 1))
    || (ecol == col && (lig == elig - 1 || lig == elig + 1))
  ) {
    /* mise à jour du nombre de clics */
    nbclicks += 1;

    /* on récupère l'élément compteur */
    let noeud_compteur = document.getElementById('compteur');
    noeud_compteur.innerHTML = nbclicks == 1 ? nbclicks + " coup!!" : nbclicks + " coups!!"

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
    let bname = 'case' + lig + col;
    let ename = 'case' + elig + ecol;

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
    document.getElementById('case' + lig + col).setAttribute('class', 'emptycase');
    document.getElementById('case' + elig + ecol).setAttribute('class', 'case');

    /* on enlève le "focus" sur le bouton cliqué */
    // bnode.blur();

    /* on mémorise l'emplacement de la case vide */
    elig = lig;
    ecol = col;
    game_win();
  }
}

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
// étape pour melanger le jeu aléatoirement avec la fontion shuffle
function shuffle() {
  // on selectionnent tous les elelement,puis elements de jeu(button)on met les buttons dans la variable jeu
  let divjeu = document.querySelectorAll("#jeu button");
  // on décremente le tableau. Ici on commence par  16 ensuite 15 ,14 ...
  for (let i = divjeu.length; i > 0; i--) {
    /* On prend un nombre de la fin du tableau en locurence 16 ici
    on le multiplit par le nombre aléatoire de Math.random ex 15 * 0,5= 7,5 soit 7
    14 * 0,2= 2,8 soit 2
    on met le | 0 pour garder que le nombre entier 7.
    maths random ne peux prendre que 2 valeurs 0 et  une valeur < 1.
    puis on remplit le tableau au fur et a mesure jusqu'au 15
    */
    let randomChild = divjeu[Math.random() * i | 0];
    // voir feuille mis dans html
    let lastChild = divjeu[i - 1];

    //pour echanger les class et innerhtml
    [randomChild.innerHTML, lastChild.innerHTML] = [lastChild.innerHTML, randomChild.innerHTML];
    [randomChild.className, lastChild.className] = [lastChild.className, randomChild.className];
  }


  // tranformer une  chaine de caractère  en entier
  elig = parseInt(document.getElementsByClassName("emptycase")[0].id[4]);
  ecol = parseInt(document.getElementsByClassName("emptycase")[0].id[5]);
}

/*
 * Classement de tous les boutons HTML par ordre croissant
 */
function classer_cases() {
  // recupère ma liste jeu
  let divjeu = document.getElementById("jeu");
  //recupère ma liste de button
  let tableaubutton = divjeu.getElementsByTagName("button");
  console.log(tableaubutton);

  // boucle pour parcourir tout le tableau
  for (let i = 0; i < tableaubutton.length; i++) {
    // choix case de depart
    let casedepart = tableaubutton[i];
    if (i == 0) {
      casedepart.setAttribute("class", "emptycase");
      casedepart.innerHTML = "&nbsp;";
    } else {
      casedepart.setAttribute("class", "case");
      casedepart.innerHTML = "" + i;
    }
  }
  elig = 1;
  ecol = 1;
}
// fonction pour dire que vous avez gagnez
function game_win() {
  // selection des cases remplit
  let divjeu = document.querySelectorAll("#jeu .case");
  //
  for (let i = 0; i < divjeu.length - 1; i++) {
    // une condition pour dire que si la case est inferieur a celle suivante on retourne le nombre
    if (divjeu[i] > divjeu[i + 1])
      return ;
  }
  // dire au joueur que c'est gagné
}




