import express from "express";
import cors from "cors";
import postgres from "postgres";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const sql = postgres(process.env.DATABASE_URL);
const app = express();
app.use(cors());
app.use(express.json());

// REDIS IMPLEMENTATION FOR CLIENT-SIDE CACHING
import redis from "redis";
let redisClient;
(async () => {
  console.log("Starting Redis...");
  redisClient = redis.createClient();
  redisClient.on("error", (error) => console.error(`Error : ${error}`));
  await redisClient.connect();
  console.log("Redis connected.");
})();

async function getShoes(req, res) {
  try {
    console.log("Checking for cached data...");
    const shoeData = await redisClient.get("Medium Curry");
    if (shoeData) {
      console.log("Cached data found.")
      res.send(shoeData);
    } else {
      console.log("No cached data. Querying database...");
      const shoeData = await sql`SELECT * FROM shoes WHERE name = 'Nike Dunk Low ''Medium Curry'''`;
      res.send(JSON.stringify(shoeData));
      console.log("Saving data in cache.")
      redisClient.set("Medium Curry", JSON.stringify(shoeData));
    }
  } catch (err) {
    console.error(err);
  }
}
// END REDIS IMPLEMENTATION

app.get("/api/shoes/medium_curry", getShoes);

app.get("/api/reviews", (req, res) => {
  sql`SELECT * FROM reviews`.then((review) => {
    res.send(review);
  });
});

app.post("/api/reviews", (req, res) => {
  let review = req.body;
  sql`INSERT INTO reviews ${sql(review)} RETURNING *`.then((result) => {
    res.json(result);
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
