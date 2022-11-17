/*
taquin.js
*/

let tab = [
  /* mettre un seul zéro dans la table */
  [0, 10, 6, 4],
  [1, 11, 8, 5],
  [13, 9, 7, 14],
  [15, 12, 2, 3],
];

let maxi; // Taille maxi pour x et y d'après la première ligne du tableau
let lig_empty; // position verticale de la case vide
let col_empty; // position horizontal de la case vide
let compteur = 0; // Nombre mouvements va
let withImage = false; // false= version texte true= version avec images
let image_name = "img/cat_best_joke.jpg";
let largeur_cellule = 70;
/*
 * Recopier le compteur sur la page
 */
function show_counter() {
  let element_cpt = document.getElementById("compteur");
  element_cpt.innerText = compteur;
}

/*
 * Détecter la fin de partie
 *
 * retourner true si fin de partie ( c'est a dire le tableau est classé) sinon renvoie false
 */
function detecterFinDePartie() {
  for (let y = 0; y < maxi; y++) {
    for (let x = 0; x < maxi; x++) {
      let valeur = y * maxi + x;
      if (tab[y][x] != valeur) {
        // Pas bien classé, donc le joueur n'a pas fini
        return false;
      }
    }
  }
  // S'il n'y pas eu d'erreur de classement, c'est que la partie est terminée
  return true;
}

/*
 * Vérifier si on peut faire un permutation, et la faire si c'est possible puis incrémenter le compteur de mouvements corrects
 * Retourner true si permutation faite, false si non faite
 */
function move2(lig, col) {
  let name_btn = "btn-" + lig + "-" + col;
  let name_empty = "btn-" + lig_empty + "-" + col_empty;

  if (isEmpty(col, lig) == 0) {
    // Click sur la case vide
    return false;
  }

  if (!isMovable(col, lig)) {
    // Mouvement non autorisé par la règle du jeu
    return false;
  }

  console.log("move2 col=" + col, "lig=" + lig);
  ////
  ////
  //// Maintenant on va permuter tout ce qui est indispensable : les éléments HTML, les classes CSS, et les valeurs dans le tableau javascript
  ////
  ////
  let element_btn = document.getElementById(name_btn);
  let element_empty = document.getElementById(name_empty);
  let child_btn = element_btn.removeChild(element_btn.childNodes[0]);
  let child_empty = element_empty.removeChild(element_empty.childNodes[0]);
  // Permuter dans le HTML
  element_btn.appendChild(child_empty);
  element_empty.appendChild(child_btn);
  // Permuter le style CSS
  element_btn.setAttribute("class", "no-taquin");
  element_empty.setAttribute("class", "taquin");
  // Valider le focus pour gestion clavier ultérieure
  element_btn.blur(); // Enlever le focus
  element_empty.focus(); // Mettre le focus
  // Permuter en mémoire dans le tableau
  let tmp = tab[lig][col];
  tab[lig][col] = tab[lig_empty][col_empty];
  tab[lig_empty][col_empty] = tmp;
  // Déplacer la position de la case vide
  lig_empty = lig;
  col_empty = col;
  // Tester si c'est la fin du jeu
  let fin = detecterFinDePartie();
  if (fin) {
    let answer = confirm("La partie est terminée\nNouvelle partie ?");
    if (answer) {
      shuffle_and_refresh(); // On relance automatiquement une partie
    }
  } else {
    // Incrémenter le compteur de parties
    compteur++;
  }
  // Retourner qu'on a pu faire le déplacement
  return true;
}

/*
 * Faire le mouvement si possible et mettre à jour les affichages
 */
function move(y, x) {
  let b = move2(y, x);
  console.info("x=" + x, "y=" + y, "b=" + b);
  show_counter();
}

/*
 * Retourne 0 si la case x,y est la case vide,
 * Sinon retourne la valeur dans la case
 */
function isEmpty(x, y) {
  let ret;
  if (tab[y][x] == 0) {
    // C'est la case vide, ne rien faire
    console.log("case zero en x=" + x, "y=" + y);
    ret = tab[y][x]; // 0
  } else {
    ret = tab[y][x]; // différent de zero
  }
  return ret;
}

/*
 * Retourne vrai si la case x,y est suffisamment proche de la case vide
 */
function isMovable(x, y) {
  let ret = false;
  if (tab[y][x] == 0) {
    // C'est la case vide, ne rien faire
    ret = false;
  } else {
    if (y - 1 >= 0 && tab[y - 1][x] == 0) {
      return true; // au dessus
    }
    if (x + 1 < maxi && tab[y][x + 1] == 0) {
      return true; // a droite
    }
    if (y + 1 < maxi && tab[y + 1][x] == 0) {
      return true; // en dessous
    }
    if (x - 1 >= 0 && tab[y][x - 1] == 0) {
      return true; // a gauche
    }
  }
  return ret;
}

/*
 * Ancienne fonction inutile
 */
function add_tag_image_v0(btn, lig, col) {
  let x = col * largeur_cellule;
  let y = lig * largeur_cellule;
  let backgr_pos = `background-position: ${x}px ${y}px;`;
  let imgtag = '<div class="img_taquin" style="' + backgr_pos + '" />';
  btn.innerHTML = imgtag;
  return btn;
}

/*
 * Ancienne fonction inutile
 */
