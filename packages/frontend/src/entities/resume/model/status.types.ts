import type { IInitialStateResume } from "./resume.types"

export type TThemeKeys =
  | "theme-green"
  | "theme-blue"
  | "theme-violet"
  | "theme-red"
  | "theme-rose"
  | "theme-black"
  | "theme-orange"

export interface IInitialStateStatus {
  isEditing: keyof IInitialStateResume | null
  isCreating: keyof IInitialStateResume | null
  theme: TThemeKeys
}

export type TStatusKeys = "isEditing" | "isCreating"

export type UpdateStatusKeyAction = {
  key: TStatusKeys
  content: keyof IInitialStateResume
}
