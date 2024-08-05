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

export const resumeProjectSchema = z
  .object({
    title: z.string({ message: "Title must have than 1 character" }),
    description: z.string({ message: "Description must have than 1 character" })
  })
  .required()

export const resumeExperienceSchema = z
  .object({
    employer: z.string().min(1, "School must have than 1 character"),
    job: z.string().optional(),
    city: z.string().optional(),
    country: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    description: z.string().optional()
  })
  .required()

export const resumeSkillSchema = z
  .object({
    skill: z.string().min(1, "Skill must have than 1 character"),
    level: z.string().optional(),
    description: z.string().optional()
  })
  .required()
