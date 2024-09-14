export type TThemeKeys =
  | "theme-green"
  | "theme-blue"
  | "theme-violet"
  | "theme-red"
  | "theme-rose"
  | "theme-black"
  | "theme-orange"

export interface IInitialStateSettings {
  theme: TThemeKeys
  autosave: {
    isEnabled: boolean
    interval: number
  }
}
