import { Button } from "@/components/ui/button";
import { Stack } from "@/components/ui/stack";

import FormProvider from "@/components/rhf-input/providers";
import RhfTextfield from "@/components/rhf-input/rhf-textfield";
import { UseFormReturn } from "react-hook-form";
import { SignupSchema } from "../../schema";

type Props = {
  methods: UseFormReturn<SignupSchema>;
  submit: VoidFunction;
};

export default function SignupForm({ methods, submit }: Readonly<Props>) {
  return (
    <FormProvider methods={methods} onSubmit={submit}>
      <Stack className="gap-4 p-4">
        <RhfTextfield
          name="email"
          label="email"
          placeholder="Input an email"
          description="Input an unique email"
        />
        <RhfTextfield
          name="username"
          label="username"
          placeholder="Input an username"
          description="Input a unique username"
        />

        <Button className="mt-auto bg-primary" type="submit" variant="default">
          Signup
        </Button>
      </Stack>
    </FormProvider>
  );
}
