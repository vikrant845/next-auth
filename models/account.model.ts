import mongoose from "mongoose";
import { AccountModelType } from "./types";

const accountSchema = new mongoose.Schema<AccountModelType>({
  type: {
    type: String,
    required: true
  },
  provider: {
    type: String,
    required: true
  },
  providerAccountId: {
    type: String,
    required: true
  },
  refresh_token: String,
  access_token: String,
  expires_at: Number,
  token_type: String,
  scope: String,
  id_token: String,
  session_state: String,
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
});

accountSchema.index({ provider: 1, providerAccountId: 1 }, { unique: true });

export default mongoose.models.Account || mongoose.model<AccountModelType>('Account', accountSchema);