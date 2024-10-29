import { FeaturesSection } from "./FeaturesSection"
import { HowItWorksSection } from "./HowItWorksSection"
import { WelcomeSection } from "./WelcomeSection"

import { JobsTicker } from "@/shared/ui"

const HomePage = () => {
  return (
    <main className="mx-auto">
      <WelcomeSection />
      <JobsTicker />
      <FeaturesSection />
      <HowItWorksSection />
    </main>
  )
}

export { HomePage }
