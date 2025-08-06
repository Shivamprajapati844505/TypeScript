"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
isLegal({ name: "Shivam", age: 20 });
