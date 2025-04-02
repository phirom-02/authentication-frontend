import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RhfTextFieldProps } from "./types";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

export default function RhfTextfield({
  name,
  label,
  description,
  ...other
}: Readonly<RhfTextFieldProps>) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...other} {...field} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
