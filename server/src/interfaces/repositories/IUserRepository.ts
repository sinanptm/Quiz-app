import { IUser } from "../../domain/entities/User";

export default interface IUserRepository {
  create(user: IUser): Promise<IUser>;
  update(user: IUser): Promise<IUser | never>;
  findByEmail(email: string): Promise<IUser | null>;
}
