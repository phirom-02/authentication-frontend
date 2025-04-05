import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "..";
import { redirectTo } from "../utils";

export const SignupIndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "signup",
  loader: (ctx) => redirectTo(ctx, "/signup", "step-1"),
});

export const SingupStep1Route = createRoute({
  getParentRoute: () => SignupIndexRoute,
  path: "step-1",
}).lazy(() => import("@/features/signup/pages/signup-step-1").then((d) => d.default));

const signupRoutes = [SignupIndexRoute, SingupStep1Route];

export default signupRoutes;
