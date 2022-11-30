function Personne(prenom, nom, age, genre, interets) {
    this.nom = {
    prenom,
    nom
    };
    this.age = age;
    this.genre = genre;
    this.interets = interets;
    this.bio = function() {
    return(this.nom.prenom + ' ' + this.nom.nom + ' a ' + this.age + ' ans. Il aime ' + this.interets[0] + ' et '
   + this.interets[1] + '.');
    };
    this.salutation = function() {
    return('Bonjour ! Je m\'appelle ' + this.nom.prenom + '.');
    };
   };

   var ilOuElle;
 if(this.genre === 'homme' || this.genre === 'Homme' || this.genre === 'h' || this.genre === 'H') {
 ilOuElle = 'Il aime ';
 } else if(this.genre === 'femme' || this.genre === 'Femme' || this.genre === 'f' || this.genre ===
'F') {
 ilOuElle = 'Elle aime ';
 } else {
 ilOuElle = 'Elle aime ';
 }



   var personne1 = new Personne('Yann', 'Cotard', '57', 'homme', ['informatique', '3d'])

   var personne2 = new Personne('Sophie', 'Marceau', '56', 'Femme', ['cinéma', 'féminisme', 'La Boum'])




   console.log(personne1['age'])
   console.log(personne1.interets[1])
   console.log(personne2.bio())
   console.log(personne1.bio())
   console.log(personne2.salutation())