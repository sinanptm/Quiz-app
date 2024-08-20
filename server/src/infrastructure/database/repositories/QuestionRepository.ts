import Question, { IQuestion } from "../../../domain/entities/Question";
import IQuestionRepository from "../../../interfaces/repositories/IQuestionRepository";
import { ParseInt } from "../../../utils";
import QuestionModel from "../models/QuestionModel";

export default class QuestionRepository implements IQuestionRepository {
  model = QuestionModel;

  async create(question: IQuestion): Promise<IQuestion> {
    const questionModel = new this.model(question);
    const createdQuestion = await questionModel.save();
    return new Question(
      createdQuestion._id.toString(),
      createdQuestion.questionText,
      createdQuestion.options,
      createdQuestion.correctAnswer,
      createdQuestion.difficulty
    );
  }
  async findById(id: string): Promise<IQuestion | null> {
    const question = await this.model.findById(id);
    if (!question) return null;
    return new Question(
      question._id.toString(),
      question.questionText,
      question.options,
      question.correctAnswer,
      question.difficulty
    );
  }

  async findAll(limit: string, offset: string): Promise<IQuestion[]> {
    const questions = await this.model
      .find()
      .skip(ParseInt(offset))
      .limit(ParseInt(limit));
    return questions.map(
      (question) =>
        new Question(
          question.id,
          question.questionText,
          question.options,
          question.correctAnswer,
          question.difficulty
        )
    );
  }
  async update(question: IQuestion): Promise<IQuestion> {
    const updatedQuestion = await this.model.findByIdAndUpdate(question?.id,question,{new:true});
    if(!updatedQuestion)throw new Error("Question not found");
    return new Question(
        updatedQuestion.id,
        updatedQuestion.questionText,
        updatedQuestion.options,
        updatedQuestion.correctAnswer,
        updatedQuestion.difficulty
      );
  }
  async delete(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id)
  }
}
