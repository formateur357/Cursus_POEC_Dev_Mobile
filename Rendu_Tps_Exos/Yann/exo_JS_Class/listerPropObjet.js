//Ecrivez un programme JavaScript pour lister les
//propriétés d'un objet JavaScript

let etudiant={
    nom:"jacques Michel",
    level:"8",
    numero:07
};

console.log(Object.keys(etudiant));

// Ecrivez un programme JavaScript pour supprimer la
// propriété numero de l'objet précédent. Imprimez
// également l'objet avant ou après la suppression de
// la propriété
console.log(etudiant)
delete etudiant.numero;
console.log(etudiant)

// Ecrivez un programme JavaScript pour obtenir la
// longueur d'un objet JavaScript (le nombre de
// propriétés qui lui sont propres, mais pas celles
// venant de la chaîne de prototypage)

objectLength = Object.keys(etudiant).length
console.log(objectLength)

// Ecrivez un programme JavaScript pour afficher le statut de lecture (c'est-à-dire
// afficher le nom du livre, le nom de l'auteur et le statut de lecture) des livres suivant
var biblio = [
 {
 title: 'Titre 1',
 auteur: 'Auteur 1',
 readingStatus: true
 },
 {
 title: 'Titre 2',
 auteur: 'Auteur 2',
 readingStatus: false
 },
 {
 title: 'Titre 3',
 auteur: 'Auteur 3',
 readingStatus: true
 }];

 for (let i =0; i<biblio.length; i++){
    let status = `Title : ${biblio[i].title}, auteur : ${biblio[i].auteur}, Status : ${biblio[i].readingStatus}`
    console.log(status)
 }