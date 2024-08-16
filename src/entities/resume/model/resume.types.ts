import type {
  ICertificate,
  IEducation,
  IExperience,
  ILanguage,
  IPerson,
  IProject,
  ISkill
} from "@/shared/lib"

export interface IInitialStateResume {
  isFirstLoading: boolean
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
  languages: {
    items: ILanguage[]
    selected: ILanguage | null
  }
  certificates: {
    items: ICertificate[]
    selected: ICertificate | null
  }
}

export type TUpdateKey = Exclude<keyof IInitialStateResume, "person" | "isFirstLoading">
// To display a new block it should be added to this type
export type TUpdateItem = IEducation | IExperience | IProject | ISkill | ILanguage | ICertificate

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
  item: TUpdateItem
}

export interface UpdateDetailsAction {
  key: TUpdateKey
  field: string
  value: string | Date
}
