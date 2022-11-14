//Mélange aléatoire
function melange(){
var alea = document.querySelectorAll('#case');
for (var i = alea.children.length; i>=0; i--){
    alea.appendChild(alea.children[Math.random() * i | 0]);
}
}



//mémoriser l'emplacement de la case vide
var emptyLign= 4;
var emptyCol=4;
var nbClick = 0;
//fonction qui échange la case cliquée avec la case vide
function move(lign, col){
    if(
        ((emptyLign==lign) && ((col==emptyCol-1) || (col==emptyCol+1)))
    ||  ((emptyCol==col) && ((lign==emptyLign-1) || (lign==emptyLign+1)))
    ){

    //maj nombre clicks
    nbClick=nbClick+1;
    //récuprération du compteur
    var compteurClick= document.getElementById('compteurClick');

    //couper fil ducompteur
    compteurClick.removeChild(compteurClick.childNodes[0]);

    //amener la valeur clicks
    var compteurText;
    if(nbClick==1){
        compteurText=document.createTextNode('Un seul coup joué !')
    }else{
        compteurText=document.createTextNode(nbClick+' coups joués !')
    }

    compteurClick.appendChild(compteurText);


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
}