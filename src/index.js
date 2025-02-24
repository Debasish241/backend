// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
const app = express();
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT ||  8000, ()=>{
        console.log(`server is running at ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MongoDb connection failed", err)
})



// 1st Approach

// ;(async ()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error",()=>{
//         console.log("ERROR",error)
//         throw error
//        })

//        app.listen(process.env.PORT, ()=>{
//         console.log(`App is listening on ${process.env.PORT}`)
//        })
//     } catch (error) {
//         console.log(error)
//         throw error
//     }
// })()