//TODO: To display a new block it should be added to this type
import { LucideIcon } from "lucide-react"
import dynamicIconImports from "lucide-react/dynamicIconImports"

export type TypeIconName = keyof typeof dynamicIconImports

export type TypeSectionKey =
  | "person"
  | "education"
  | "experience"
  | "projects"
  | "skills"
  | "languages"
  | "certificates"

export type TypeSectionKeyWithoutPerson = Exclude<TypeSectionKey, "person">

export type TypeSectionItem =
  | IEducation
  | IExperience
  | IProject
  | ISkill
  | ILanguage
  | ICertificate

export interface IPersonLink {
  key: string
  text: string
  url: string
  icon: TypeIconName
}

export interface IPersonInfo {
  key: string
  text: string
  icon: TypeIconName
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
  url?: string
  description?: string
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
  content: TypeSectionKey
  icon: LucideIcon
  description: string
}

export interface ICreateResume {
  general: string
  customization: string
}

export interface IUpdateResume {
  id: string
  general: string
  customization: string
}
