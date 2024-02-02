import mongoose from "mongoose"

export interface UserModelType extends mongoose.Document {
  name?: string,
  email?: string,
  emailVerified?: Date,
  image?: string,
  password?: string,
  accounts: AccountModelType[]
}

export interface AccountModelType extends mongoose.Document {
  type: string,
  provider: string,
  providerAccountId: string,
  refresh_token?: string,
  access_token?: string,
  expires_at: number,
  token_type?: string,
  scope?: string,
  id_token?: string,
  session_state?: string,
  user: UserModelType
}