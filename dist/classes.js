"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BottenMaker {
    constructor(name, material, price, color) {
        this.name = name;
        this.material = material;
        this.price = price;
        this.color = color;
    }
}
let b1 = new BottenMaker("Milton", "steel", 500, "white");
console.log(b1);
// lengthy way of code
class BottenBuilder {
    constructor(name) {
        this.name = name;
    }
}
let bottel = new BottenBuilder("Bosco");
console.log(bottel);
