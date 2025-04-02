import { FormProviderProps } from "./types";
import { FormProvider as RhfFormProvider } from "react-hook-form";

export default function FormProvider<T extends Record<string, unknown>>({
  methods,
  onSubmit,
  children,
}: Readonly<FormProviderProps<T>>) {
  return (
    <RhfFormProvider {...methods}>
      <form className="h-full" onSubmit={onSubmit}>
        {children}
      </form>
    </RhfFormProvider>
  );
}
