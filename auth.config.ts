import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { LoginSchema } from "./schemas";
import { getUserByEmail } from "./data/user";
import User from './models/user.model';
import bcrypt from 'bcryptjs';
import dbConnect from "./db/mongoose";

export default {
  providers: [CredentialsProvider({
    async authorize(credentials, request) {
      await dbConnect();
      try {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
  
          await dbConnect();
          const user = await User.findOne({ email });
  
          if (!user || !user.password) return null;
  
          const passwordsMatch = await bcrypt.compare(user.password, password);
  
          if (passwordsMatch) return user;
  
          return null;
        }
      } catch (err) {
        throw err;
      }
      return null;
    }
  })]
} satisfies NextAuthConfig;