let tableau = document.querySelector(".tableau");
let nbr_block = 9;
let nbr_cases_par_lignes = 3;
let array_block = [];
let blockClick = document.querySelector(".blockClick");
let case_vide = document.querySelector(".empty_block");
let compteur = document.getElementById("compteur");
let nbr_compteur = 0;
let array_ramdom = [];
let array_win = [];
let unshuffled = [];
let width_block = 33.33;
let height_block = 33.33;

for (let d = 0; d < nbr_block; d++) {
  unshuffled.push(d);
}

let shuffled = unshuffled
  .map((value) => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value);

console.log(shuffled);

/**************function qui verifie la gagne ********************** */
function winner(unshuffled) {
  let point = 0;
  let array_compare = [];

  let collection = document.getElementsByTagName("img");
  //console.log(collection[0].innerHTML);

  for (let i = 0; i < collection.length; i++) {
    array_compare.push(collection[i].innerHTML);
  }

  for (let a = 0; a < array_compare.length && a < unshuffled.length; a++) {
    if (array_compare[a] == unshuffled[a]) point++;
  }

  if (point == nbr_block) {
    alert("gagner");
  }
}

/******CREATION DES BLOCK DU TABLEAU************ */
let i = 0;
for (let x = 0; x < nbr_cases_par_lignes; x++) {
  for (let y = 0; y < nbr_cases_par_lignes; y++) {
    let block = document.createElement("img");
    block.setAttribute("id", shuffled[i]);
    block.innerHTML=`${shuffled[i]}`;
    block.style.backgroundImage ="url('./bleach.jpg') ";
    block.style.backgroundPosition = `${(100/3) * y}%, 0% `;
    if (shuffled[i] == 8) {
      block.classList.add("empty_block");
    }

    tableau.appendChild(block);

    block.addEventListener("click", (e) => {
      let case_vide = document.querySelector(".empty_block");

      for (let i = 0; i < array_block.length; i++) {
        if (array_block[i] == e.currentTarget) {
          if (
            e.currentTarget == array_block[2] &&
            array_block[2 + 1] == case_vide
          ) {
            console.log('ok');
          }
          if (
            e.currentTarget == array_block[3] &&
            array_block[3 - 1] == case_vide
          ) {
            console.log('ok');
          }
          if (
            e.currentTarget == array_block[5] &&
            array_block[5 + 1] == case_vide
          ) {
            console.log('ok');
          }
          if (
            e.currentTarget == array_block[6] &&
            array_block[6 - 1] == case_vide
          ) {
            console.log('ok');
          }
          if (
            array_block[i - 1] ||
            array_block[i + 1] ||
            array_block[i - 3] ||
            array_block[i + 3]
          ) {
            if (
              array_block[i - 1] == case_vide ||
              array_block[i + 1] == case_vide ||
              array_block[i - 3] == case_vide ||
              array_block[i + 3] == case_vide
            ) {
              var tmp = case_vide.innerHTML;
              case_vide.innerHTML = e.currentTarget.innerHTML;
              e.currentTarget.innerHTML = tmp;
              case_vide.classList.remove("empty_block");
              e.currentTarget.classList.add("empty_block");
              console.log(array_block[i]);
              console.log(array_block);

              nbr_compteur++;
              compteur.innerHTML = `nombre de coups = ${nbr_compteur}</br>`;
              winner(unshuffled);
            }
          }
        }
      }
    });
    array_block.push(block);
    i++;
  }

  console.log();
  /**********AU moment du click *************************** 
  block.addEventListener("click", () => {
    let case_vide = document.querySelector(".empty_block");

    for (let i = 0; i < array_block.length; i++) {
      if (array_block[i] == block) {
        if (block == array_block[2] && array_block[2 + 1] == case_vide) {
          setTimeout();
        }
        if (block == array_block[3] && array_block[3 - 1] == case_vide) {
          setTimeout();
        }
        if (block == array_block[5] && array_block[5 + 1] == case_vide) {
          setTimeout();
        }
        if (block == array_block[6] && array_block[6 - 1] == case_vide) {
          setTimeout();
        }
        if (
          array_block[i - 1] ||
          array_block[i + 1] ||
          array_block[i - 3] ||
          array_block[i + 3]
        ) {
          if (
            array_block[i - 1] == case_vide ||
            array_block[i + 1] == case_vide ||
            array_block[i - 3] == case_vide ||
            array_block[i + 3] == case_vide
          ) {
            var tmp = case_vide.innerHTML;
            case_vide.innerHTML = block.innerHTML;
            block.innerHTML = tmp;
            case_vide.classList.remove("empty_block");
            block.classList.add("empty_block");
            nbr_compteur++;
            compteur.innerHTML = `nombre de coups = ${nbr_compteur}</br>`;
            winner(unshuffled);
          }
        }
      }
    }
  }); */
  
}
//console.log(array_block);

/*for (let x = 0; x < nbr_cases_par_lignes; x++) {
  for (let y = 0; y < nbr_cases_par_lignes; y++) {
    let block = document.createElement("img");
    block.setAttribute("id", shuffled[i]);
    block.innerHTML=`${shuffled[i]}`;
    block.style.backgroundImage ="url('./bleach.jpg') ";
    block.style.backgroundPosition = `${(100/3) * x}%, ${(100/3 ) * y}% `;*/