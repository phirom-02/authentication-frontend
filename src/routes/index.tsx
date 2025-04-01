import {
  createBrowserHistory,
  createRootRouteWithContext,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";

// import { QueryClient } from "@tanstack/react-query";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface RouterContext {
  // queryClient: QueryClient;
}

const rootRoute = createRootRouteWithContext<RouterContext>()({
  component: () => <Outlet />,
});

const getParentRoute = () => rootRoute;

// Home route
const HomeRoute = createRoute({
  getParentRoute,
  path: "/home",
}).lazy(() => import("@/features/home").then((d) => d.default));

// Register route
const SignupRoute = createRoute({
  getParentRoute,
  path: "/signup",
}).lazy(() => import("@/features/auth/pages/signup").then((d) => d.default));

const routeTree = rootRoute.addChildren([SignupRoute, HomeRoute]);

const router = createRouter({
  history: createBrowserHistory(),

  routeTree,

  // Apply any context here
  context: {
    // queryClient,
  },
});

export default router;
