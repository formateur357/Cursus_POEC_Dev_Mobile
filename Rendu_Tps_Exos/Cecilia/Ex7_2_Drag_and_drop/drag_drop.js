
let obDragged = Array(2);
let obTarget = Array(2);
let dragged;




function start(e) {
    e.dataTransfer.setData('text', e.target.textContent);
    e.dataTransfer.setData('bcg', e.target.style.backgroundPosition);
    dragged= e.currentTarget;
}

function over(e) {
    return false;
}

function drop(e) {
    obTarget = Array(2);
    let targeted = e.currentTarget;

    obDragged[0] = e.dataTransfer.getData("text");
    obDragged[1] = e.dataTransfer.getData("bcg");


    obTarget[0] = targeted.textContent;
    obTarget[1] = targeted.style.backgroundPosition;

    //remplir case ciblé

    targeted.textContent = obDragged[0];
    targeted.style.backgroundPosition = obDragged[1];


    // remplir case dragged

    dragged.textContent = obTarget[0];
    dragged.style.backgroundPosition = obTarget[1];
    e.stopPropagation();
    return false
}

