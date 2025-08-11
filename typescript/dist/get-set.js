"use strict";
// geaters and Setters
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
let u1 = new User("harsh", 25);
console.log(u1);
let u2 = u1.name = "shivvvv";
console.log(u2);
console.log(u1);
