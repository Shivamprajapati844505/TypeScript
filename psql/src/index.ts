import { Client } from "pg";
import express from "express";


const app = express();
app.use(express.json());

const pgClient = new Client(
  "postgresql://neondb_owner:npg_urWawCv2y3Kg@ep-proud-sky-adpnfz6f-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
);

// const pgClient = new Client({
//     user: "neondb_owner",
//     password:"npg_urWawCv2y3Kg",
//     port: 5432,
//     host:"ep-proud-sky-adpnfz6f-pooler.c-2.us-east-1.aws.neon.tech",
//     database:"neondb"
// })

async function main() {
  await pgClient.connect();
     // const response = await pgClient.query("SELECT * FROM users;")
     // console.log(response.rows);
  await pgClient.query(`
        CREATE TABLE IF NOT EXISTS todos (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            completed BOOLEAN DEFAULT false
        );
    `);

  // Naya record insert karna
//   await pgClient.query(
//     "INSERT INTO todos (title, completed) VALUES ('Learn PostgreSQL with Node.js', false)"
//   );

//   const response = await pgClient.query("SELECT * FROM todos;");
//     console.log(response.rows);
}
main();


app.post("/signup", async(req,res) => {
    const username = await req.body.username;
    const password = await req.body.password;
    const email = await req.body.email;


    const response = await pgClient.query(`INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`)


    res.json({
        message:"You have signed up"
    })
})

app.listen(3000);