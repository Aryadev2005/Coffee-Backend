// require('dotenv').config({
//     path: './env'
// })
import dotenv from "dotenv";
import express from "express";
import connectdb from "./db/db.js";
const app = express();

dotenv.config({
    path: './env'
})
console.log(process.env.MONGODB_URI)
connectdb()






































// ;(async ()=> {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERR: ",error);
//             throw error
//         })
//         app.listen(process.env.PORT , ()=>{
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     }catch(error){
//         console.error("Err:" , error)
//         throw error
//     }
// }) ()