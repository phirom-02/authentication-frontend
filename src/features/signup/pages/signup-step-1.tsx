import { SignupForm } from "@/features/signup/components/signup";
import { createLazyRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchemaDefaultValues, signupSchemaStep1 } from "../schema";

function Page() {
  const methods = useForm({
    mode: "onSubmit",
    shouldFocusError: true,
    resolver: zodResolver(signupSchemaStep1),
    defaultValues: signupSchemaDefaultValues,
  });

  const { handleSubmit } = methods;

  const submit = handleSubmit((data) => {
    console.log(data);
  });

  return <SignupForm methods={methods} submit={submit} />;
}

const SignupStep1 = createLazyRoute("step-1")({
  component: Page,
});

export default SignupStep1;
