
//----------------------------------------Alerte quand on arrive sur la page----------------------------------------------------//


alert("Salut jeune entrepreneur");

//-----------------------------------Alerte quand on clique sur le bouton "Cliquez ici"-----------------------------------------//

function maFonction(){
    alert("tu as cliqué sur moi");
    }
    
   //------------------------------------Alerte quand on passe la souris sur l'image---------------------------------------------//

//   let evenement = document.getElementById("blueLock");
  
//    evenement.onmouseover=function(){
//     alert("salut");
//    }

   //-------------------------------Alerte quand on appuie sur la fleche du haut du clavier------------------------------------------//


 window.onkeydown = function (event) {
    if (event.keyCode === 38) {
        alert("tu as appuyé sur moi");
    }
   }

//----------------------------------------Alerte quand on clique sur le bouton "Test"--------------------------------------
function maFonction2 () {
    document.write("sa rafraichit");
}

//----------------------------------------------Le fond d'ecran devient noir---------------------------------------------//

function maFonction3 () {
document.body.style.backgroundColor="black";

}

//----------------------------------------------Le fond d'ecran redevient blanc-----------------------------------------//
function maFonction4 () {
    document.body.style.backgroundColor="white";
    }

//----------------------------------------------L'image change quand on passe la souris'---------------------------------------------------//

const evenement = document.getElementById("blueLock");
const evenement2=evenement.src;

evenement.onmouseover=function(){
evenement.src = "hatsune.jpg";   
   }

evenement.onmouseout=function(){
evenement.src =evenement2;   
   }
    