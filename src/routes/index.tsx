import { AppBar, AppContainer } from "@/components/layout";
import {
  createBrowserHistory,
  createRootRouteWithContext,
  createRouter,
  Outlet,
} from "@tanstack/react-router";

import signupRoutes from "./configs/signupRoute";
import HomeRoute from "./configs/homeRoute";

// import { QueryClient } from "@tanstack/react-query";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface RouterContext {
  // queryClient: QueryClient;
}

export const rootRoute = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <AppContainer>
      <AppBar />
      <Outlet />
    </AppContainer>
  ),
});

const routeTree = rootRoute.addChildren([HomeRoute, ...signupRoutes]);

const router = createRouter({
  history: createBrowserHistory(),

  routeTree,

  // Apply any context here
  context: {
    // queryClient,
  },
});

export default router;
