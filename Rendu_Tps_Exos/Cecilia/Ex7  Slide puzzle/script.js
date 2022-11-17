let etat = [];
let coordonées = [];
let nb_deplacement = 0;
let board = document.getElementsByClassName('board')[0];
let strong = document.getElementsByTagName('strong')[0];
let divs = board.getElementsByTagName('div');
let imgjeux = "url('archi.jpg')";
let but = document.getElementsByClassName('imageJeux')[0];

// let cases = Array.from(divs).map(divs => divs);


let facile = "3, 33%";
let intermedaire = "4, 25%";
let expert = "5, 20%";

function niveau(n = facile) {
    timerStart();

    board.innerHTML = "";
    console.log("niveau img jeu = " + imgjeux);
    but.style.backgroundImage = imgjeux;
    let nb_cases = n[0]*n[0];
    let lvl = n[0] == 3 ? "board facile" : n[0] == 4 ? "board intermediaire": "board expert";
    board.className = lvl;

    board.style.gridTemplate = "repeat("+n+")/repeat("+n+")";

    
    
    for (let i = 1; i <= nb_cases; i++) {
        let div = document.createElement("div");
        let content = document.createTextNode("");
        
        div.setAttribute("id", "case"+i);
        div.setAttribute("onclick","swap(this)");

        div.appendChild(content);

        board.appendChild(div);

    }
    aleatoire(nb_cases);
    cut_image(nb_cases);
}


function cut_image(nb_cases) {
    let lmax = Math.sqrt(nb_cases);
    let n = Math.floor(100/(lmax))+3.5;//3.5
    let bgImg =  imgjeux;
    let cases = Array.from(divs).map(divs => divs);
        // Récupéré un tableau trié des cases 
        let tab_tmp = Array(nb_cases-1) // array avec le bon nombre de cases 

        for (let i = 0; i < cases.length; i++) {
            if(cases[i].className != "empty"){
                let content = cases[i].textContent-1;
                tab_tmp[content] = cases[i];
            }
        }
        // affecter un bout d'image 
        let index = 0;
            for (let lig = 0; lig < lmax ; lig++) {
                for (let col = 0; col <lmax; col++) {
                    if( index < tab_tmp.length){
                    let pos= ""+col*n+"% "+ lig*n +"%"; // col % lig %
                    // tab_tmp[index].style.backgroundSize = (100*lmax)+"% "+(100*lmax) +"%";//100*lmax+"%";
                    //tab_tmp[index].style.backgroundSize = (100*lmax)+"%";//100*lmax+"%";

                    // tab_tmp[index].style.backgroundRepeat = "no-repeat";
                    tab_tmp[index].style.backgroundImage = bgImg;
                    tab_tmp[index].style.backgroundPosition = pos;
                    index++;
                    }
                }
                
            }
}

function newImage() {
    let images = [ "url('archi.jpg')", "url('barbi.jpg')", "url('cassie.jpg')", "url('leo.jpg')"];
    let image = images[randomInt(images.length)];
    console.log(image);
    imgjeux = image;
    niveau();
}



function generate_table(n) {
    let i = 0
    let array = [];
    coordonées= [];
    for (let x = 0; x < n; x++) {
        array.push([]);
        for (let y = 0; y < n; y++) {
            array[x].push(board.getElementsByTagName('div')[i].getAttribute('class'));
            coordonées.push([x, y]);
            i++
        }
    }
    return array;
}

function randomInt(nb_cases) {
    let n;
    n = Math.floor(Math.random() * nb_cases)
    return n;
}

function present(n) {
    let cases = Array.from(divs).map(divs => divs);
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
}

function verify_cases(n, limite) {
    let x = coordonées[n][0];
    let y = coordonées[n][1];

    // vifier  voisin direct droite et gauche 
    for (let j = y - 1; j <= y + 1; j++) {
        if (j >= 0 && j <= limite && j != y) {
            let tmp = etat[x][j];
            if (tmp == "empty") {
                return true;
            }
        }

    }
    // vifier  voisin direct haut et bas 
    for (let i = x - 1; i <= x + 1; i++) {
        if (i >= 0 && i <= limite && i != x) {
            let tmp = etat[i][y];

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
    let lvl = board.getAttribute('class').slice(10);
    let limite =  lvl == "facile" ? 3 : lvl == "intermediaire" ? 4 : 5;
    let contenue = ele.textContent;
    let imgPosClick = ele.style.backgroundPosition;
    let imgClick = ele.style.backgroundImage;

    let case_vide = document.getElementsByClassName('empty')[0];
    let id_click = ele.getAttribute('id');
    let n = (id_click.slice(4)) - 1;
    let n_empty = (case_vide.getAttribute('id').slice(4)) - 1;
    let fin = document.getElementById('fini');

    if (verify_cases(n, limite-1)) {

        //remplir case vide
        case_vide.append(contenue);
        case_vide.className = "exist";
        case_vide.style.backgroundImage = imgClick;
        case_vide.style.backgroundPosition = imgPosClick;


        // vider case actuelle
        ele.textContent = "";
        ele.className = "empty";
        ele.style.backgroundImage = "";
        ele.style.backgroundPosition = "";

        // change tableau etat
        update_etat(n, n_empty);
        nb_deplacement++;
        strong.textContent = nb_deplacement;
        fin.textContent = fini() == true ? " C'est  fini" : "";
    }
}
// drag and drop