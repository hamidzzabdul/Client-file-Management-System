import z from "zod";

export const CreateClientSchema = z.object({
  name: z.string().min(2, "Business name must be at least 2 characters long"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(10, "Please enter a valid phone number"),
  businessType: z
    .string()
    .max(200)
    .min(2, "Business type must be at least 2 characters long"),
  address: z
    .string()
    .max(200)
    .min(5, "Physical address must be at least 5 characters long"),
  city: z.string().min(2, "City must be at least 2 characters long"),
  role: z.enum(["client", "admin"]).optional(),
  password: z
    .string()
    .max(1000)
    .min(8, "Password must be at least 8 characters long"),
  description: z.string(),
});
