
import {PrismaClient} from "@prisma/client";
import express from "express";



const app = express();
const client = new PrismaClient();

app.get("/users", async(req,res)=>{
    const users = await client.user.findMany();

    res.json({
        users
    })
})



app.get("/todos/:id", async(req,res)=>{
     const id = req.params.id; 
     const user = await client.user.findFirst({
        where:{
            id:parseInt(id)
        },
        select:{
            todos:true,
            username:true,
            password:true
        }
    });

    res.json({
        user
    })
})

app.listen(3000);

async function createUser(){
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
const user = await client.user.create({
  data: {
    username: "shivamkumar",
    password: "233644",
    age: 24,
    city: "Moradabad",
  },
});

// Ab us user ke liye ek todo create karo
await client.todo.create({
  data: {
    title: "Learn Prisma",
    description: "Understand relations and queries",
    done: false,
    userId: user.id, // link to created user
    time: new Date(),
  },
});
}
// createUser();

