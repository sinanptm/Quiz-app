import express from 'express'
import AdminController from '../controllers/adminControllers';

const userController = new AdminController();

const route = express()


route.post('/login',(req,res,next)=>{
    userController.login(req,res,next);
});


export default route