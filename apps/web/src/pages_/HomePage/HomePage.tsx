"use client"

import { Background, Button } from "@rndm/ui/components"
import { useTheme } from "next-themes"

import { PUBLIC_URLS } from "@/shared/config"
import { JobsTicker, Logotype } from "@/shared/ui"
import Link from "next/link"
import { AiPowered } from "./AiPowered"
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
      </div>
      <div className="flex flex-col items-center justify-center gap-3 py-16">
        <Logotype />
        <h5 className="text-muted-foreground">Create resume with RNDMCV</h5>

        <div className="flex gap-2">
          <Button>Create resume</Button>
          <Button variant="outline">
            <Link href={PUBLIC_URLS.ABOUT}>About Project</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}

export { HomePage }
