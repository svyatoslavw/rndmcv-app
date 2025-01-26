import { Toaster } from "react-hot-toast"

const ToasterProvider = () => {
  return (
    <Toaster
      toastOptions={{
        iconTheme: {
          primary: "#8b5cf6",
          secondary: "white"
        },
        className: "text-sm"
      }}
    />
  )
}

export { ToasterProvider }
