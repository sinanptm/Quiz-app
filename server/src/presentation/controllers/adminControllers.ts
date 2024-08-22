import { NextFunction, Request, Response } from "express";
import AdminUseCase from "../../use-cases/AdminUseCase";

export default class AdminController {
  constructor(private adminUseCase: AdminUseCase) {}
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      if (
        this.adminUseCase.isValidCredentials(
          process.env.ADMIN_EMAIL as string,
          process.env.ADMIN_PASSWORD as string,
          email,
          password
        )
      ) {
        res.status(200).json({ message: "Admin authenticated successfully" });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      next(error);
    }
  }
}
