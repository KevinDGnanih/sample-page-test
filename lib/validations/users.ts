import * as z from "zod";

export const UserValidation = z.object({
    email: z
    .string()
    .email({ message: "Invalid email address" }),
    password: z
    .string()
    .min(5, { message: "Minimum 5 characters." })
    .max(20, { message: "Maximun 20 characters." }),
    confirmPassword: z
    .string()
    .min(5, { message: "Minimum 5 characters." })
    .max(20, { message: "Maximun 20 characters." }),
});