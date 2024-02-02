"use server";

import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import User from '../models/user.model';
import { UserModelType } from "@/models/types";
import bcrypt from 'bcryptjs';
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) return { error: 'Invalid fields' };

  const { email, password, name } = validatedFields.data;
  
  const existingUser = await getUserByEmail(email);

  if (existingUser.length) return { error: 'User already exists' };

  const hashedPassword = await bcrypt.hash(password, 10);
  
  const newUser = await User.create<UserModelType>({
    email,
    password: hashedPassword,
    name
  });

  return { data: newUser, success: 'User created' };
}