import { Toaster } from "react-hot-toast"

import { useAppSelector } from "./store"

import { TOAST_COLORS } from "@/shared/lib/constants/toast.constant"

const ToasterProvider = () => {
  const theme = useAppSelector((state) => state.settings.theme)

  return (
    <Toaster
      toastOptions={{
        iconTheme: {
          primary: TOAST_COLORS[theme ?? "theme-blue"],
          secondary: "white"
        },
        className: "text-sm"
      }}
    />
  )
}

export { ToasterProvider }
