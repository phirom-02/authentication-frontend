import { SignupStep1Form } from "@/features/signup/components/signup";
import { createLazyRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupStep1DefaultValues, signupStep1Schema } from "../schema";

function Page() {
  const methods = useForm({
    mode: "onSubmit",
    shouldFocusError: true,
    resolver: zodResolver(signupStep1Schema),
    defaultValues: signupStep1DefaultValues,
  });

  const { handleSubmit } = methods;

  const submit = handleSubmit((data) => {
    console.log(data);
  });

  return <SignupStep1Form methods={methods} submit={submit} />;
}

const SignupStep1 = createLazyRoute("step-1")({
  component: Page,
});

export default SignupStep1;
