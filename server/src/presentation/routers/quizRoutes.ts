import express from 'express'
import QuestionController  from '../controllers/questionControllers'
import QuestionRepository from '../../infrastructure/database/repositories/QuestionRepository'
import QuestionUseCase from '../../use-cases/QuestionUseCase';

const questionRepository = new QuestionRepository();
const questionUseCase = new QuestionUseCase(questionRepository);
const questionControllers = new QuestionController(questionUseCase);

const route = express()

route.post('/',(req,res,next)=>{
    questionControllers.createQuestion(req,res,next)
});

route.get('/',(req,res,next)=>{
    questionControllers.findQuestions(req,res,next);
});

route.post('/add-many',(req,res,next)=>{
    questionControllers.createManyQuestions(req,res,next);
})


export default route