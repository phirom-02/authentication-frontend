import { createLazyRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import SignupStep2Form from "../components/signup-step-2-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  signupStep2Schema,
  sigupStep2DefaultValues,
} from "../schema/signup-step-2-schema";

function Page() {
  const methods = useForm({
    mode: "onSubmit",
    shouldFocusError: true,
    resolver: zodResolver(signupStep2Schema),
    defaultValues: sigupStep2DefaultValues,
  });

  const { handleSubmit } = methods;

  const submit = handleSubmit((data) => {
    console.log(data);
  });

  return <SignupStep2Form methods={methods} submit={submit} />;
}

const SignupStep2 = createLazyRoute("step-2")({
  component: Page,
});

export default SignupStep2;
