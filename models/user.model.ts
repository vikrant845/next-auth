import mongoose from "mongoose";
import { UserModelType } from "./types";

const userSchema = new mongoose.Schema<UserModelType>({
  name: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  emailVerified: Date,
  image: String,
  accounts: {
    type: [mongoose.Schema.ObjectId],
    ref: 'Account'
  }
});

export default mongoose.models.User || mongoose.model<UserModelType>('User', userSchema);