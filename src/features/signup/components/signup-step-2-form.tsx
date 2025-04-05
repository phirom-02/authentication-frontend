import FormProvider from "@/components/rhf-input/providers";
import RhfTextfield from "@/components/rhf-input/rhf-textfield";
import { Button } from "@/components/ui/button";
import { Stack } from "@/components/ui/stack";
import { UseFormReturn } from "react-hook-form";
import { SignupStep2Schema } from "../schema/signup-step-2-schema";

type Props = {
  methods: UseFormReturn<SignupStep2Schema>;
  submit: VoidFunction;
};

export default function SignupStep2Form({ methods, submit }: Readonly<Props>) {
  return (
    <FormProvider methods={methods} onSubmit={submit}>
      <Stack className="gap-2 p-4">
        <RhfTextfield
          name="firstName"
          label="first name"
          placeholder="Enter first name"
        />
        <RhfTextfield
          name="lastName"
          label="last name"
          placeholder="Enter last name"
        />

        <Button className="mt-auto bg-primary" type="submit">
          Signup
        </Button>
      </Stack>
    </FormProvider>
  );
}
