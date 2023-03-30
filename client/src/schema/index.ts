import { z } from "zod";

export const inputSchema = z.object({
  input: z
    .string({
      required_error: "Input required",
    })
    .includes("jorocca"),
});

export type InputBodyType = z.infer<typeof inputSchema>;
