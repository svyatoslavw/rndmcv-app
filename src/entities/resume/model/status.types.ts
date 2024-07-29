import type { IInitialStateResume } from "./resume.types"

export interface IInitialStateStatus {
  isEditing: keyof IInitialStateResume | null
  isCreating: keyof IInitialStateResume | null
}

export type TStatusKeys = "isEditing" | "isCreating"

export type UpdateStatusKeyAction = {
  key: TStatusKeys
  content: keyof IInitialStateResume
}
