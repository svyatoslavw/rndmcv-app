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
  language: "en" | "ua"
}
