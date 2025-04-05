import { Button } from "@/components/ui/button";
import { Stack } from "@/components/ui/stack";

import FormProvider from "@/components/rhf-input/providers";
import RhfTextfield from "@/components/rhf-input/rhf-textfield";
import { UseFormReturn } from "react-hook-form";
import { SignupStep1Schema } from "../schema";

type Props = {
  methods: UseFormReturn<SignupStep1Schema>;
  submit: VoidFunction;
};

export default function SignupStep1Form({ methods, submit }: Readonly<Props>) {
  return (
    <FormProvider methods={methods} onSubmit={submit}>
      <Stack className="gap-2 p-4">
        <RhfTextfield name="email" label="email" placeholder="Enter an email" />
        <RhfTextfield
          name="username"
          label="username"
          placeholder="Enter a username"
        />
        <RhfTextfield
          name="password"
          label="password"
          placeholder="Enter password"
          type="password"
        />

        <RhfTextfield
          name="confirmPassword"
          label="confirm password"
          placeholder="Enter confirm password"
          type="password"
        />

        <Button className="mt-auto bg-primary" type="submit">
          Next
        </Button>
      </Stack>
    </FormProvider>
  );
}
