/* Ecrire la fonction changer_style qui permet de styler le paragraphe au clic du bouton par :
une couleur blanche.
un background noir.
une bordure noire pointillée de 1px.
un retrait de 5px.
Définir les propriétés précédentes dans une classe "active" et modifier 
la fonction changer_style de telle façon qu'elle ajoute la classe "active" au paragraphe.*/

function changer_style(){
    var cliquer = document.getElementById("parag1");
    cliquer.setAttribute("active")
    
}
