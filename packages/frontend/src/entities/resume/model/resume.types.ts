import type {
  ICertificate,
  IEducation,
  IExperience,
  ILanguage,
  IPerson,
  IProject,
  ISkill,
  TSectionItem,
  TSectionKey
} from "@/shared/lib/types"

export interface IInitialStateResume {
  isFirstLoading: boolean
  isNameTyped: boolean
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
  "person" | "isFirstLoading" | "isNameTyped" | "visibleBlocks"
>

export type UpdateContentAction = {
  values: Partial<IPerson>
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
  values: Partial<TSectionItem>
}

export interface DeleteItemAction {
  key: TUpdateKey
  id: string
}
