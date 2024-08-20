import { IQuestion } from '../../domain/entities/Question';

export default interface IQuestionRepository {
  create(question: IQuestion): Promise<IQuestion>;
  findById(id: string): Promise<IQuestion | null>;
  findAll(limit?:string,offset?:string): Promise<IQuestion[]>;
  update(question: IQuestion): Promise<IQuestion>;
  delete(id: string): Promise<void>;
}