import React from "react";

export type TextFieldProps = React.ComponentProps<"input"> &
  Partial<{
    label: string;
    description: string;
  }>;

export type RhfTextFieldProps = TextFieldProps & {
  name: string;
};
