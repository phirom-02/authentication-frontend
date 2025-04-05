import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "..";

// Home route
const HomeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "home",
}).lazy(() => import("@/features/home").then((d) => d.default));

export default HomeRoute;
