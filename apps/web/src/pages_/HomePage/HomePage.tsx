"use client"

import { Background, JobsTicker } from "@rndm/ui/components"
import { useTheme } from "next-themes"

import { FeaturesSection } from "./FeaturesSection"
import { StepsSection } from "./StepsSection"
import { WelcomeSection } from "./WelcomeSection"

const HomePage = () => {
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
      color: theme === "dark" ? "#696969" : "#828282"
    },
    lines: {
      display: false
    }
  }
  return (
    <main className="mx-auto">
      <Background
        className="pointer-events-none z-[-1]"
        dots={effects.dots as any}
        gradient={effects.gradient as any}
        mask={effects.mask as any}
      />
      <WelcomeSection />
      <JobsTicker />
      <FeaturesSection />
      <StepsSection />
    </main>
  )
}

export { HomePage }
