import {Schema, model} from "mongoose";

const Esquema = new Schema({
    name : String,
    edad : Number
})
export const Modelos = new model("JuegosControladores", Esquema)
console.log("Funciona el modelo")