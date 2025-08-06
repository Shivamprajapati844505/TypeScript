interface User {
    name:string,
    age:number
}

function isLegal(user:User):boolean{
    if(user.age > 18){
        return true
     } else{
        return false
    }
}

isLegal({ name: "Shivam", age: 20 });