import express from 'express'
import cors from "cors"
import { connectDb } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

import dotenv from 'dotenv';
dotenv.config();


//app config
const app = express();
const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(cors());

//db connection
connectDb();

//api end points
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'));
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);

app.get("/",(req,res) => {
    res.send("API Working");
})

app.listen(PORT,() => {
    console.log(`Server listening on port http://localhost:${PORT}`);
})

//mongodb+srv://harishmacha987:LbQNkHBKXlMO2p69@cluster0.2dwxbhk.mongodb.net/?

//mongodb+srv://harishmacha987:LbQNkHBKXlMO2p69@cluster0.2dwxbhk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0