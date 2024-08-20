import { IUser } from "../../../domain/entities/User";
import IUserRepository from "../../../interfaces/repositories/IUserRepository";
import UserModel from "../models/UserModel";
import { MongoError } from "mongodb";


export default class UserRepository implements IUserRepository {
  private model = UserModel;

  async create(user: IUser): Promise<IUser> {
    try {
      const userModel = new this.model(user);
      return await userModel.save();
    } catch (error) {
      if (error instanceof MongoError && error.code === 11000) {
        throw new Error("Duplicate key error: User with this email or phone already exists.");
      }
      throw error;
    }
  }


  async update(user: IUser): Promise<IUser | never> {
    const updatedUser = await this.model.findByIdAndUpdate(user._id, user, { new: true });
    if (!updatedUser) throw new Error("User not found");
    return updatedUser;
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return await this.model.findOne({ email });
  }
}
