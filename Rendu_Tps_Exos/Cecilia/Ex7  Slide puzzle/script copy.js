// let etat = [];
// let coordonées = [];
// let nb_deplacement = 0;
// let strong = document.getElementsByTagName('strong')[0];
// let buttons = document.getElementsByTagName('button');
// let cases = Array.from(buttons).map(buttons => buttons);

let facile = "3, 33%";
let intermedaire = "4, 25%";
let expert = "5, 20%"

function niveau(n = facile) {
    let container = document.getElementsByClassName('container')[0];
    container.innerHTML = "";
    let nb_cases = n[0]*n[0];
    container.style.gridTemplate = "repeat("+n+")/repeat("+n+")";
    
    for (let i = 1; i <= nb_cases; i++) {
        let div = document.createElement("div");
        // let content = document.createTextNode(i);
        
        div.setAttribute("id", "case"+i);
        div.setAttribute("class","")

        // div.appendChild(content);
        container.appendChild(div)   
    }

}

// function generate_table() {
//     let i = 0
//     let array = [];
//     for (let x = 0; x < 3; x++) {
//         array.push([]);
//         for (let y = 0; y < 3; y++) {
//             array[x].push(document.getElementsByTagName('button')[i].getAttribute('class'));
//             coordonées.push([x, y]);
//             i++
//         }
//     }
//     return array;
// }

// function randomInt() {
//     let n;
//     n = Math.floor(Math.random() * 8)
//     return n;
// }

// function present(n) {
//     for (let i = 0; i < cases.length; i++) {
//         if (cases[i].textContent == n) {
//             return false;
//         }
//     }
//     return true;
// }

// function aleatoire() {
//     let empty = randomInt();
//     cases[empty].className = "empty"
//     cases[empty].textContent = "";

//     for (let i = 0; i < cases.length; i++) {
//         let n = randomInt() + 1;
//         while (cases[i].textContent == "" && cases[i].className != "empty") {
//             if (present(n)) {
//                 cases[i].textContent = n;
//                 cases[i].className = "exist";
//             }
//             n = randomInt() + 1
//         }
//     }
//     etat = generate_table();
// }

// etat = generate_table();


// function verify_cases(n) {
//     let x = coordonées[n][0];
//     let y = coordonées[n][1];

//     // vifier  voisin direct droite et gauche 
//     for (let j = y - 1; j <= y + 1; j++) {
//         if (j >= 0 && j <= 2 && j != y) {
//             let tmp = etat[x][j];
//             if (tmp == "empty") {
//                 return true;
//             }
//         }

//     }

//     // vifier  voisin direct haut et bas 
//     for (let i = x - 1; i <= x + 1; i++) {
//         if (i >= 0 && i <= 2 && i != x) {
//             let tmp = etat[i][y];
//             if (tmp == "empty") {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// function fini() {
//     let ok = true
//     for (let i = 0,  j=1;  i < (cases.length-1); i++ ,j ++) {
//         if (cases[i].textContent != i+1) {
//             ok = false;
//             return ok;
//         }
//     }
//     return ok
// }


// function update_etat(n1, n2) {// n1 =  n click, n2 empty
//     let x_click = coordonées[n1][0];
//     let y_click = coordonées[n1][1];

//     let x_empty = coordonées[n2][0];
//     let y_empty = coordonées[n2][1];

//     etat[x_click][y_click] = "empty";
//     etat[x_empty][y_empty] = "exist";
// }


// function swap(ele) {
//     let contenue = ele.textContent;
//     let case_vide = document.getElementsByClassName('empty')[0];
//     let id_click = ele.getAttribute('id');
//     let n = (id_click.charAt(id_click.length - 1)) - 1;
//     let n_empty = (case_vide.getAttribute('id').charAt(id_click.length - 1)) - 1;
//     let fin = document.getElementById('fini');

//     if (verify_cases(n)) {

//         //remplir case vide
//         case_vide.append(contenue);
//         case_vide.className = "exist";

//         // vider case actuelle
//         ele.textContent = "";
//         ele.className = "empty";

//         // change tableau etat
//         update_etat(n, n_empty);
//         nb_deplacement++;
//         // console.log("nombre de depalcement effectué " + nb_deplacement);
//         strong.textContent = nb_deplacement;
//     }
//     fin.textContent = fini() == true ? " C'est  fini" : "";
// }
