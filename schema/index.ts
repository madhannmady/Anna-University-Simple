import * as z from "zod";

// Updated schema to handle dynamic semester fields
export const formSchema = z.object({
  sem: z.record(
    z.string().min(1, {
      message: "Value must be greater than 0",
    })
  ),
});
