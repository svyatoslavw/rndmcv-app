import { IconName } from "lucide-react/dynamic"

export type TypeIconName = IconName

export type SectionKey = "person" | "education" | "experience" | "projects" | "skills" | "languages"

export type SectionKeyWithoutPerson = Exclude<SectionKey, "person">

type CommonSection = {
  id: string
  description?: string
}

export type SectionItem = Education | Experience | Project | Skill | Language

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

export interface Person {
  name: string
  job: string
  email: string
  phone: string
  address: string
  information: PersonInfo[]
  links: PersonLink[]
}

export interface Project extends CommonSection {
  title: string
  url?: string
}

export interface Education extends CommonSection {
  school: string
  degree?: string
  city?: string
  country?: string
  startDate?: string
  endDate?: string
}

export interface Experience extends CommonSection {
  employer: string
  job?: string
  city?: string
  country?: string
  startDate?: string
  endDate?: string
}

export interface Skill extends CommonSection {
  skill: string
  level: string
}

export interface Language extends CommonSection {
  language: string
  level: string
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
