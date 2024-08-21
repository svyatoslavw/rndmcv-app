//TODO: To display a new block it should be added to this type

export type TSectionKey =
  | "person"
  | "education"
  | "experience"
  | "projects"
  | "skills"
  | "languages"
  | "certificates"

export type TSectionItem = IEducation | IExperience | IProject | ISkill | ILanguage | ICertificate

export interface IPersonInformation {
  date?: string
  nationality?: string
  passport?: string
  militaryService?: string
  drivingLicense?: string
  gender?: string
}

export interface IPerson {
  name: string
  job: string
  email: string
  phone: string
  address: string
  date: string
  information: IPersonInformation
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
