let tableau = document.querySelector(".tableau");
//let nbr_block = 9;
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


for(let d = 0; d< nbr_block; d++){
        unshuffled.push(d)
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



/*************FUNCTION POUR AFFICHER IMAGE************************** 
    function img_place(){

        for(let i = 0; i < nbr_block ; i++){
            
          block.style.backgroundPosition = "0,22%"

        } 
    }


/******CREATION DES BLOCK DU TABLEAU************ */
for (let i = 0; i < shuffled.length; i++) {
   block = document.createElement("div");
  
    block.setAttribute("id", shuffled[i]);
    block.innerHTML = `<p> ${shuffled[i]} </p>`;
    //img_place()
    
    tableau.appendChild(block);
    
    if (shuffled[i] == 8) {
        block.classList.add("empty_block");
    }
    

  /**********AU moment du click *************************** */
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
          array_block[i] - 1 ||
          array_block[i] + 1 ||
          array_block[i] - 3 ||
          array_block[i] + 3
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
  });

  array_block.push(block);

  console.log(array_block);
}
