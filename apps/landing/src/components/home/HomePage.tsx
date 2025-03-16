"use client"

import { Background } from "@rndm/ui/components"
import { useTheme } from "next-themes"

import { ButtonFooter } from "./ButtonFooter"
import { CareerToolkit } from "./CareerToolkit"
import { FeaturesSection } from "./FeaturesSection"
import { JobsTicker } from "./JobsTicker"
import { WelcomeSection } from "./WelcomeSection"
import { WhyChooseUs } from "./WhyChooseUs"

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
    <main>
      <Background
        className="pointer-events-none z-[-1]"
        dots={effects.dots as any}
        gradient={effects.gradient as any}
        mask={effects.mask as any}
      />
      <WelcomeSection />
      <JobsTicker />
      <div className="mx-auto max-w-5xl space-y-16 px-4 lg:px-0">
        <FeaturesSection />
        <WhyChooseUs />
        <CareerToolkit />
        <ButtonFooter />
      </div>
    </main>
  )
}

export { HomePage }
