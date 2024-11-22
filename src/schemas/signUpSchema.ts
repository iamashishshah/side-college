import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(4, "Username must be at least of 4 characters")
  .max(10, "Username must be no more than 10 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special characters");

export const SignUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "password must be at least 6 characters" }),
});
