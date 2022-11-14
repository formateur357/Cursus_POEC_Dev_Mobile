//Mélange aléatoire
function melange(){
var alea = document.querySelector('.jeu');
for (var i = alea.children.length; i>=0; i--){
    alea.appendChild(alea.children[Math.random() * i | 0]);
}
}



//mémoriser l'emplacement de la case vide
var emptyLign= 4;
var emptyCol=4;

//fonction qui échange la case cliquée avec la case vide
function move(lign, col){
    //récupération des noms des case cliquée et vide
    var clickName= 'case'+lign+col;
    var emptyName= 'case'+emptyLign+emptyCol;

    //on récupère les noeuds des boutons
    var clickNode=document.getElementById(clickName);
    var emptyNode=document.getElementById(emptyName);

    //on récupère la valeur textuelle des boutons
    var clickValue= clickNode.removeChild(clickNode.childNodes[0]);
    var emptyValue= emptyNode.removeChild(emptyNode.childNodes[0]);

    //on interchange ces valeurs
    clickNode.appendChild(emptyValue);
    emptyNode.appendChild(clickValue);

    //on interchange les classes des boutons
    clickNode.setAttribute('class', 'emptyCase');
    emptyNode.setAttribute('class', 'case');

    //on elève le focus sur la case cliquée
    clickNode.blur();

    //on mémorise le nouvel emplacement de la case vide
    emptyLign = lign,
    emptyCol = col;
}