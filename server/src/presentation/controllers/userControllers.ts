import { NextFunction, Request, Response } from "express";
import UserUseCase from "../../use-cases/UserUseCase";
import { IUser } from "../../domain/entities/User";
import bcrypt from 'bcryptjs'

export default class UserController {
  constructor(private userUseCase: UserUseCase) {}

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10); 
      const user = await this.userUseCase.createUser({ ...req.body, password: hashedPassword } as IUser);
      res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.userUseCase.findByEmail(req.body.email);
      if (!user) return res.status(404).json({ message: "User not found" });

      const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
      if (!isPasswordValid) return res.status(401).json({ message: "Invalid credentials" });

      res.status(200).json({ message: "User authenticated successfully", user });
    } catch (error) {
      next(error);
    }
  }
}
