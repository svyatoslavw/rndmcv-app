"use client"

import React from "react"

import { getFromLS, saveToLS } from "../utils"

import { TThemeKeys } from "@/entities/resume"

interface IThemeContext {
  theme: TThemeKeys
  changeTheme: (theme: TThemeKeys) => void
}

export const useTheme = () => React.useContext(ThemeContext)

const ThemeContext = React.createContext<IThemeContext>({
  theme: "theme-violet",
  changeTheme: () => {}
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<TThemeKeys>(
    (getFromLS("theme") as TThemeKeys) || "theme-violet"
  )

  const changeTheme = (theme: TThemeKeys) => {
    setTheme(theme)
    saveToLS("theme", theme)
  }

  const value = React.useMemo(() => ({ theme, changeTheme }), [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
