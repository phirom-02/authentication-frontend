import React from "react";
import { UseFormReturn } from "react-hook-form";

export type FormProviderProps<TFieldValues extends Record<string, unknown>> = {
  methods: UseFormReturn<TFieldValues>;
  onSubmit?: VoidFunction;
  children?: React.ReactNode;
};
