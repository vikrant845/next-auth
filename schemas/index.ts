import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string({ required_error: 'Email is required' }),
  password: z.string({ required_error: 'Password is required' }).min(8, 'Password should me minimum 8 characters long'),
  code: z.optional(z.string())
});

export const RegisterSchema = z.object({
  email: z.string({ required_error: 'Email Is Required' }).email({ message: 'Invalid Email' }),
  password: z.string({ required_error: 'Password Is Required' }).min(8, 'Password should be minimum 8 characters long'),
  name: z.string({ required_error: 'Name Is Required' })
});