import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import dbConnection from "./config/db.js";
import userRoute from "./routes/userRoute.js"
import cors from "cors"

dotenv.config({
    path:".env"
});

const app = express();

//middileware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

const corsOptions ={
    origin:"http://localhost:5173",
    credentials:true
}

app.use(cors(corsOptions));

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Hello this is test home api",
        success:true
    })
})

app.use("/api/v1/user",userRoute);

app.listen(process.env.PORT,() => {
    console.log(`Server listen at port ${process.env.PORT}`);
})

dbConnection();