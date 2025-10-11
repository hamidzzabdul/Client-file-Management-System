import z from "zod";

export const uploadSchema = z.object({
  title: z.string().min(1, "File title is required"),
  description: z.string().optional(),
  file: z
    .any()
    .refine((file) => file instanceof File, {
      message: "File is required",
    })
    .refine(
      (file) =>
        [
          "application/pdf",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
          "application/msword", // .doc
          "application/vnd.ms-excel", // .xls
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
        ].includes(file?.type),
      { message: "Only PDF, Word or Excel files are allowed" }
    )
    .refine((file) => file?.size <= 10 * 1024 * 1024, {
      message: "File must be less than 10 MB",
    }),
});
