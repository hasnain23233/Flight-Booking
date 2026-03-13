import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import BookingRouter from "./routers/bookingRouters";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;
const mongo_link = process.env.MONGO_URI as string;

app.use("/api/booking", BookingRouter);

mongoose.connect(mongo_link!)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to MongoDB. Server running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Cannot connect to the database:", error);
  });   