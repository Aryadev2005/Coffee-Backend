// require('dotenv').config({
//     path: './env'
// })
import dotenv from "dotenv";
import connectdb from "./db/db.js";
import app from "./app.js";
dotenv.config({
    path: './env'
})
console.log(process.env.MONGODB_URI)
connectdb()

.then(() => {
    app.listen(process.env.PORT || 8000 , ()=> {
        console.log(`Server is running at ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MONGO DB CONNECTION FAILED !!!", error);
})






































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