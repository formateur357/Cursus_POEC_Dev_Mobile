let taquin = document.getElementById("taquin")


let nbrTour = document.getElementById("nbrTour");
let count = 0;
let gameFinish = document.getElementById("gameFinish");

let arrayOfBtn = [];
let objectOfBtn = {};

let taquinSize = 750;

function setMultipleAttributes(el, attrs) {
    for(let key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
};

function SetbackgroundPosition(btn, size, nbr) {
    let pourcent = 100 / (size - 1);

    let xpos = (pourcent * (nbr % size) + '%')
    let ypos = (pourcent * Math.floor(nbr / size) + '%')

    btn.style.backgroundPosition = `${xpos} ${ypos}`;
}

function createBtn(x) {
    arrayOfBtn = [];
    objectOfBtn = {};
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
            "onclick" : `changePlace("btn${i+1}")`
        });
        newBtn.style.order = i+1;
        newBtn.style.backgroundImage = "url(./img/chat_taquin.png)"
        SetbackgroundPosition(newBtn ,Math.sqrt(x), i)
        arrayOfBtn.push(newBtn);
        objectOfBtn[`btn${i+1}`] = [i % Math.sqrt(x), Math.floor(i / Math.sqrt(x) )]
    }
    objectOfBtn['empty'] = [(Math.sqrt(x))-1, (Math.sqrt(x))-1]
}

function createEmptyDiv(x) {
    let createEmpty = document.createElement("div");
    let newEmpty = taquin.appendChild(createEmpty)
    newEmpty.setAttribute("id","empty");
    newEmpty.style.order = x;

}

function modifSizeTaquin(nbr, pixel) {
    taquin.style.gridTemplateColumns = `repeat(${nbr}, ${pixel})`;
    taquin.style.gridTemplateRows = `repeat(${nbr}, ${pixel})`;

}

function setDifficult(lvl) {
    if(lvl == "easy") {
        createBtn(9);
        createEmptyDiv(9);
        modifSizeTaquin(3, `${taquinSize / 3}px`);
        randomStart();
    } else if(lvl == "medium") {
        createBtn(16);
        createEmptyDiv(16);
        modifSizeTaquin(4, `${taquinSize / 4}px`);
        randomStart();

    } else if(lvl == "hard") {
        createBtn(25);
        createEmptyDiv(25);
        modifSizeTaquin(5, `${taquinSize / 5}px`);
        randomStart();
    }

};

function checkFinish(x) {
    for (let i = 1; i < x; i++) {
        if (getComputedStyle(document.getElementById(`btn${i}`)).order == i) {
            console.log(`btn${i} checked`);
        } else {
          return false;
        }
    }
    console.log("fini!!!!!!");
    gameFinish.innerHTML = "Partie terminée !!"

}

function randomStart() {
    arrayOfBtn.sort(() => Math.random() - 0.5);
    for (let i = 0; i < arrayOfBtn.length ; i++) {
        arrayOfBtn[i].style.order = i+1;
    }
}


function changePlace(btn) {
    let empty = document.getElementById("empty");
    let orderEmpty = parseInt(empty.style.order) ;
    let orderBtn = parseInt(document.getElementById(btn).style.order);

    let positionEmpty = objectOfBtn["empty"];
    let positionBtn = objectOfBtn[btn];
    console.log(positionEmpty);
    console.log(positionBtn);

    if (
        positionBtn[0] == positionEmpty[0] - 1 ||
        positionBtn[0] == positionEmpty[0] + 1 ||
        positionBtn[1] == positionEmpty[1] - 1 ||
        positionBtn[1] == positionEmpty[1] + 1
    ) {
        document.getElementById(btn).style.order = orderEmpty;
        empty.style.order = orderBtn;
        count++;
        nbrTour.innerHTML = count;
        objectOfBtn["empty"] = positionBtn;
        objectOfBtn[btn] = positionEmpty;
    } else {
        console.log("Déplacement interdit");
    }
    checkFinish(Object.values(objectOfBtn).length);
}