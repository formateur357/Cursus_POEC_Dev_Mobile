let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");

let empty = document.getElementById("empty");
let nbrTour = document.getElementById("nbrTour");
let count = 0;
let gameFinish = document.getElementById("gameFinish");

let arrayOfBtn = [ btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, empty];




function changePlace(btn) {
  let orderEmpty = parseInt(getComputedStyle(empty).order) ;
  let orderBtn = parseInt(getComputedStyle(document.getElementById(btn)).order);
  console.log(orderEmpty);
  console.log(orderBtn);

    if (orderBtn == 1 || orderBtn == 4 || orderBtn == 7) {
      if (
        orderBtn == orderEmpty - 1 ||
        orderBtn == orderEmpty - 3 ||
        orderBtn == orderEmpty + 3
      ) {
        document.getElementById(btn).style.order = orderEmpty;
        empty.style.order = orderBtn;
        count++;
        nbrTour.innerHTML = count;
      } else {
        console.log("Déplacement interdit");
      }
    } else if (orderBtn == 3 || orderBtn == 6 || orderBtn == 9) {
      if (
        orderBtn == orderEmpty + 1 ||
        orderBtn == orderEmpty - 3 ||
        orderBtn == orderEmpty + 3
      ) {
        document.getElementById(btn).style.order = orderEmpty;
        empty.style.order = orderBtn;
        count++;
        nbrTour.innerHTML = count;
      } else {
        console.log("Déplacement interdit");
      }
    } else if (
      orderBtn == orderEmpty - 1 ||
      orderBtn == orderEmpty + 1 ||
      orderBtn == orderEmpty - 3 ||
      orderBtn == orderEmpty + 3
    ) {
      document.getElementById(btn).style.order = orderEmpty;
      empty.style.order = orderBtn;
      count++;
      nbrTour.innerHTML = count;
    } else {
      console.log("Déplacement interdit");
    }
    checkFinish()
}

function randomStart() {
    arrayOfBtn.sort(() => Math.random() - 0.5);
    console.log(arrayOfBtn)
    for (let i = 0; i < arrayOfBtn.length ; i++) {
        arrayOfBtn[i].style.order = i+1;
    }
}
randomStart();

function checkFinish() {
    for (let i = 1; i < 9; i++) {
        if (getComputedStyle(document.getElementById(`btn${i}`)).order == i) {
            console.log(`btn${i} checked`);
        } else {
          return false;
        }
    }
    console.log("fini!!!!!!");
    gameFinish.innerHTML = "Partie terminée !!"

}