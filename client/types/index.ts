
export interface QuestionQueryParams {
  limit?: number;
  offset?: number;
  category?: string;
}

export interface Question {
  _id?: string;
  question: string;
  options: string[];
  correctAnswer: string;
  difficulty: string;
  category: string;
}

export interface QuestionsResponse {
  questions?: Question[];
  message?: string;
  status?: number;
  question?: Question;
  categories?:string[];
}

export interface CardProps {
  image?: string;
  link?: string;
  heading?: string;
  text?: string;
  id: string;
}


export interface AdminLoginRequest {
  email: string;
  password: string;
}

export interface AdminLoginResponse {
  token: string;
  message: string;
}