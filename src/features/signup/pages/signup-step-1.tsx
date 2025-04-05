/* eslint-disable react-hooks/exhaustive-deps */
import { SignupStep1Form } from "@/features/signup/components";
import { createLazyRoute, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupStep1DefaultValues, signupStep1Schema } from "../schema";
import { useAtom, useSetAtom } from "jotai";
import signupStore from "../store";
import { useEffect } from "react";

function Page() {
  const navigate = useNavigate({ from: "/signup/step-1" });

  const [signupStep1Data, setSignupStep1Data] = useAtom(
    signupStore.SignupStep1.signupStep1Data
  );

  const setIsSignupStep1Valid = useSetAtom(
    signupStore.SignupStep1.isSignupStep1Valid
  );

  const methods = useForm({
    mode: "onSubmit",
    shouldFocusError: true,
    resolver: zodResolver(signupStep1Schema),
    defaultValues: signupStep1DefaultValues,
  });

  const { handleSubmit } = methods;

  const submit = handleSubmit((data) => {
    setSignupStep1Data(data);
    setIsSignupStep1Valid(true);
    navigate({ to: "/signup/step-2" });
  });

  useEffect(() => {
    if (signupStep1Data) {
      setSignupStep1Data(null);
    }
  }, []);

  return <SignupStep1Form methods={methods} submit={submit} />;
}

const SignupStep1 = createLazyRoute("step-1")({
  component: Page,
});

export default SignupStep1;
