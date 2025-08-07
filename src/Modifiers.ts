class BottleCreator {
    constructor(public name:string){
    }
}

let b1 = new BottleCreator("Milton");
console.log(b1);



//private Modifiers
class BottleMaker {
    constructor(private name:string){}
}

 class MetalBottleMaker extends BottleMaker{
    constructor(name: string){
        super(name);
    }

    getValue(){
        console.log(this.name); 
    }
}

let b2 = new MetalBottleMaker("Chilton baba");
b2.name = "change the name"
console.log(b2);


//protected Modifiers
class BottleManufecture {
    constructor(protected name:string){}
}

 class BrassBottleMaker extends BottleManufecture{
    constructor(name: string){
        super(name);
    }

    getValue(){
        console.log(this.name); 
    }
}

let bottel = new BrassBottleMaker("protected Milton");
console.log(bottel);