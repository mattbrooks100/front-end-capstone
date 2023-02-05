import express from "express";
import cors from "cors";
import postgres from "postgres";
import dotenv from "dotenv";
dotenv.config();

const sql = postgres(process.env.DATABASE_URL);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/shoes", (req, res) => {
  sql`SELECT * FROM shoes`.then((rows) => {
    res.send(rows);
  });
});

app.get("/api/reviews", (req, res) => {
  sql`SELECT * FROM reviews`.then(review => {
    res.send(review)
  })
})

app.post("/api/reviews", (req,res) => {
  sql``
})

app.listen(3000, () => {
  console.log("listening on port 3000");
});
