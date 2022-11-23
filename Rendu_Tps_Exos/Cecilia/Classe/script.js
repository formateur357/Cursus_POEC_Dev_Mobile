function Personne(prenom, nom, age, genre, interets) {
    this.nom = {
    prenom,
    nom
    };

    this.age = age;
    this.genre = genre;
    this.interets = interets;

    this.bio = function() {
        let presentation = this.nom.prenom + ' '+this.nom.nom + ' a ' +this.age + ' ans. ';

        presentation += this.genre == "femme" ? "Elle aime " : "Il aime ";

        for (let i = 0; i < this.interets.length; i++) {

            presentation += this.interets[i];
            if ( i < this.interets.length-1) {
                presentation += " et ";
            }
        }
        presentation += '.';

        console.log(presentation);
    };

    this.salutation = function() {
    console.log('Bonjour ! Je m\'appelle ' + this.nom.prenom + '.');
    };
};


let jeanne = new Personne("Jeanne", "Deschamps", 32, "femme",  ["tricoter", "boire du thé"]);

jeanne.bio();
jeanne.salutation();

let paul = new Personne("Paul", "Poire", 33, "homme", ["nager", "cuisiner", "aller au cinema"]);

paul.bio();
paul.salutation();
