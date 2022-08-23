import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { handleSave } from "./controller/controller.mjs";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Connect to MongoDB
const dbURI = "mongodb://localhost/mkd-2";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(4000);
    console.log("Server ready . . .");
  })
  .catch((err) => console.log(err));

app.post("/save", handleSave);
