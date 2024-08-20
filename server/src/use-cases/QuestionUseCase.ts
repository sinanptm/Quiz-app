import { IQuestion } from "../domain/entities/Question";
import IQuestionRepository from "../interfaces/repositories/IQuestionRepository";

export default class QuestionUseCase {
  
    constructor(  private questionRepository :IQuestionRepository){}
    async createQuestion(question:IQuestion):Promise<IQuestion>{
        return await this.questionRepository.create(question)
    }
}