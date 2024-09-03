//TODO: To display a new block it should be added to this type
import { LucideIcon } from "lucide-react"

import { TUpdateKey } from "@/entities/resume"
import { ICONS } from "@/shared/lib/constants"

export type TSectionKey =
  | "person"
  | "education"
  | "experience"
  | "projects"
  | "skills"
  | "languages"
  | "certificates"

export type TSectionItem = IEducation | IExperience | IProject | ISkill | ILanguage | ICertificate

export interface IPersonLink {
  key: string
  text: string
  url: string
  icon: keyof typeof ICONS
}

export interface IPersonInfo {
  key: string
  text: string
  icon: keyof typeof ICONS
}

export interface IPerson {
  name: string
  job: string
  email: string
  phone: string
  address: string
  date: string
  information: IPersonInfo[]
  links: IPersonLink[]
}

export interface IProject {
  id: string
  title: string
  description: string
  url: string
}

export interface IEducation {
  id: string
  school: string
  degree?: string
  city?: string
  country?: string
  startDate?: string
  endDate?: string
  description?: string
}

export interface IExperience {
  id: string
  employer: string
  job?: string
  city?: string
  country?: string
  startDate?: string
  endDate?: string
  description?: string
}

export interface ISkill {
  id: string
  skill: string
  level: string
  description?: string
}

export interface ICertificate {
  id: string
  certificate: string
  information?: string
}

export interface ILanguage {
  id: string
  language: string
  level: string
  description?: string
}

export interface IContentSection {
  content: TUpdateKey
  icon: LucideIcon
  description: string
}
