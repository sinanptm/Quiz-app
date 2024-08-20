import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/dbConfig';
import quizRoutes from './presentation/routers/quizRoutes';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/question',quizRoutes)

connectDB().then(()=>{
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
