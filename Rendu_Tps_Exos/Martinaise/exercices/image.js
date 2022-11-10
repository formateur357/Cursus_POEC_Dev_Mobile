function image() {
    document.write("<p>voyage</p>")

}

function chargement() {
    alert("chargement de la page")

}

function passersouris() {

    // alert("quand on la souris passe sur l'image ")

    document.getElementById("changeimage").src = "https://as2.ftcdn.net/v2/jpg/01/88/68/77/1000_F_188687777_CfJvDpcRu9BvZjmNGTwtprfCWNhlRvqU.jpg"
}

function enleversouris() {
    document.getElementById("changeimage").src = "./img/mer.webp"


}


function boutton() {
    alert("click moi")
}

function appuyertoucheclavier() {
    alert("si touche clavier enfoncer afficher cette phrase")
}

function chargementcouleurdocument() {
    document.body.style.background = "#FFC300"
    document.getElementById("change").style.background = "green"

}
function reveniranormal() {
    document.body.style.background = "none"
    document.getElementById("change").style.background = "none"

}



