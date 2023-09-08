import express, { urlencoded } from "express";
import "dotenv/config.js";
import productRouter from "./routes/productRoute.js";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 5001;

//MIDDLEWARE
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(cors());

//ROUTES
app.use("/uploads", express.static("uploads"));
app.use("/api", productRouter);

const start = async () => {
  await mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("DB ok");
    })
    .catch((e) => {
      throw e.message;
    });
  app.listen(PORT, (err) => {
    if (err) {
      throw err.message;
    }
    console.log(`Server started on ${PORT}`);
  });
};

start();
