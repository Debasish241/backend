import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import morgan from "morgan"
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json())
app.use(express.urlencoded({extended: true, limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
app.use(morgan("dev"))

//routes import
import userRouter from "./routes/user.routes.js"


app.get("/",(req,res)=>{
    res.send("Hello From Debasish Debnath")
})

//routes declaration
app.use("/api/v1/users", userRouter)

// /api/v1/users/register

export {app}