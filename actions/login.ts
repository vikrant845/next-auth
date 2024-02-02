"use server";

import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";

interface LoginFormValues {
  email: string,
  password: string,
  code?: string
}

export const login = (values: LoginFormValues) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid credentials' };
  }

  const { email, password, code } = validatedFields.data;

  try {

  } catch (err) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case 'CredentialsSignin': {
          return {error: 'Invalid Credentials'};
        }
        default: {
          return {error: 'An error occurred'};
        }
      }
    }
    throw err;
  }
}