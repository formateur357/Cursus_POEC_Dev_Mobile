/*
 * main.js
 * programme principal
 */
let personne1 = new Personne("Marilyn", "Monroe", 25, "femme", [
  "faire du cinema",
  "chanter",
  "poser dans les revues",
]);
let personne2 = new Personne("James", "Dean", 30, "homme", [
  "rouler vite",
  "collectionner les titres de films",
]);
let personne3 = new Personne("Sherlock", "Holmes", 45, "homme", [
  "chercher les criminels",
  "parler à son ami Watson",
]);
let personne4 = new Personne("Elon", "Musk", 48, "homme", [
  "faire de l'argent",
  "créer des véhicules de toutes sortes",
]);

function ajouter_div(div_destination, contenu) {
  let iDiv = document.createElement("div");
  iDiv.id = "block";
  iDiv.className = "block";
  div_destination.appendChild(iDiv);
  iDiv.innerHTML = contenu;
}

let div_gens = document.getElementById("gens");
let tab_personnes = [personne1, personne2, personne3, personne4]; // Créer un tableau contenant plusieurs personnes
// Maintenant on va parcourir la liste dans une boucle for
for (let i = 0; i < tab_personnes.length; i++) {
  let p = tab_personnes[i]; // Extraire une personne du tableau
  let b = p.bio(); // Lire la biographie et la stocker dans b
  let s = p.salutation(); // Lire la salutation et la stocker dans s
  ////
  // alert("bio=" + b + "\n" + "salutation=" + s);
  ajouter_div(
    div_gens,
    "Biographie=" + b + "<br>" + "Salutations=" + s + "<hr>"
  );
}
