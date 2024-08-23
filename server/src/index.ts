import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/dbConfig";
import quizRoutes from "./presentation/routers/quizRoutes";
import adminRoutes from "./presentation/routers/adminRoutes";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: "https://quiz-app-topaz-beta-82.vercel.app/",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cookieParser());
app.use(cors(corsOptions));

app.use(express.json());

app.get('/',(req,res)=>{
  res.send('hello')
})

app.use("/questions", quizRoutes);
// app.use("/", adminRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});


