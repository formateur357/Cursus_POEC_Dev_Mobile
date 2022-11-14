let btn1 = document.getElementById("btnUn");
let btn2 = document.getElementById("btnDeux");
let btn3 = document.getElementById("btnTrois");
let btn4 = document.getElementById("btnQuatre");
let btn5 = document.getElementById("btnCinq");
let btn6 = document.getElementById("btnSix");
let btn7 = document.getElementById("btnSept");
let btn8 = document.getElementById("btnHuit");
let btn9 = document.getElementById("btnNeuf");
let btn10 = document.getElementById("btnDix");
let btn11 = document.getElementById("btnOnze");
let btn12 = document.getElementById("btnDouze");
let btn13 = document.getElementById("btnTreize");
let btn14 = document.getElementById("btnQuatorze");
let btn15 = document.getElementById("btnQuinze");

let empty = document.getElementById("empty");
let nbrTour = document.getElementById("nbrTour");
let count = 0;

let arrayOfBtn = [ btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8,
    btn9, btn10, btn11, btn12, btn13, btn14, btn15, empty];




function changePlace(btn) {
  let orderEmpty = parseInt(getComputedStyle(empty).order) ;
  let orderBtn = parseInt(getComputedStyle(document.getElementById(btn)).order);
  console.log(orderEmpty);
  console.log(orderBtn);

    if (
        orderBtn == orderEmpty - 1 || orderBtn == orderEmpty + 1 ||
        orderBtn == orderEmpty - 4 ||orderBtn == orderEmpty + 4 )
    {
        document.getElementById(btn).style.order = orderEmpty;
        empty.style.order = orderBtn;

        count++;
        nbrTour.innerHTML = count;
    } else {
        console.log("Déplacement interdit");
    }
}

function randomStart() {
    arrayOfBtn.sort(() => Math.random() - 0.5);
    console.log(arrayOfBtn)
    for (let i = 0; i < arrayOfBtn.length ; i++) {
        arrayOfBtn[i].style.order = i+1;
    }
}

randomStart();