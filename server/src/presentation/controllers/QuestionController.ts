import { NextFunction, Request, Response } from "express";
import QuestionUseCase from "../../use-cases/QuestionUseCase";
import { IQuestion } from "../../domain/entities/Question";
import { ParseInt } from "../utils";

export default class QuestionController {
  constructor(private questionUseCase: QuestionUseCase) {}

  async createQuestion(req: Request, res: Response, next: NextFunction) {
    try {
      const question = await this.questionUseCase.createQuestion(req.body as IQuestion);
      res.status(201).json({ message: "Question created successfully.", question });
    } catch (error) {
      next(error);
    }
  }

  async findQuestions(req: Request, res: Response, next: NextFunction) {
    try {
      const limit = ParseInt(req.query.limit as string) || 10;
      const offset = ParseInt(req.query.offset as string) || 0;
      const questions = await this.questionUseCase.findQuestions(limit, offset, req.query.category as string);
      res.status(200).json({ questions });
    } catch (error) {
      next(error);
    }
  }

  async createManyQuestions(req: Request, res: Response, next: NextFunction) {
    try {
      const questions: IQuestion[] = req.body.questions;
      if (!Array.isArray(questions) || questions.length === 0) {
        return res.status(400).json({ message: "Invalid questions array." });
      }
      const createdQuestions = this.questionUseCase.createManyQuestions(questions);
      res.status(200).json({ questions: createdQuestions });
    } catch (error) {
      next(error);
    }
  }
}
