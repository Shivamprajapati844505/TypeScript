var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { PrismaClient } from "@prisma/client";
import express from "express";
const app = express();
const client = new PrismaClient();
app.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield client.user.findMany();
    res.json({
        users
    });
}));
app.get("/todos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const user = yield client.user.findFirst({
        where: {
            id: parseInt(id)
        },
        select: {
            todos: true,
            username: true,
            password: true
        }
    });
    res.json({
        user
    });
}));
app.listen(3000);
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        //   await client.user.create({
        //     data:{
        //         username:"Rama",
        //         password:"298933",
        //         age:23,
        //         city:"moradabad"
        //     }
        // })
        //   const user = await client.user.findFirst({
        //     where:{
        //         id:1
        //     },
        //     select:{
        //         username:true
        //     }
        //   });
        //   console.log(user);
        const user = yield client.user.create({
            data: {
                username: "shivamkumar",
                password: "233644",
                age: 24,
                city: "Moradabad",
            },
        });
        // Ab us user ke liye ek todo create karo
        yield client.todo.create({
            data: {
                title: "Learn Prisma",
                description: "Understand relations and queries",
                done: false,
                userId: user.id, // link to created user
                time: new Date(),
            },
        });
    });
}
createUser();