function add_tag_image_v1_ok(btn, lig, col) {
  let x = (100 / maxi) * col;
  let y = (100 / maxi) * lig;
  let backgr_pos = `background-position: ${x}% ${y}%  background-size:${maxi}00%;`;
  let imgtag = '<div class="img_taquin" style="' + backgr_pos + '" />';
  btn.innerHTML = imgtag;
  return btn;
}

/*
 * Retourne un nouveau tableau sans la valeur présente dans le tableau passé en paramètre
 */
function enleve_valeur(arr, valeur) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.filter(function (val) {
    return val != valeur;
  });
}

/*
 * Modifie les classes CSS du bouton passé en paramètre
 */
function add_tag_image(btn, lig, col) {
  let x = (100 / maxi) * col;
  let y = (100 / maxi) * lig;
  btn.style.backgroundPosition = `${x}% ${y}%`;
  btn.style.backgroundSize = `${maxi}00%;`;
  btn.classList.remove("taquin");
  btn.classList.add("img_taquin");
  return btn;
}

/*
 * Recopier le tableau javascript vers le HTML
 */
function show_gameboard(texte) {
  console.info("show_gameboard " + texte);
  let gameboard = document.getElementById("gameboard");
  let buttons = gameboard.getElementsByTagName("button");
  for (let index_btn = 0; index_btn < buttons.length; index_btn++) {
    let btn = buttons[index_btn];
    let idstr = btn.id;
    const chunks = idstr.split("-");
    let lig = chunks[1];
    let col = chunks[2];
    let val = tab[lig][col];
    //
    if (index_btn >= buttons.length - 1) {
      console.log("dernier bouton col=", col, "lig=" + lig);
    }

    //
    if (val == 0) {
      // Case vide
      if (withImage) {
        btn = add_tag_image(btn, lig, col);
      } else {
        btn.innerText = " ";
        btn.classList.add("no-taquin");
      }
    } else {
      // Toutes les autres valeurs
      btn.classList.remove("no-taquin");
      if (withImage) {
        btn = add_tag_image(btn, lig, col);
      } else {
        btn.innerText = "" + val;
        btn.classList.add("taquin");
      }
    }
    //
    if (!withImage) {
      btn.classList.remove("img_taquin");
      //  btn.classList.add("taquin");
    }
    console.log(index_btn, lig, col, val, chunks, btn.classList);
  }
  show_counter();
}

/*
 * Chercher un nombre entier aléatoire entre  et max
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/**
 * Permutation dans le tableau javascript
 */
function shuffle() {
  for (let y = 0; y < maxi; y++) {
    for (let x = 0; x < maxi; x++) {
      let x1 = getRandomInt(maxi);
      let y1 = getRandomInt(maxi);
      if (x1 != x && y1 != y) {
        // on peut permuter
        let tmp = tab[y][x];
        tab[y][x] = tab[y1][x1];
        tab[y1][x1] = tmp;
      }
    }
  }
}

/*
 * Crée un tableau bien classé afin de pouvoir tester la fonction qui détermine si la partie gagnante
 * et affichage dans la grille de jeu
 */
function sorted_and_refresh() {
  for (let y = 0; y < maxi; y++) {
    for (let x = 0; x < maxi; x++) {
      let valeur = y * maxi + x;
      tab[y][x] = valeur;
    }
  }
  compteur = 0;
  cherchecaseVideDansTableau();
  show_gameboard("sorted_and_refresh");
}

/**
 * Permutation dans le tableau javascript et affichage dans la grille de jeu
 */
function shuffle_and_refresh() {
  shuffle();
  compteur = 0;
  cherchecaseVideDansTableau();
  show_gameboard("shuffle_and_refresh");
}

/*
 * Chercher la case vide ( valeur zero ) dans le tableau javascript
 */
function cherchecaseVideDansTableau() {
  console.info("cherchecaseVideDansTableau");
  console.table(tab);
  for (let y = 0; y < maxi; y++) {
    for (let x = 0; x < maxi; x++) {
      if (isEmpty(x, y) == 0) {
        console.log("case vide", "x=" + x, "y=" + y);
        col_empty = x;
        lig_empty = y;
      } else {
        let b = isMovable(x, y);
        let val = tab[y][x];
        console.log("x=" + x, "y=" + y, "b=" + b, "valeur=", val);
        if (b) {
          //
        } else {
          //
        }
      }
    }
  }
}

function radioSelected(e) {
  console.log(e);
  if (this.checked) {
    let choix = this.value;
    // alert("En mode " + choix);
    switch (choix) {
      case "txt":
        withImage = false;
        show_gameboard("radioSelected::txt");
        break;

      case "img":
        withImage = true;
        show_gameboard("radioSelected::img");
        break;
    }
  }
}

function gestion_radio_button() {
  const radioButtons = document.querySelectorAll('input[name="taquin_radio"]');
  for (const radioButton of radioButtons) {
    radioButton.addEventListener("change", radioSelected);
  }
  let w = document.getElementById("radio_taquin_img").checked;
  withImage = w;
}
/**
 * Démarage du jeu de Taquin
 */
function init_taquin(withImageBoolean) {
  withImage = withImageBoolean;
  maxi = tab.length;
  gestion_radio_button();
  shuffle_and_refresh();
  //
}
