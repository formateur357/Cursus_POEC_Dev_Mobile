var position = 1;
var nbImg = 5;

function descend(){
    var captain = 'img'+position;
    position = position + 1;
    if(position > nbImg){
        position = 1;
    }

    var idSuivant = 'img' + position;
    document.getElementById(captain).src = document.getElementById(idSuivant).src;
    document.getElementById(idSuivant).src = './pics/captain_america.jpeg';
}

function monte(){
    var captain = 'img'+position;
    position = position - 1;
    if(position < 1){
        position = nbImg;
    }
    var idPrecedent = 'img'+position;
    document.getElementById(captain).src = document.getElementById(idPrecedent).src;
    document.getElementById(idPrecedent).src = './pics/captain_america.jpeg';

}