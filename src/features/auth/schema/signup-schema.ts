import { z } from "zod";

export const signupSchema = z.object({
  email: z.string().nonempty("email is required"),
  username: z.string().nonempty("username is required"),
});

export type SignupSchema = z.infer<typeof signupSchema>;
