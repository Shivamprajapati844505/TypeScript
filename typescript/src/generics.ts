

//Generics
function abcd <H>(a: H,b: string, c:number){}
abcd<string>("hahah","audi",303);

function log<T>(val:T){

}
log("shivam");
log<number>(34);




// Generics interfaces
interface Hello<T> {
    name:string;
    age :number;
    key :T;
}

function abc(obj: Hello<string>){
   
}
abc({name: "food", age: 25, key:"abhi"})




//Generics classes 
class BottelMaker<T>{
    constructor(public key :T, public matel?:string){}
}

let b1 = new BottelMaker<string>("hey", "steel");
let b2 = new BottelMaker<number>(12021);
console.log(b1);
console.log(b2);


 //type casting

 let a = Number("12");
 console.log(a);
 console.log(typeof a);
 

 //Type assertion
 let value: any = "hello";

// using `as` keyword
let length1 = (value as string).length;
console.log(length1);

//using angle brackets 
let length2 = (<string>value).length;
console.log(length2);
