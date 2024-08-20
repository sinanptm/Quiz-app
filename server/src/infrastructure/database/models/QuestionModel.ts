// src/infrastructure/database/models/QuestionSchema.ts

import { Schema, model } from "mongoose";
import { IQuestion } from "../../../domain/entities/Question";

const QuestionSchema = new Schema<IQuestion>({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  correctAnswer: { type: String, required: true },
  difficulty: { type: String, required: true },
  category:{type:String,required:true}
});

const QuestionModel = model<IQuestion>("Question", QuestionSchema);

export default QuestionModel;
