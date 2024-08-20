import express from 'express'
import UserRepository from '../../infrastructure/database/repositories/UserRepository'
import UserUseCase from '../../use-cases/UserUseCase';
import UserController from '../controllers/userControllers';


const userRepository = new UserRepository();
const userUseCase = new UserUseCase(userRepository);
const userController = new UserController(userUseCase)


const route = express()

route.post('/register',(req,res,next)=>{
    userController.register(req,res,next)
});
route.post('/login',(req,res,next)=>{
    userController.login(req,res,next);
});


export default route