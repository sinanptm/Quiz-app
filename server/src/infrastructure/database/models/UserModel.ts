import { model, Schema } from "mongoose";
import { IUser } from "../../../domain/entities/User";

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true, unique: true },
}, {
  timestamps: true, 
  versionKey: false  
});

const UserModel = model<IUser>("User", userSchema);

export default UserModel;
