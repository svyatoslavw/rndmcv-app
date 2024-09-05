import type { IGeneral } from "./resume.types"

export type TThemeKeys =
  | "theme-green"
  | "theme-blue"
  | "theme-violet"
  | "theme-red"
  | "theme-rose"
  | "theme-black"
  | "theme-orange"

export interface IInitialStateStatus {
  isEditing: keyof IGeneral | null
  isCreating: keyof IGeneral | null
}

export type TStatusKeys = "isEditing" | "isCreating"

export type UpdateStatusKeyAction = {
  key: TStatusKeys
  content: keyof IGeneral
}
