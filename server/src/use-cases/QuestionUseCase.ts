import { IQuestion } from "../domain/entities/Question";
import IQuestionRepository from "../interfaces/repositories/IQuestionRepository";

export default class QuestionUseCase {
  
    constructor(  private questionRepository :IQuestionRepository){}
    async createQuestion(question:IQuestion):Promise<void>{
        await this.questionRepository.create(question)
    }
    
}