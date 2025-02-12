import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import ProductRoutes from './routes/productRoutes.js';
import cors from 'cors';
import cartRoutes from './routes/cartRoutes.js';
import admin from 'firebase-admin' ;
import ServiceAccount from './Key/test-1bf72-firebase-adminsdk-pg6k8-0aa4b3a197.json'  with {type: 'json'}  ;

const app = express();

admin.initializeApp({
  credential: admin.credential.cert(ServiceAccount),
  databaseURL: "https://test-1bf72-default-rtdb.asia-southeast1.firebasedatabase.app"
});

dotenv.config();

app.use(cors());
app.use(express.json());


app.use('/uploads', express.static('uploads'));
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Connection is successfull');
});


app.use('/auth', userRoutes);
app.use('/api', ProductRoutes);
app.use('/api', cartRoutes)
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running ${process.env.PORT}`);
});


