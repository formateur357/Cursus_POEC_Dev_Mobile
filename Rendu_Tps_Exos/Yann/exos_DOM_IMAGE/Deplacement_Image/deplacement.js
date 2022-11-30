var position = 1;
var nbImg = 5;

function descend(){
    var captain = 'img'+position;
    position = position + 1;
    if(position > nbImg){
        position = 1;
    }

    var suivant = 'img' + position;
    document.getElementById(captain).src = document.getElementById(suivant).src;
    document.getElementById(suivant).src = './pics/captain_america.jpeg';
}

function monte(){
    var captain = 'img'+position;
    position = position - 1;
    if(position < 1){
        position = nbImg;
    }
    var precedent = 'img'+position;
    document.getElementById(captain).src = document.getElementById(precedent).src;
    document.getElementById(precedent).src = './pics/captain_america.jpeg';

}