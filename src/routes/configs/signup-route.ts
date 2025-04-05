import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "..";
import { redirectTo } from "../utils";

export const SignupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "signup",
  loader: (ctx) => redirectTo(ctx, "/signup", "step-1"),
});

const getParentRoute = () => SignupRoute;

export const SingupStep1Route = createRoute({
  getParentRoute,
  path: "step-1",
}).lazy(() =>
  import("@/features/signup/pages/signup-step-1").then((d) => d.default)
);

export const SignupStep2Route = createRoute({
  getParentRoute,
  path: "step-2",
}).lazy(() =>
  import("@/features/signup/pages/signup-step-2").then((d) => d.default)
);

const signupRoutes = [SignupRoute, SingupStep1Route, SignupStep2Route];

export default signupRoutes;
