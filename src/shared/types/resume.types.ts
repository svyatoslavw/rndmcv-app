import { LucideIcon } from "lucide-react"
import dynamicIconImports from "lucide-react/dynamicIconImports"

export type TypeIconName = keyof typeof dynamicIconImports

export type SectionKey = "person" | "education" | "experience" | "projects" | "skills" | "languages"

export type SectionKeyWithoutPerson = Exclude<SectionKey, "person">

type CommonSection = {
  id: string
  description?: string
}

export type SectionItem = IEducation | IExperience | IProject | ISkill | ILanguage

export interface PersonLink {
  key: string
  text: string
  url: string
  icon: TypeIconName
}

export interface PersonInfo {
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
  information: PersonInfo[]
  links: PersonLink[]
}

export interface IProject extends CommonSection {
  title: string
  url?: string
}

export interface IEducation extends CommonSection {
  school: string
  degree?: string
  city?: string
  country?: string
  startDate?: string
  endDate?: string
}

export interface IExperience extends CommonSection {
  employer: string
  job?: string
  city?: string
  country?: string
  startDate?: string
  endDate?: string
}

export interface ISkill extends CommonSection {
  skill: string
  level: string
}

export interface ILanguage extends CommonSection {
  language: string
  level: string
}

export interface IContentSection {
  content: SectionKey
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
