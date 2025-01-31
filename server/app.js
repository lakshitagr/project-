import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import ProductRoutes from "./routes/productRoutes.js";
import cors from 'cors'



const app = express();

dotenv.config();

app.use(cors())
app.use(express.json())
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("Connection is successfull......");
});


app.use('/auth', userRoutes)
app.use('/api', ProductRoutes)

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running ${process.env.PORT}`);
});
