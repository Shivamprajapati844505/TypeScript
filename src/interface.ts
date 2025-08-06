
interface Address {
     city:string;
     country:string;
     pincode:number;
}

interface User {
    name:string;
    age:number;
    address:Address
}

interface Office {
     address:Address
}

let user:User ={
    name:"shivam",
    age:21,
    address:{
        city:"MBD",
        country:"india",
        pincode:244001
    },
};

function isLegal(user: User):boolean{
    if(user.age >= 18){
        return true
    } else {
        return false
    }
}

const ans = isLegal(user);
if(ans){
    console.log("I am legal");
}else{
     console.log("I am  not legal");
}