import { z } from "zod";

export const signupStep2Schema = z.object({
  firstName: z.string().nonempty("first name is required"),
  lastName: z.string().nonempty("last name is required"),
});

export type SignupStep2Schema = z.infer<typeof signupStep2Schema>;

export const sigupStep2DefaultValues: SignupStep2Schema = {
  firstName: "",
  lastName: "",
};
