import  { IQuestion } from "../../../domain/entities/Question";
import IQuestionRepository from "../../../interfaces/repositories/IQuestionRepository";
import QuestionModel from "../models/QuestionModel";

export default class QuestionRepository implements IQuestionRepository {
  model = QuestionModel;
  
  async create(question: IQuestion): Promise<IQuestion> {
    const questionModel = new this.model(question);
    const createdQuestion = await questionModel.save();
    return createdQuestion
  }
  
  async findById(id: string): Promise<IQuestion | null> {
    const question = await this.model.findById(id);
    if (!question) return null;
    return question 
  }

  async findAll(limit: number, offset: number,category:string): Promise<IQuestion[]> {
    const query:any = {};
    if(category){
      query.category = category
    }
    const questions = await this.model
      .find(query)
      .skip(offset)
      .limit(limit);
    return questions
  }
  async update(question: IQuestion): Promise<IQuestion> {
    const updatedQuestion = await this.model.findByIdAndUpdate(question?._id,question,{new:true});
    if(!updatedQuestion)throw new Error("Question not found");
    return updatedQuestion
  }
  async delete(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id)
  }
}
