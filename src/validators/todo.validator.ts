import { z } from "zod";

export const createTodoSchema = z.object({
    date: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date format",
    }),
    text: z.string().min(1, "Text is required"),
});

export const updateTodoSchema = z.object({
    text: z.string().min(1, "Text is required"),
    completed: z.boolean(),
});