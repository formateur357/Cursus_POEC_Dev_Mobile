// let str = "case1"
// console.log(str.slice(4));

let etat = [];
let coordonées = [];
let nb_deplacement = 0;
let container = document.getElementsByClassName('container')[0];
let strong = document.getElementsByTagName('strong')[0];
let divs = container.getElementsByTagName('div');
// let cases = Array.from(divs).map(divs => divs);


let facile = "3, 33%";
let intermedaire = "4, 25%";
let expert = "5, 20%";

function niveau(n = facile) {
    container.innerHTML = "";

    let nb_cases = n[0]*n[0];
    let lvl = n[0] == 3 ? "container facile" : n[0] == 4 ? "container intermediaire": "container expert";
    container.className = lvl;

    container.style.gridTemplate = "repeat("+n+")/repeat("+n+")";

    
    
    for (let i = 1; i <= nb_cases; i++) {
        let div = document.createElement("div");
        let content = document.createTextNode("");
        
        div.setAttribute("id", "case"+i);
        // div.setAttribute("class","")
        div.setAttribute("onclick","swap(this)");
        // console.log(bgImg);

        div.appendChild(content);
        container.appendChild(div);
        // div.style.backgroundImage(bgImg);

    }
    aleatoire(nb_cases);
    cut_image();
}


function cut_image() {
    let n = 30;
    let bgImg =  "url('archi.jpg')";
    let cases = Array.from(divs).map(divs => divs);
    for (let i = 0; i < cases.length; i++) {
        cases[i].style.backgroundImage = bgImg;
        cases[i].style.backgroundPosition = i*n + "%";

        
    }
}




function generate_table(n) {
    let i = 0
    let array = [];
    coordonées= [];
    for (let x = 0; x < n; x++) {
        array.push([]);
        for (let y = 0; y < n; y++) {
            array[x].push(container.getElementsByTagName('div')[i].getAttribute('class'));
            coordonées.push([x, y]);
            // console.log("generate table  n= " + n);
            i++
        }
    }
    // console.log(coordonées);
    // console.log(array);
    return array;
}

function randomInt(nb_cases) {
    let n;
    n = Math.floor(Math.random() * nb_cases)
    return n;
}

function present(n) {
    let cases = Array.from(divs).map(divs => divs);
    // console.log(cases);

    for (let i = 0; i < cases.length; i++) {
        if (cases[i].textContent == n) {
            return false;
        }
    }
    return true;
}

function aleatoire(nb_cases) {
    let cases = Array.from(divs).map(divs => divs);
    let empty = randomInt(nb_cases-1);
    cases[empty].className = "empty"
    cases[empty].textContent = "";

    for (let i = 0; i < nb_cases; i++) {
        let n = randomInt(nb_cases);
        while (cases[i].textContent == "" && cases[i].className != "empty") {
            if (present(n)) {
                cases[i].textContent = n;
                cases[i].className = "exist";
            }
            n = randomInt(nb_cases);
        }
    }
    etat = generate_table(Math.sqrt(nb_cases));
    // console.log(etat);
}

// etat = generate_table();


function verify_cases(n, limite) {
    console.log(n);
    console.log(coordonées[n])
    let x = coordonées[n][0];
    let y = coordonées[n][1];
    console.log(" limite " +limite);

 console.log(etat);
    // vifier  voisin direct droite et gauche 
    for (let j = y - 1; j <= y + 1; j++) {
        if (j >= 0 && j <= limite && j != y) {
            let tmp = etat[x][j];
            console.log("droite gauche de etat["+x+"]["+j+"] " +tmp);
            if (tmp == "empty") {
                return true;
            }
        }

    }
    // vifier  voisin direct haut et bas 
    for (let i = x - 1; i <= x + 1; i++) {
        if (i >= 0 && i <= limite && i != x) {
            let tmp = etat[i][y];
            console.log("haut bas etat["+i+"]["+y+"] " +tmp);

            if (tmp == "empty") {
                return true;
            }
        }
    }
    return false;
}

function fini() {
    let ok = true;
    let cases = Array.from(divs).map(divs => divs);
    for (let i = 0,  j=1;  i < (cases.length-1); i++ ,j ++) {
        if (cases[i].textContent != i+1) {
            ok = false;
            return ok;
        }
    }
    return ok
}


function update_etat(n1, n2) {// n1 =  n click, n2 empty
    let x_click = coordonées[n1][0];
    let y_click = coordonées[n1][1];

    let x_empty = coordonées[n2][0];
    let y_empty = coordonées[n2][1];

    etat[x_click][y_click] = "empty";
    etat[x_empty][y_empty] = "exist";
}


function swap(ele) {
    let lvl = container.getAttribute('class').slice(10);
    let limite =  lvl == "facile" ? 3 : lvl == "intermediaire" ? 4 : 5;
    let contenue = ele.textContent;
    let case_vide = document.getElementsByClassName('empty')[0];
    let id_click = ele.getAttribute('id');
    let n = (id_click.slice(4)) - 1;
    let n_empty = (case_vide.getAttribute('id').slice(4)) - 1;
    let fin = document.getElementById('fini');
    // console.log("pote empty" +verify_cases(n));
    // console.log(etat);
    if (verify_cases(n, limite-1)) {

        //remplir case vide
        case_vide.append(contenue);
        case_vide.className = "exist";

        // vider case actuelle
        ele.textContent = "";
        ele.className = "empty";

        // change tableau etat
        update_etat(n, n_empty);
        nb_deplacement++;
        // console.log("nombre de depalcement effectué " + nb_deplacement);
        strong.textContent = nb_deplacement;
    }
    fin.textContent = fini() == true ? " C'est  fini" : "";
}