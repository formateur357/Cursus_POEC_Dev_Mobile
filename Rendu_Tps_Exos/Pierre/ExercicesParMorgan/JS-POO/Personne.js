/*
 * Personne.js ( voir fichier Javascript POO.pdf page 37)
 * Déclaration de la fonction constructeur avec des parametres
 */
function Personne(prenom, nom, age, genre, interets) {
  this.nom = {
    // Création d'un objet qui s'appelle nom
    prenom,
    nom,
  };
  this.age = age;
  this.genre = genre;
  this.interets = interets;
  this.bio = function () {
    let passions = "";
    for (let i = 0; i < this.interets.length; i++) {
      if (i != 0) {
        passions += " et ";
      }
      passions += interets[i];
    }

    let il_ou_elle = genre == "femme" ? "Elle" : "Il";

    return (
      this.nom.prenom +
      " " +
      this.nom.nom +
      " a " +
      this.age +
      " ans. " +
      il_ou_elle +
      " aime " +
      passions +
      "."
    );
  };
  this.salutation = function () {
    return (
      "Bonjour ! Je m'appelle " +
      this.nom.prenom +
      " " +
      this.nom.nom +
      " et mon genre est " +
      genre +
      "."
    );
  };
}
