import { HowItWorksSection } from "./HowItWorksSection"
import { LearnMoreSection } from "./LearnMoreSection"
import { WelcomeSection } from "./WelcomeSection"
import { JobsTicker } from "@/shared/ui"

const HomePage = () => {
  return (
    <main className="mx-auto">
      <WelcomeSection />
      <JobsTicker />
      <LearnMoreSection />
      <HowItWorksSection />
    </main>
  )
}

export { HomePage }
