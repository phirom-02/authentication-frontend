import { SignupForm } from "@/features/auth/components/signup";
import { createLazyRoute } from "@tanstack/react-router";

function Page() {
  return <SignupForm />;
}

const Signup = createLazyRoute("/signup")({
  component: Page,
});

export default Signup;
