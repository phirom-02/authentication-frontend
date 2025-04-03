import { SignupForm } from "@/features/auth/components/signup";
import { createLazyRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchemaStep1 } from "../../schema";
import { getDefaults } from "@/utils/zod";

function Page() {
  console.log(getDefaults(signupSchemaStep1));

  const methods = useForm({
    resolver: zodResolver(signupSchemaStep1),
    mode: "onSubmit",
    defaultValues: getDefaults(signupSchemaStep1),
    shouldFocusError: true,
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
