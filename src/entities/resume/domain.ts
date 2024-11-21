import {
  DynamicIcon,
  Education,
  Experience,
  Language,
  Project,
  Skill,
  TypedOmit
} from "@/shared/types"

export type SectionKey = "person" | "education" | "experience" | "projects" | "skills" | "languages"

export type SectionKeyWithoutPerson = Exclude<SectionKey, "person">

type CommonEntity = {
  id: string
  description?: string
}

export type SectionItem = Education | Experience | Project | Skill | Language

export interface PersonLink {
  key: string
  text: string
  url: string
  icon: DynamicIcon
}

export interface PersonInfo {
  key: string
  text: string
  icon: DynamicIcon
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

export interface ProjectEntity extends CommonEntity {
  title: string
  url?: string
}

export interface EducationEntity extends CommonEntity {
  school: string
  degree?: string
  city?: string
  country?: string
  startDate?: string
  endDate?: string
}

export interface ExperienceEntity extends CommonEntity {
  employer: string
  job?: string
  city?: string
  country?: string
  startDate?: string
  endDate?: string
}

export interface SkillEntity extends CommonEntity {
  skill: string
  level: string
}

export interface LanguageEntity extends CommonEntity {
  language: string
  level: string
}

export interface AboutEntity extends CommonEntity {}

export interface Response {
  id: string
  general: string
  customization: string
}

export type CreateResume = TypedOmit<Response, "id">

export type UpdateResume = Response
