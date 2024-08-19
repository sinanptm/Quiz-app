import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/dbConfig';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// app.use(ProductRouters)

connectDB().then(()=>{
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
