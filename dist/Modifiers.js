"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BottleCreator {
    constructor(name) {
        this.name = name;
    }
}
let b1 = new BottleCreator("Milton");
console.log(b1);
//private Modifiers
class BottleMaker {
    constructor(name) {
        this.name = name;
    }
}
class MetalBottleMaker extends BottleMaker {
    constructor(name) {
        super(name);
    }
    getValue() {
        console.log(this.name);
    }
}
let b2 = new MetalBottleMaker("Chilton baba");
b2.name = "change the name";
console.log(b2);
//protected Modifiers
class BottleManufecture {
    constructor(name) {
        this.name = name;
    }
}
class BrassBottleMaker extends BottleManufecture {
    constructor(name) {
        super(name);
    }
    getValue() {
        console.log(this.name);
    }
}
let bottel = new BrassBottleMaker("protected Milton");
bottel.name = "change the name";
console.log(bottel);
