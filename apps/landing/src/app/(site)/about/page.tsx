import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About"
}

export default function About() {
  return (
    <div className="prose container mx-auto px-4 md:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <span className="text-primary bg-primary/10 mb-4 inline-block rounded-full px-3 py-1 text-sm font-medium">
            About Us
          </span>
        </div>

        <div className="space-y-8">
          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              RNDMCV is created to redefine the how the world approaches career development. We're
              not just building another resume tool - we're creating an AI-powered companion for
              every stage of your career journey.
            </p>
          </section>

          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">Why We Exist</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              In a world where three-quarters of resumes vanish into algorithmic voids, we’re
              rewriting the rules. Traditional tools fixate on fonts and margins, but RNDMCV goes
              deeper. We combine cutting-edge AI that deciphers Applicant Tracking Systems with
              battle-tested strategies from hiring managers, all while harnessing the collective
              wisdom of a global community of contributors.
            </p>
          </section>

          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">Our Evolution</h2>
            <p className="text-muted-foreground leading-relaxed">
              What began in 2022 as an open-source rebellion against clunky resume builders has
              evolved into something far greater. By 2023, we integrated large language models to
              help users articulate their achievements with clarity. Now, in 2024, we’re pioneering
              dynamic career profiles that analyze skill gaps and map growth
              trajectories—transforming static documents into living career blueprints.
            </p>
          </section>

          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">Core Beliefs</h2>
            <p className="text-muted-foreground leading-relaxed">
              Transparency isn’t optional—it’s the foundation. We reject hidden algorithms and
              paywalled features, opting instead for tools that empower through clarity. Career
              development isn’t a privilege; it’s a fundamental right, whether you’re a first-time
              job seeker or a seasoned executive. And in an era of constant change, we believe
              resumes should evolve as dynamically as the careers they represent.
            </p>
          </section>

          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">What’s Next</h2>
            <p className="text-muted-foreground leading-relaxed">
              The horizon holds more than polished PDFs. We’re developing AI-driven interview
              simulations that prepare you for real conversations, real-time job market dashboards
              that spotlight emerging opportunities, and intelligent systems that connect skills to
              mentorships. This isn’t just about getting hired—it’s about building careers that
              matter.
            </p>
          </section>

          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">Join Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              Every career breakthrough begins with a spark. Whether you’re crafting your next
              opportunity, contributing code to our open-source ecosystem, or simply sharing
              insights—you’re part of a movement making professional growth accessible to all.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
