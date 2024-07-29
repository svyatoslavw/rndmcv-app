import type { IEducation, IExperience, IPerson, IProject } from "@/shared/lib"

export interface IInitialStateResume {
  person: IPerson
  projects: {
    items: IProject[]
    selected: IProject | null
  }
  education: {
    items: IEducation[]
    selected: IEducation | null
  }
  experience: {
    items: IExperience[]
    selected: IExperience | null
  }
}

export type TUpdateKey = Exclude<keyof IInitialStateResume, "person">

export type UpdateContentAction = {
  key: keyof IPerson
  value: string | Date
}

export type UpdateProjectAction = {
  key: keyof IProject
  value: string
}

export type UpdateEducationAction = {
  key: keyof IEducation
  value: string | Date
}

export type UpdateExperienceAction = {
  key: keyof IExperience
  value: string | Date
}

export type SelectItemAction = {
  key: TUpdateKey
  id: string
}

export type ReorderItemsAction = {
  key: TUpdateKey
  from: number
  to: number
}
