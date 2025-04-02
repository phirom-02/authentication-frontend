import { SignupForm } from "@/features/auth/components/signup";
import { createLazyRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../../schema";

function Page() {
  const methods = useForm({
    resolver: zodResolver(signupSchema),
    mode: "all",
  });

  const { handleSubmit } = methods;

  const submit = handleSubmit((data) => {
    console.log(data);
  });

  return <SignupForm methods={methods} submit={submit} />;
}

const Signup = createLazyRoute("/signup")({
  component: Page,
});

export default Signup;
