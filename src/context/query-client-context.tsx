import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
  MutationCache,
} from "@tanstack/react-query";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (err, query) => {
      // TODO: handle error
      console.error(err, query);
      throw new Error("query error");
    },
  }),
  mutationCache: new MutationCache({
    onError: (err, _variables, _context, mutation) => {
      // TODO: handle error
      console.error(err, mutation);
      throw new Error("mutation error");
    },
  }),
  defaultOptions: {
    queries: {
      retry: false,
      gcTime: 0,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
});

export default function QueryClientContext({ children }: Readonly<Props>) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
