import { IGeneral } from "./resume-slice.types"

export interface IInitialStateStatus {
  isEditing: keyof IGeneral | null
  isCreating: keyof IGeneral | null
}

export type TStatusKeys = "isEditing" | "isCreating"

export type UpdateStatusKeyAction = {
  key: TStatusKeys
  content: keyof IGeneral
}
