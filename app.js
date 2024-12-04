import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { test } from "./backend/controllers/juegos.controllers.js";

dotenv.config();
console.log("Quiero que se escuche esta madre", process.env.url_bd)
mongoose.connect(process.env.url_bd)
.then(()=>{
    console.log("Jala esta madre");
})
.catch((error)=>{
    console.log("no funciona esta madre", error);
})

const app = express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("Se escucha correcto, no escucha borroso")
})
test()
