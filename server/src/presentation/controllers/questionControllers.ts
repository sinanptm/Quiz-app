import { NextFunction, Request, Response } from "express";
import QuestionUseCase from "../../use-cases/QuestionUseCase";
import { IQuestion } from "../../domain/entities/Question";

export default class QuestionController {
  constructor(private questionUseCase: QuestionUseCase) {}
  async createQuestion(req: Request, res: Response, next: NextFunction) {
    try { 
      await this.questionUseCase.createQuestion(req.body as IQuestion);
      res.status(200).json({message:"Question created Successfully."})
    } catch (error) {
      next(error);
    }
  }
}
