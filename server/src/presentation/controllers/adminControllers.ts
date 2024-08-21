import { NextFunction, Request, Response } from "express";

export default class AdminController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const {email,password} = req.body
      
      if(email===process.env.ADMIN_EMAIL&&password===process.env.ADMIN_PASSWORD){
        res.status(200).json({ message: "Admin authenticated successfully" });
      }else{
        res.status(200).json({message:"Invalid credentials"})
      }

    } catch (error) {
      next(error);
    }
  }
}
