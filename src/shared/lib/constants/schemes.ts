import { z } from "zod"

export const resumeEducationSchema = z
  .object({
    school: z.string().min(1, "School must have than 1 character"),
    degree: z.string().optional(),
    city: z.string().optional(),
    country: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    description: z.string().optional()
  })
  .required()
