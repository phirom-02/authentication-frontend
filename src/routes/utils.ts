import { LoaderFnContext, redirect } from "@tanstack/react-router";

export const redirectTo = (ctx: unknown, from: string, to: string) => {
  if ((ctx as LoaderFnContext).location.pathname === from) {
    throw redirect({ replace: true, to });
  }
};
