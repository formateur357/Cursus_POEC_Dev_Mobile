let listImg = {
    "img0" : "./img/chat_taquin.png",
    "img1" : "./img/chat2.jpg",
    "img2" : "./img/chat3.jpg",
    "img3" : "./img/chat4.jpeg",
    "img4" : "./img/raton.jpg"
}

let randomImg = document.getElementById("randomImg");
let imgFinish = document.getElementById("imgFinish")

let arrayOfBtn = [];

function chooseImg() {
    let nbrRandom = Math.floor(Math.random() * 5);
    return listImg[`img${nbrRandom}`];
}

let taquin = document.getElementById("taquin");

let nbrTour = document.getElementById("nbrTour");
let count = 0;
let gameFinish = document.getElementById("gameFinish");

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
    let child = taquin.lastElementChild;
    let urlImg = chooseImg();
    console.log(urlImg);
    arrayOfBtn = [];
    while (child) {
        taquin.removeChild(child);
        child = taquin.lastElementChild;
    }
    for (let i = 0; i < x ; i++) {
        let btn = document.createElement("button");
        let newBtn = taquin.appendChild(btn);
        setMultipleAttributes(newBtn, {
            "id" : `btn${i+1}`,
            "onclick" : `changePlace("btn${i+1}")`
        });
        newBtn.style.order = i+1;
        newBtn.style.backgroundImage = `url(${urlImg})`
        newBtn.style.backgroundSize = "760px 760px"
        newBtn.style.objectFit = "cover"
        imgFinish.src = urlImg,
        SetbackgroundPosition(newBtn ,Math.sqrt(x), i)
        arrayOfBtn.push(`btn${i+1}`);
    }
}

function modifSizeTaquin(nbr, pixel) {
    taquin.style.gridTemplateColumns = `repeat(${nbr}, ${pixel})`;
    taquin.style.gridTemplateRows = `repeat(${nbr}, ${pixel})`;

}

function setDifficult(lvl) {
    if(lvl == "easy") {
        clearInterval(setTime)
        createBtn(9);
        modifSizeTaquin(3, `${taquinSize / 3}px`);
        randomStart();
        resetGame();
        setNewInterval()
        console.log(objectOfBtn);
    } else if(lvl == "medium") {
        clearInterval(setTime)
        createBtn(16);
        modifSizeTaquin(4, `${taquinSize / 4}px`);
        randomStart();
        resetGame();
        setNewInterval()
    } else if(lvl == "hard") {
        clearInterval(setTime)
        createBtn(25);
        modifSizeTaquin(5, `${taquinSize / 5}px`);
        randomStart();
        resetGame();
        setNewInterval()
    }

};

function checkFinish(x) {
    for (let i = 1; i < x; i++) {
        if (getComputedStyle(document.getElementById(`btn${i}`)).order == i) {
        } else {
          return false;
        }
    }
    console.log("fini!!!!!!");
    gameFinish.innerHTML = "Partie terminée !!"
    clearInterval(setTime);

}

function randomStart() {
    arrayOfBtn.sort(() => Math.random() - 0.5);
    console.log(arrayOfBtn)
    for (let i = 0; i < arrayOfBtn.length ; i++) {
       document.getElementById(arrayOfBtn[i]).style.order = i+1;
    }
}

let time =  document.getElementById("time");
let countTime = 0;
let setTime;
function setNewInterval() {

   setTime =  setInterval(() => { 
        time.innerHTML = countTime
        countTime++;
    }
    ,1000)
} 

function resetGame() {
    countTime = 0;
    time.innerHTML = countTime;

    count=0
    nbrTour.innerHTML = count;

    gameFinish.innerHTML = ""
}