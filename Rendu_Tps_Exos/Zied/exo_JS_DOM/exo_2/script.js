//Affecte la nouvelle image lorsque la souris survole l'élément
function passageDeLaSouris(element) {
element.setAttribute('src', 'pic1.jpg');
}
//Affecte l'image de départ lorsque la souris ne survole plus l'élément
function departDeLaSouris(element) {
element.setAttribute('src', 'pic2.jpg');
}
//Affiche alarme élément dans la div
function alarma(){
    alert("c'est lh'eure");
}

// change couleur de la page
function changer_jour(){
    couleur =  document.getElementById("couleur");
    couleur.style.color="black";
    couleur.style.backgroundColor ="white";


}

function changer_nuit(){
    couleur =  document.getElementById("couleur");
    couleur.style.color="white";
    couleur.style.backgroundColor ="black";




}