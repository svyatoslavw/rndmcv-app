import { HowItWorksSection } from "./HowItWorksSection"
import { LearnMoreSection } from "./LearnMoreSection"
import { WelcomeSection } from "./WelcomeSection"

const HomePage = () => {
  return (
    <main className="mx-auto">
      <WelcomeSection />
      <LearnMoreSection />
      <HowItWorksSection />
    </main>
  )
}

export { HomePage }
