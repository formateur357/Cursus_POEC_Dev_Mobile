class Vehicule{
    constructor(type, marque, modele){
        this.type=type;
        this.marque=marque;
        this.modele=modele;
    }
    toString(){
        return`${this.type} ${this.marque} ${this.modele} vehicule`;
   
    }

    static defaultWheels(){
        return 4;
    }
}

class Moteur extends Vehicule{
    constructor(energie){
super(Vehicule)
    this.energie=energie;
}
}
class Categorie extends Moteur{
    constructor(energie, sport, berline, coupe){
        super(energie);
        this.sport=sport;
        this.berline=berline;
        this.coupe=coupe;

    }
    
}
