import { SignupForm } from "@/features/auth/components/signup";
import { createLazyRoute } from "@tanstack/react-router";

function index() {
  return <SignupForm />;
}

const Signup = createLazyRoute("/signup")({
  component: index,
});

export default Signup;
