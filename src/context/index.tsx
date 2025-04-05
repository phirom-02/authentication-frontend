import React from "react";
import QueryClientContext from "./query-client-context";
import ErrorBoundaryContext from "./error-boundary-context";

type Props = {
  children: React.ReactNode;
};

export default function ContextsWrapper({ children }: Readonly<Props>) {
  return (
    <QueryClientContext>
      <ErrorBoundaryContext>{children}</ErrorBoundaryContext>
    </QueryClientContext>
  );
}
