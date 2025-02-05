import { Button } from "@rndm/ui/components"
import { AlertCircle, ArrowRight, CheckCircle, Sparkles, Zap } from "lucide-react"
import Link from "next/link"

import { PUBLIC_URLS } from "@/shared/config"
import { CUSTOMIZATION_STATE, GENERAL_TEMPLATES } from "@/shared/constants"
import { PageDescription, PageHeader, PageTitle, PageWrapper } from "@/shared/ui"
import { EducationBlock } from "@/widgets/ResumeDocument/EducationBlock"
import { ExperienceBlock } from "@/widgets/ResumeDocument/ExperienceBlock"
import { LanguagesBlock } from "@/widgets/ResumeDocument/LanguagesBlock"
import { PersonBlock } from "@/widgets/ResumeDocument/PersonBlock"
import { ProjectsBlock } from "@/widgets/ResumeDocument/ProjectsBlock"
import { SkillsBlock } from "@/widgets/ResumeDocument/SkillsBlock"

export default function AboutPage() {
  return (
    <PageWrapper className="max-w-3xl gap-8 text-pretty text-sm">
      <PageHeader>
        <PageTitle content="My Resumes">How It Works</PageTitle>
        <PageDescription>
          Learn how to create a standout resume with our powerful tools.
        </PageDescription>
      </PageHeader>

      <div className="flex flex-col gap-10">
        <section className="space-y-4">
          <h2 className="flex items-center text-2xl font-bold">
            <Sparkles className="text-primary mr-2 h-6 w-6" />
            RNDM Intelligence: Your AI Resume Assistant
          </h2>
          <p>
            Our resume constructor is powered by RNDM Intelligence, a cutting-edge AI system
            designed to help you create the perfect resume. Here's how it can assist you:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Suggests improvements to your resume content based on industry standards and job
              requirements.
            </li>
            <li>Helps optimize your resume layout for better readability and visual appeal.</li>
            <li>Provides real-time feedback on the strength of your resume sections.</li>
            <li>
              Offers tailored suggestions for skills and keywords relevant to your target job.
            </li>
            <li>
              Assists in crafting compelling bullet points for your work experience and
              achievements.
            </li>
          </ul>
          <div className="bg-secondary relative flex items-start space-x-3 rounded-lg p-4">
            <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
            <p className="text-sm">
              <span className="font-semibold">AI Tip:</span> As you build your resume, look for the
              RNDM Intelligence icon for personalized suggestions and improvements. Our AI is here
              to help you showcase your best self!
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Getting Started</h2>
          <p>
            Our resume constructor is designed to make the process of creating a professional resume
            as smooth and efficient as possible. Follow these steps to get started:
          </p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Click on the "Create New Resume" button in your dashboard.</li>
            <li>Choose a template that suits your style and industry.</li>
            <li>Fill in each section with your personal information and experiences.</li>
            <li>Customize the design to match your preferences.</li>
            <li>Preview your resume and make any necessary adjustments.</li>
            <li>Download or share your completed resume.</li>
          </ol>
          <Link href={PUBLIC_URLS.BUILDER}>
            <Button className="mt-4 duration-500 [&_svg]:hover:translate-x-1.5">
              Create New Resume <ArrowRight className="relative h-4 w-4 transition-all" />
            </Button>
          </Link>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Resume Structure</h2>
          <p>
            A well-structured resume typically includes the following sections. Let's explore each
            one and how to use our constructor to create them effectively.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold">1. Personal Information</h3>
          <p>
            Start with your basic details. Our constructor makes it easy to input and format this
            information.
          </p>
          <div className="bg-secondary relative rounded-lg p-4">
            <PersonBlock customization={CUSTOMIZATION_STATE} person={GENERAL_TEMPLATES.person} />
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <CheckCircle className="mt-0.5 h-5 w-5 text-green-500" />
            <p>
              <span className="font-semibold">Pro Tip:</span> Use a professional email address and
              include links to relevant online profiles.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold">2. Work Experience</h3>
          <p>
            Highlight your professional journey. Our constructor allows you to add multiple
            positions and describe your achievements.
          </p>
          <div className="bg-secondary relative rounded-lg p-4">
            <ExperienceBlock
              customization={CUSTOMIZATION_STATE}
              experience={{
                items: [
                  {
                    id: "1",
                    employer: "TechPro LLC",
                    job: "Project Manager",
                    startDate: "2019-01-01T00:00:00.000Z",
                    endDate: "2023-09-01T00:00:00.000Z",
                    description:
                      "• Organized the development of a CRM system, reducing order processing time by 25%.\n• Implemented an Agile system, which improved on-time project delivery by 40%."
                  }
                ],
                selected: null
              }}
            />
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <CheckCircle className="mt-0.5 h-5 w-5 text-green-500" />
            <p>
              <span className="font-semibold">Pro Tip:</span> Use action verbs and quantify your
              achievements whenever possible.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold">3. Education</h3>
          <p>
            Showcase your academic background. Our tool helps you present your education in a clear,
            professional manner.
          </p>
          <div className="bg-secondary relative rounded-lg p-4">
            <EducationBlock
              customization={CUSTOMIZATION_STATE}
              education={{
                items: [
                  {
                    id: "1",
                    school: "Kharkov National University of Radio Electronics",
                    city: "Kharkiv",
                    country: "Ukraine",
                    degree: "Bachelor of Science in Computer Engineering",
                    startDate: "2022-09-01T00:00:00.000Z",
                    endDate: "2026-06-01T00:00:00.000Z",
                    description:
                      "• Completed a thesis project on the development of a neural network for image recognition.\n• GPA: 3.8/4.0"
                  }
                ],
                selected: null
              }}
            />
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold">4. Skills</h3>
          <p>
            List your key competencies. Our constructor allows you to categorize and rate your
            skills.
          </p>
          <div className="bg-secondary relative rounded-lg p-4">
            <SkillsBlock
              customization={CUSTOMIZATION_STATE}
              skills={{
                items: [
                  { id: "1", skill: "JavaScript", level: "4" },
                  { id: "2", skill: "TypeScript", level: "4" },
                  { id: "3", skill: "React", level: "4" },
                  { id: "4", skill: "Node.js", level: "4" },
                  { id: "5", skill: "Next.js", level: "4" },
                  { id: "6", skill: "Tailwind", level: "4" },
                  { id: "7", skill: "NestJS", level: "4" },
                  { id: "8", skill: "Prisma", level: "4" }
                ],
                selected: null
              }}
            />
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <AlertCircle className="mt-0.5 h-5 w-5 text-yellow-500" />
            <p>
              <span className="font-semibold">Note:</span> Focus on skills that are most relevant to
              your target job.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold">5. Projects</h3>
          <p>
            Highlight your notable projects. Our tool helps you showcase your practical experience
            effectively.
          </p>
          <div className="bg-secondary relative rounded-lg p-4">
            <ProjectsBlock
              customization={CUSTOMIZATION_STATE}
              projects={{
                items: [
                  {
                    id: "1",
                    title: "RNDMCV App",
                    description:
                      "• Developed an innovative platform to enhance job search experiences.\n• Utilized React, Node.js, and MongoDB to create a full-stack application.\n• Implemented user authentication and resume parsing features."
                  }
                ],
                selected: null
              }}
            />
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold">6. Languages</h3>
          <p>
            Specify your language proficiencies. Our constructor allows you to easily add and rate
            your language skills.
          </p>
          <div className="bg-secondary relative rounded-lg p-4">
            <LanguagesBlock
              customization={CUSTOMIZATION_STATE}
              languages={{
                items: [
                  { id: "1", language: "English", level: "4" },
                  { id: "2", language: "Ukrainian", level: "5" },
                  { id: "3", language: "Russian", level: "2" }
                ],
                selected: null
              }}
            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Customization Tips</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Use our color picker to choose a color scheme that matches your personal brand.</li>
            <li>
              Experiment with different fonts to find the perfect balance of readability and style.
            </li>
            <li>Adjust spacing and margins to ensure your resume looks clean and professional.</li>
            <li>Use our preview feature to see how your resume will look to employers.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Final Thoughts</h2>
          <p>
            Remember, a great resume is more than just a list of your experiences - it's a marketing
            tool that showcases your unique value. Use our resume constructor to create a document
            that not only looks professional but also effectively communicates your skills and
            achievements to potential employers.
          </p>
          <p>
            If you need any assistance while using our resume constructor, don't hesitate to reach
            out to our support team. Good luck with your job search!
          </p>
        </section>
      </div>
    </PageWrapper>
  )
}
