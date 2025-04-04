import { z } from "zod";

export const signupStep1Schema = z
  .object({
    email: z
      .string()
      .nonempty("email is required")
      .email("invalid email")
      .default(""),
    username: z.string().nonempty("username is required").default(""),
    password: z.string().nonempty("password is required").default(""),
    confirmPassword: z
      .string()
      .nonempty("confrim password is required")
      .default(""),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "The passwords did not match",
    path: ["confirmPassword"],
  });

export type SignupStep1Schema = Partial<z.infer<typeof signupStep1Schema>>;

export const signupStep1DefaultValues: SignupStep1Schema = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};
