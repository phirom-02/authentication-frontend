import { AppBar } from "@/components/layout";
import {
  Outlet,
  createRouter,
  createRootRoute,
  createBrowserHistory,
} from "@tanstack/react-router";

import signupRoutes from "./configs/signup-route";
import HomeRoute from "./configs/home-route";
import ContextsWrapper from "@/context";

export const rootRoute = createRootRoute({
  component: () => (
    <ContextsWrapper>
      <AppBar />
      <Outlet />
    </ContextsWrapper>
  ),
});

const routeTree = rootRoute.addChildren([HomeRoute, ...signupRoutes]);

const router = createRouter({
  history: createBrowserHistory(),
  routeTree,
});

export default router;
