import express from "express";
import env from "dotenv";
import productRouter from "./routes/productRoute.js";
import categoryRouter from "./routes/categoryRoute.js";
import connectMongoDb from "./connectdb.js";

const app = express();

env.config();

//Connection MongoDb
connectMongoDb(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected with MongoDb");
  })
  .catch((error) => console.log(error));

//PORT
const PORT = process.env.PORT;

//Middleware
app.use(express.json());

//Router
app.use("/api/admin/product", productRouter);
app.use("/api/admin/categories", categoryRouter);

app.get("/api/admin", (req, res) => {
  res.send("Welcome E-Commerce");
});

app.listen(PORT, () => {
  console.log(`${PORT} server is started`);
});
