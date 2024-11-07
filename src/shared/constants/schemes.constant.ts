import dynamicIconImports from "lucide-react/dynamicIconImports"
import { z } from "zod"

import { TypeIconName } from "../types"

export const resumePersonSchema = z
  .object({
    name: z.string({ message: "Name must have than 1 character" }).min(1),
    job: z.string().optional(),
    email: z.string({ message: "Email must have than 1 character" }),
    phone: z.string({ message: "Phone must have than 1 character" }).optional(),
    address: z.string({ message: "Address must have than 1 character" }).optional(),
    date: z.string({ message: "Date must have than 1 character" }).optional(),
    information: z
      .array(
        z.object({
          key: z.string({ message: "Key must have more than 1 character" }),
          text: z.string({ message: "Text must have more than 1 character" }),
          icon: z.enum(Object.keys(dynamicIconImports) as [TypeIconName])
        })
      )
      .max(7),

    links: z.array(
      z.object({
        key: z.string({ message: "Key must have more than 1 character" }),
        text: z.string({ message: "Text must have more than 1 character" }),
        url: z.string({ message: "Link must have more than 1 character" }),
        icon: z.enum(Object.keys(dynamicIconImports) as [TypeIconName])
        // icon: z.custom<TypeIconSvg>(
        //   (value) => typeof value === "function" && value.prototype instanceof React.Component,
        //   { message: "Icon must be a valid React component" }
        // )
      })
    )
  })
  .required()

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
    title: z
      .string({ message: "Title must have than 1 character" })
      .min(1, "Title must have than 1 character"),
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

export const resumeLanguageSchema = z
  .object({
    language: z.string().min(1, "Language must have than 1 character"),
    level: z.string().optional(),
    description: z.string().optional()
  })
  .required()
