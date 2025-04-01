import { cn } from "@/lib/utils";
import React from "react";

function Stack({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col h-full w-full", className)} {...props} />
  );
}

export { Stack };
