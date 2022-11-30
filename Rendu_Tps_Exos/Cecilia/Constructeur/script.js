class Animal{
    constructor(speed =10){
        this.speed = speed;
    }

    respire(){
        let r = 'je suis un animal  je respire';
        return r;
    };

    mange(){
        let r ="je suis un animal je mange";
        return r;
    }
}

class Mamifere extends Animal{
    constructor(speed, color){
        super(speed);
        this.color = color;
    };

    reproduction(){
        return " je ne ponds pas d'oeuf";
    }
    
};

class Chat extends Mamifere{
    constructor(speed, color, moustache){
        super(speed, color);
        this.moustache= moustache;
    }

    bruit (){
        return " je miaule";
    }
}


let george = new Chat(20, 'roux', "4");

console.log(george.respire());

console.log(george.reproduction());
