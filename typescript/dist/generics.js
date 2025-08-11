"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Generics
function abcd(a, b, c) { }
abcd("hahah", "audi", 303);
function log(val) {
}
log("shivam");
log(34);
function abc(obj) {
}
abc({ name: "food", age: 25, key: "abhi" });
//Generics classes 
class BottelMaker {
    constructor(key, matel) {
        this.key = key;
        this.matel = matel;
    }
}
let b1 = new BottelMaker("hey", "steel");
let b2 = new BottelMaker(12021);
console.log(b1);
console.log(b2);
//type casting
let a = Number("12");
console.log(a);
console.log(typeof a);
//Type assertion
let value = "hello";
// using `as` keyword
let length1 = value.length;
console.log(length1);
//using angle brackets 
let length2 = value.length;
console.log(length2);
