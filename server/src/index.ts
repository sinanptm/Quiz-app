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
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cookieParser());
app.use(cors(corsOptions));

app.use(express.json());

app.use("/questions", quizRoutes);
app.use("/", adminRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});



// Models: Defines the data models used throughout the application.
// Repository: Acts as an abstraction layer over data sources, providing a clean API for accessing and managing data.
// Entities: Represent core business objects with their properties and behaviors.
// Use Cases: Contains application-specific business rules and logic, orchestrating interactions between entities and data sources.
// Repository Interfaces: Defines interfaces for repositories used to access data, decoupling the domain layer from specific data sources.
