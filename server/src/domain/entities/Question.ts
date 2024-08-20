export interface IQuestion {
  [x: string]: any;
  _id?:string;
  questionText: string;
  options: string[];
  correctAnswer: string;
  difficulty: string;
}
export default class Question {
  constructor(
    public readonly id: string,
    public readonly questionText: string,
    public readonly options: string[],
    public readonly correctAnswer: string,
    public readonly difficulty: string
  ) {}
}
