import { z } from "zod";

export const getDefaults = <Schema extends z.ZodEffects<z.AnyZodObject>>(
  schema: Schema
) => {
  console.log(schema);
  return Object.fromEntries(
    Object.entries(schema.innerType()).map(([key, value]) => {
      if (value instanceof z.ZodDefault)
        return [key, value._def.defaultValue()];
      return [key, undefined];
    })
  );
};
