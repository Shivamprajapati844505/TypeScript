"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    name: "shivam",
    age: 21,
    address: {
        city: "MBD",
        country: "india",
        pincode: 244001
    },
};
function isLegal(user) {
    if (user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
const ans = isLegal(user);
if (ans) {
    console.log("I am legal");
}
else {
    console.log("I am  not legal");
}
