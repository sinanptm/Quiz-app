import { IUser } from "../domain/entities/User";
import IUserRepository from "../interfaces/repositories/IUserRepository";

export default class UserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async createUser(user: IUser): Promise<IUser> {
    return await this.userRepository.create(user);
  }

  async updateUser(user: IUser): Promise<IUser | never> {
    return await this.userRepository.update(user);
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return await this.userRepository.findByEmail(email);
  }
}
