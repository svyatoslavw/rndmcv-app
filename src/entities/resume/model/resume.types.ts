import type { IEducation, IExperience, IPerson, IProject, ISkill } from "@/shared/lib"

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
  skills: {
    items: ISkill[]
    selected: ISkill | null
  }
}

export type TUpdateKey = Exclude<keyof IInitialStateResume, "person">

export type TUpdateItem = IEducation | IExperience | IProject | ISkill

export type UpdateContentAction = {
  key: keyof IPerson
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

export interface UpdateItemAction {
  key: TUpdateKey
  item: IEducation | IExperience | IProject | ISkill
}

export interface UpdateDetailsAction {
  key: TUpdateKey
  field: string
  value: string | Date
}
