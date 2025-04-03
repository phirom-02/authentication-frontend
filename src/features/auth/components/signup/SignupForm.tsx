import { Button } from "@/components/ui/button";
import { Stack } from "@/components/ui/stack";

import FormProvider from "@/components/rhf-input/providers";
import RhfTextfield from "@/components/rhf-input/rhf-textfield";
import { UseFormReturn } from "react-hook-form";
import { SignupSchemaStep1 } from "../../schema";

type Props = {
  methods: UseFormReturn<SignupSchemaStep1>;
  submit: VoidFunction;
};

export default function SignupForm({ methods, submit }: Readonly<Props>) {
  return (
    <FormProvider methods={methods} onSubmit={submit}>
      <Stack className="gap-4 p-4">
        <RhfTextfield
          name="email"
          label="email"
          placeholder="Enter an email"
          description="Enter a unique email"
        />
        <RhfTextfield
          name="username"
          label="username"
          placeholder="Enter a username"
          description="Enter a unique username"
        />
        <RhfTextfield
          name="password"
          label="password"
          placeholder="Enter password"
          description="Enter a secure password"
        />

        <RhfTextfield
          name="confirmPassword"
          label="confirm password"
          placeholder="Enter confirm password"
          description="Enter a confirm password"
        />

        <Button className="mt-auto bg-primary" type="submit" variant="default">
          Signup
        </Button>
      </Stack>
    </FormProvider>
  );
}
