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
              RNDMCV is created to redefine how the world approaches career development. We're
              building more than just another resume tool - we're crafting a platform that empowers
              users at every stage of their career journey.
            </p>
          </section>

          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">Why We Exist</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              In a world where three-quarters of resumes vanish into automated systems, we’re
              rewriting the rules. Traditional tools focus on appearance, but RNDMCV goes deeper,
              combining practical strategies from hiring managers with insights from a global
              community.
            </p>
          </section>

          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">Our Evolution</h2>
            <p className="text-muted-foreground leading-relaxed">
              What began in 2022 as an open-source project against outdated resume builders has
              grown into something greater. By 2023, we enhanced our platform to help users craft
              clear, concise resumes. Now, in 2024, we’re developing dynamic career profiles that
              reflect ongoing professional growth.
            </p>
          </section>

          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">Core Beliefs</h2>
            <p className="text-muted-foreground leading-relaxed">
              Transparency is our foundation. We reject hidden processes and focus on tools that
              empower through clarity. Career development isn’t a privilege—it’s a right, whether
              you’re a first-time job seeker or a seasoned professional. We believe that resumes
              should evolve along with the careers they represent.
            </p>
          </section>

          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">What’s Next</h2>
            <p className="text-muted-foreground leading-relaxed">
              The future holds more than polished PDFs. We’re exploring ways to create meaningful
              tools that highlight emerging opportunities and connect users to real career
              resources. This isn’t just about landing a job—it’s about building fulfilling careers.
            </p>
          </section>

          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">Join Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              Every career breakthrough starts with a step. Whether you’re creating your next
              opportunity, contributing to our open-source ecosystem, or sharing insights, you’re
              part of a movement making professional growth accessible to everyone.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
