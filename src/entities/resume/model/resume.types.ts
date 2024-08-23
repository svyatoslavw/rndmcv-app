import type {
  ICertificate,
  IEducation,
  IExperience,
  ILanguage,
  IPerson,
  IPersonInfo,
  IPersonLink,
  IProject,
  ISkill,
  TSectionItem,
  TSectionKey
} from "@/shared/lib"

export interface IInitialStateResume {
  isFirstLoading: boolean
  visibleBlocks: TSectionKey[]
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

export type TUpdateKey = Exclude<
  keyof IInitialStateResume,
  "person" | "isFirstLoading" | "visibleBlocks"
>

export type UpdateContentAction = {
  key: keyof IPerson
  value: string | Date | Array<IPersonInfo> | Array<IPersonLink>
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
  item: TSectionItem
}

export interface UpdateDetailsAction {
  key: TUpdateKey
  field: string
  value: string | Date
}
