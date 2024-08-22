import express from 'express'
import AdminController from '../controllers/adminControllers';
import AdminUseCase from '../../use-cases/AdminUseCase';

const adminUseCase = new AdminUseCase();
const adminController = new AdminController(adminUseCase);

const route = express()


route.post('/login',(req,res,next)=>{
    adminController.login(req,res,next);
});


export default route