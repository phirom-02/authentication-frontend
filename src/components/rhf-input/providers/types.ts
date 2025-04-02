import React from "react";
import { UseFormReturn } from "react-hook-form";

export type FormProviderProps<T extends Record<string, unknown>> = {
  methods: UseFormReturn<T>;
  onSubmit?: VoidFunction;
  children?: React.ReactNode;
};
