import { PUBLIC_URLS } from "@/shared/config"
import { PageHeader, PageTitle, PageWrapper } from "@/shared/ui"

export default function VisionPage() {
  return (
    <PageWrapper>
      <PageHeader>
        <PageTitle>About Project</PageTitle>
      </PageHeader>

      <div className="flex flex-col gap-12">
        <section className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Our Vision</h3>
          <p className="">
            RNDMCV is created to redefine the how the world approaches career development. We're not
            just building another resume tool - we're creating an AI-powered companion for every
            stage of your career journey.
          </p>
          <p>
            This project is born from frustration with outdated, impersonal job-search tools.
            Drawing on our expertise in open-source development, AI innovation, and HR technology,
            we’ve created a platform that bridges the gap between human potential and technological
            possibility.
          </p>
        </section>
        <section className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Why We Exist</h3>
          <p className="">
            In a world where three-quarters of resumes vanish into algorithmic voids, we’re
            rewriting the rules. Traditional tools fixate on fonts and margins, but RNDMCV goes
            deeper. We combine cutting-edge AI that deciphers Applicant Tracking Systems with
            battle-tested strategies from hiring managers, all while harnessing the collective
            wisdom of a global community of contributors.
          </p>
        </section>
        <section className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Our Evolution</h3>
          <p>
            What began in 2022 as an open-source rebellion against clunky resume builders has
            evolved into something far greater. By 2023, we integrated large language models to help
            users articulate their achievements with clarity. Now, in 2024, we’re pioneering dynamic
            career profiles that analyze skill gaps and map growth trajectories—transforming static
            documents into living career blueprints.
          </p>
        </section>
        <section className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Core Beliefs</h3>
          <p>
            Transparency isn’t optional—it’s the foundation. We reject hidden algorithms and
            paywalled features, opting instead for tools that empower through clarity. Career
            development isn’t a privilege; it’s a fundamental right, whether you’re a first-time job
            seeker or a seasoned executive. And in an era of constant change, we believe resumes
            should evolve as dynamically as the careers they represent.
          </p>
        </section>
        <section className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">What’s Next</h3>
          <p>
            The horizon holds more than polished PDFs. We’re developing AI-driven interview
            simulations that prepare you for real conversations, real-time job market dashboards
            that spotlight emerging opportunities, and intelligent systems that connect skills to
            mentorships. This isn’t just about getting hired—it’s about building careers that
            matter.
          </p>
        </section>
        <section className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Join Us</h3>
          <p>
            Every career breakthrough begins with a spark. Whether you’re crafting your next
            opportunity, contributing code to our open-source ecosystem, or simply sharing
            insights—you’re part of a movement making professional growth accessible to all.
          </p>
        </section>
        <p>
          Start Building Free |{" "}
          <a href={PUBLIC_URLS.GITHUB} className="text-primary underline" target="_blank">
            Contribute on GitHub
          </a>
        </p>
      </div>
    </PageWrapper>
  )
}
