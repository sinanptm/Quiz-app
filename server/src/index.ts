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
  origin: "quiz-p9d71zl0z-sinans-projects-8d312afe.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cookieParser());
app.use(cors(corsOptions));

app.use(express.json());

app.get('/hello',(req,res)=>{
  res.send("Hello this is a sample page");
})

app.use("/questions", quizRoutes);
app.use("/", adminRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});


