/*
fonctions2.js
*/
function changer_style2(objet) {
  let container = document.getElementById("titre_a_modifier");
  let valeur = objet.value;
  let texte = "";
  // alert("objet.id= " + objet.id + " valeur=" + objet.value);
  switch (objet.id) {
    case "colors":
      texte = "rgb(" + valeur + ", " + valeur + ", " + valeur + ")";
      container.style.backgroundColor = texte;
      break;
    case "padding":
      container.style.padding = texte = valeur + "px";
      break;
    case "height":
      container.style.height = texte = valeur + "px";
      break;
    case "width":
      container.style.width = texte = valeur + "px";
      break;
    case "arrondi":
      texte = valeur + "%";
      container.style.borderRadius = texte;
      break;
    case "rotation":
      texte = "rotate(" + valeur + "deg)";
      container.style.transform = texte;
      break;
    default:
      alert("objet inconnu--> objet.id= " + objet.id + " valeur=" + valeur);
      break;
  }
  let div_valeur = document.getElementById("div_valeur");
  div_valeur.innerText = valeur + " :" + texte;
}
