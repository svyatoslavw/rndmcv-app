import { IGeneral } from "./resume-slice.types"

export interface IInitialStateStatus {
  isEditing: keyof IGeneral | null
  isCreating: keyof IGeneral | null
}

export type TypeStatusKey = "isEditing" | "isCreating"

export type UpdateStatusKeyAction = {
  key: TypeStatusKey
  content: keyof IGeneral
}
