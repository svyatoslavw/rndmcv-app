"use client"

import { useTheme } from "next-themes"
import { Montserrat } from "next/font/google"

import { useSetResumes } from "@/entities/resume"
import { cn } from "@/shared/lib/utils"
import { Background } from "@/shared/ui/icons/background"
import { Footer, Header } from "@/widgets"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const SiteProvider = ({ children }: { children: React.ReactNode }) => {
  useSetResumes()
  const { theme } = useTheme()

  const effects = {
    mask: "cursor",
    gradient: {
      display: false,
      opacity: 0.4
    },
    dots: {
      display: true,
      opacity: 0.7,
      size: "24",
      color: theme === "dark" ? "#424242" : "#999999"
    },
    lines: {
      display: false
    }
  }

  return (
    <div className={cn("min-h-screen w-full bg-background", montserrat.className)}>
      <div className="w-full">
        <Background
          dots={effects.dots as any}
          gradient={effects.gradient as any}
          lines={effects.lines as any}
          mask={effects.mask as any}
        />
      </div>
      <Header />
      <div className="mx-auto max-w-6xl">{children}</div>
      <Footer />
    </div>
  )
}

export { SiteProvider }
