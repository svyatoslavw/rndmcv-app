"use client"

import { Background } from "@rndm/ui/components"
import { useTheme } from "next-themes"

import { JobsTicker } from "@/shared/ui"
import { AiPowered } from "./AiPowered"
import { ButtonFooter } from "./ButtonFooter"
import { CareerToolkit } from "./CareerToolkit"
import { FeaturesSection } from "./FeaturesSection"
import { Integration } from "./Integration"
import { StepsSection } from "./StepsSection"
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
    <main className="mx-auto">
      <Background
        className="pointer-events-none z-[-1]"
        dots={effects.dots as any}
        gradient={effects.gradient as any}
        mask={effects.mask as any}
      />
      <WelcomeSection />
      <JobsTicker />
      <div className="space-y-16">
        <FeaturesSection />
        <StepsSection />
        <WhyChooseUs />
        <Integration />
        <CareerToolkit />
        <AiPowered />
        <ButtonFooter />
      </div>
    </main>
  )
}

export { HomePage }
