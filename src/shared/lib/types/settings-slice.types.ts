export type TypeThemeKey =
  | "theme-green"
  | "theme-blue"
  | "theme-violet"
  | "theme-red"
  | "theme-rose"
  | "theme-black"
  | "theme-orange"

export interface IInitialStateSettings {
  theme: TypeThemeKey
  autosave: {
    isEnabled: boolean
    interval: number
  }
}
