let taquin = document.getElementById("taquin")

let empty = document.getElementById("empty");
let nbrTour = document.getElementById("nbrTour");
let count = 0;
let gameFinish = document.getElementById("gameFinish");

let arrayOfBtn = [];

let taquinSize = 750;

function setMultipleAttributes(el, attrs) {
    for(let key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
};

function test() {
    console.log("test");
};

console.log(Math.sqrt(9));

function SetbackgroundPosition(btn, size, nbr) {
    let pourcent = 100 / (size - 1);
    console.log(" pourcent : " + pourcent);

    let xpos = (pourcent * (nbr % size) + '%')
    let ypos = (pourcent * Math.floor(nbr / size) + '%')
    console.log('x : ' + xpos + ' / ' + 'y : ' + ypos);

    btn.style.backgroundPosition = xpos + ' ' + ypos;
}

function createBtn(x) {
    let child = taquin.lastElementChild;
        while (child) {
            taquin.removeChild(child);
            child = taquin.lastElementChild;
        }
        for (let i = 0; i < x -1; i++) {
            let btn = document.createElement("button");
            let newBtn = taquin.appendChild(btn);
            setMultipleAttributes(newBtn, {
                "id" : `btn${i+1}`,
                "onclick" : "test()"
            });
            newBtn.style.order = i+1;
            newBtn.style.backgroundImage = "url(./img/chat_taquin.png)"
            SetbackgroundPosition(newBtn ,Math.sqrt(x), i)
        }
}

function createEmptyDiv(x) {
    let empty = document.createElement("div");
    let newEmpty = taquin.appendChild(empty)
    newEmpty.setAttribute("id","empty");
    newEmpty.style.order = x;

}

function modifSizeTaquin(nbr, pixel) {
    taquin.style.gridTemplateColumns = `repeat(${nbr}, ${pixel})`;
    taquin.style.gridTemplateRows = `repeat(${nbr}, ${pixel})`;

}

function setDifficult(lvl) {
    console.log(lvl);
    if(lvl == "easy") {
        createBtn(9);
        createEmptyDiv(9);
        modifSizeTaquin(3, `${taquinSize / 3}px`)
    } else if(lvl == "medium") {
        createBtn(16);
        createEmptyDiv(16);
        modifSizeTaquin(4, `${taquinSize / 4}px`)

    } else if(lvl == "hard") {
        createBtn(25);
        createEmptyDiv(25);
        modifSizeTaquin(5, `${taquinSize / 5}px`)
    }

};