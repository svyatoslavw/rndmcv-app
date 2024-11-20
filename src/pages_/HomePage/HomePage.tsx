import { FeaturesSection } from "./FeaturesSection"
import { StepsSection } from "./StepsSection"
import { WelcomeSection } from "./WelcomeSection"

import { JobsTicker } from "@/shared/ui"

const HomePage = () => {
  return (
    <main className="mx-auto">
      <WelcomeSection />
      <JobsTicker />
      <FeaturesSection />
      <StepsSection />
    </main>
  )
}

export { HomePage }
