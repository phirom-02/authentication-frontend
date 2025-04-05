import { atom } from "jotai";
import { SignupStep1Schema } from "../schema";

export const signupStep1Data = atom<SignupStep1Schema | null>(null);

export const isSignupStep1Valid = atom<boolean>(false);
