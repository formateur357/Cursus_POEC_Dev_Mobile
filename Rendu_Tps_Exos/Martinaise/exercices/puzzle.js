//emplacement case vide
let vide = "button9"

//On récupère l'élément sur lequel on veut detecter le click (ici tous les boutons)
const allbuttons = document.querySelectorAll("button");
 console.log(allbuttons)
//on tranforme la note liste en liste avec array.from soit en tableau aussi
//on tranforme chaque button en fonction avec map
Array.from(allbuttons).map(button => {
    


    //on écoute l'évenement et on lui dit quoi faire ici on lui donne la methode switchCase
    button.addEventListener('click', switchCase);
});
//on ulise la methode switchCase en lui donnont en paramètre un evenement
function switchCase(evt) {
    //dans l'objet evt on choisit la methode currentTarget qui mepermet de recuperer l'id

    id = evt.currentTarget.id;
    //  button remplit
    let caseremplit = document.getElementById(id);
    //  button vide
    let casevide = document.getElementById(vide);

    // console.log("mes balises selectionées à partir des id", caseremplit, casevide)
    // switch l'id et la classe des deux buttons.
    //innerHTML permet de remplacer facilement le contenu
    // existant d'un élément par un nouveau contenu.

    // interchange casevide et caseremplit(le contenue chiffre ou espace vide)
    // console.log("contenu de la balise vide", casevide.innerHTML)

    // console.log("contenu de la balise remplie", caseremplit.innerHTML)
    let maclassevide = casevide.innerHTML;
    let maclasseremplit = caseremplit.innerHTML;
    // console.log("avant maclassevide", maclassevide)
    // console.log("avant maclasseremplit", maclasseremplit)


    //(permutation  du contenue de case  recupéré  plus haut)
    caseremplit.innerHTML = maclassevide;
    casevide.innerHTML = maclasseremplit;

    // console.log("après maclassevide", maclasseremplit )
    // console.log("après maclasseremplit",maclassevide )

    //permutation des classes remplit et vide
    caseremplit.setAttribute("class", "espacevide");
    casevide.setAttribute("class", "case");
    //on concerve l'id de départ du boutton vide
    vide = id;
}


