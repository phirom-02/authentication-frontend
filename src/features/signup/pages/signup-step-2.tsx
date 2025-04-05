/* eslint-disable react-hooks/exhaustive-deps */
import { createLazyRoute, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import SignupStep2Form from "../components/signup-step-2-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  signupStep2Schema,
  sigupStep2DefaultValues,
} from "../schema/signup-step-2-schema";
import { useAtom } from "jotai";
import signupStore from "../store";
import { useEffect } from "react";

function Page() {
  const navigate = useNavigate({ from: "/signup/step-2" });

  const [signupStep1Data, setSignupStep1Data] = useAtom(
    signupStore.SignupStep1.signupStep1Data
  );

  const [isSignupStep1Valid, setIsSignupStep1Valid] = useAtom(
    signupStore.SignupStep1.isSignupStep1Valid
  );

  const methods = useForm({
    mode: "onSubmit",
    shouldFocusError: true,
    resolver: zodResolver(signupStep2Schema),
    defaultValues: sigupStep2DefaultValues,
  });

  const { handleSubmit } = methods;

  const submit = handleSubmit((data) => {
    console.log({ ...data, signupStep1Data });
    setSignupStep1Data(null);
    setIsSignupStep1Valid(false);
  });

  useEffect(() => {
    if (!isSignupStep1Valid) {
      navigate({ to: "/signup/step-1", replace: true });
    }
  }, [isSignupStep1Valid]);

  return <SignupStep2Form methods={methods} submit={submit} />;
}

const SignupStep2 = createLazyRoute("step-2")({
  component: Page,
});

export default SignupStep2;
