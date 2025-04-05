import { SignupStep1Form } from "@/features/signup/components";
import { createLazyRoute, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupStep1DefaultValues, signupStep1Schema } from "../schema";

function Page() {
  const navigate = useNavigate({ from: "/signup/step-1" });

  const methods = useForm({
    mode: "onSubmit",
    shouldFocusError: true,
    resolver: zodResolver(signupStep1Schema),
    defaultValues: signupStep1DefaultValues,
  });

  const { handleSubmit } = methods;

  const submit = handleSubmit((data) => {
    console.log(data);
    navigate({ to: "/signup/step-2" });
  });

  return <SignupStep1Form methods={methods} submit={submit} />;
}

const SignupStep1 = createLazyRoute("step-1")({
  component: Page,
});

export default SignupStep1;
