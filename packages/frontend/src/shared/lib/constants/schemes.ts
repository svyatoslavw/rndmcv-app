import { z } from "zod"

import { ICONS } from "./data"

export const resumePersonSchema = z
  .object({
    name: z.string({ message: "Name must have than 1 character" }).min(1),
    job: z.string().optional(),
    email: z.string({ message: "Email must have than 1 character" }),
    phone: z.string({ message: "Phone must have than 1 character" }),
    address: z.string({ message: "Address must have than 1 character" }),
    date: z.string({ message: "Date must have than 1 character" }).optional(),
    information: z
      .array(
        z.object({
          key: z.string({ message: "Key must have more than 1 character" }),
          text: z.string({ message: "Text must have more than 1 character" }),
          icon: z.enum(Object.keys(ICONS) as [keyof typeof ICONS])
        })
      )
      .max(7),

    links: z.array(
      z.object({
        key: z.string({ message: "Key must have more than 1 character" }),
        text: z.string({ message: "Text must have more than 1 character" }),
        url: z.string({ message: "Link must have more than 1 character" }),
        icon: z.enum(Object.keys(ICONS) as [keyof typeof ICONS])
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

export const resumeLanguageSchema = z
  .object({
    language: z.string().min(1, "Language must have than 1 character"),
    level: z.string().optional(),
    description: z.string().optional()
  })
  .required()

export const resumeCertificateSchema = z
  .object({
    certificate: z.string().min(1, "Language must have than 1 character"),
    information: z.string().optional()
  })
  .required()

export const authConfirmationSchema = z
  .object({
    email: z.string().email("Invalid email"),
    code: z.string().min(6, "Please enter your code")
  })
  .required()

export const authLoginSchema = z
  .object({
    email: z.string(),
    password: z.string().min(8, "Password must have than 8 characters")
  })
  .required()

export const authRegisterSchema = z
  .object({
    email: z.string().min(1, "Enter your email").email("Invalid email"),
    login: z.string().min(1, "Enter your name").max(100),
    password: z
      .string()
      .min(1, "Enter your password")
      .min(8, "Password must have than 8 characters"),
    confirmPassword: z.string().min(1, "Confirmation is required")
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password do not match"
  })
