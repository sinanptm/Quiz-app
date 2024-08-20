export interface IQuestion {
  _id?:string;
  question: string;
  options: string[];
  correctAnswer: string;
  difficulty: string;
  category:string;
}