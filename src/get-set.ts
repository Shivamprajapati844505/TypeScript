// geaters and Setters


class User {
    constructor(public _name: string, public _age : number){}

    get name(){
        return this._name;
    }

    set name(value: string){
        this._name = value;
    }
}

let u1 = new User("harsh", 25);
console.log(u1);

let u2 = u1.name = "shivvvv";
 console.log(u2);
 console.log(u1);
 
 