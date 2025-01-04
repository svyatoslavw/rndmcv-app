import {
  BotIcon,
  EarthIcon,
  FileJson2Icon,
  PaintbrushIcon,
  RocketIcon,
  SparklesIcon
} from "lucide-react"

const FEATURES = [
  {
    Icon: RocketIcon,
    title: "Launch in minutes",
    description:
      "Create your professional resume in just a few clicks. Get started immediately with user-friendly templates."
  },
  {
    Icon: PaintbrushIcon,
    title: "Full Customization",
    description:
      "Easily tailor your resume layout, colors, fonts, and sections to reflect your unique style and career goals."
  },
  {
    Icon: BotIcon,
    title: "ATS-Friendly",
    description:
      "Craft resumes optimized for Applicant Tracking Systems, increasing your chances of getting noticed by recruiters."
  },
  {
    Icon: EarthIcon,
    title: "Multilingual",
    description: "Showcase your resume in multiple languages with seamless localization options."
  },
  {
    Icon: SparklesIcon,
    title: "AI Assistance",
    description:
      "Leverage built-in AI to generate personalized resume content and suggest improvements."
  },
  {
    Icon: FileJson2Icon,
    title: "Powered by Modern Technologies",
    description:
      "Built with Next.js, TypeScript, and TailwindCSS for superior performance and a sleek user experience."
  }
]

const FeaturesSection = () => (
  <section className="mx-auto" id="learnmore">
    <div>
      <h2 className="mb-10 text-2xl font-bold tracking-tighter sm:text-3xl">Features</h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <div key={feature.title} className="flex flex-col gap-2">
            <feature.Icon size={24} />
            <h5 className="font-semibold">{feature.title}</h5>
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export { FeaturesSection }

{
  /* <section className="mx-auto" id="learnmore">
    <div className="container px-6 md:px-8">
      <div className="mx-auto flex w-full max-w-[85%] items-center justify-between gap-5">
        <div className="flex w-full max-w-[30%] flex-col gap-5">
          <div>
            <h2 className="mb-10 text-2xl font-bold tracking-tighter sm:text-5xl">Features</h2>
            <div className="mb-2 flex items-center gap-2">
              <TimerIcon className="h-8 w-8 text-primary" />
              <h5 className="text-lg font-semibold">Quick & Efficient</h5>
            </div>
            <p className="text-sm">
              Create your resume quickly with streamlined tools that save you time.
            </p>
          </div>
          <div>
            <div className="mb-2 flex items-center gap-2">
              <PaletteIcon className="h-8 w-8 text-primary" />
              <h5 className="text-lg font-semibold">Customizable Templates</h5>
            </div>
            <p className="text-sm">
              Choose from a variety of professional templates to match your style and industry.
            </p>
          </div>
          <div>
            <div className="mb-2 flex items-center gap-2">
              <Share2Icon className="h-8 w-8 text-primary" />
              <h5 className="text-lg font-semibold">Easy Sharing</h5>
            </div>
            <p className="text-sm">
              Share your resume directly with employers or download in multiple formats.
            </p>
          </div>
        </div>
        <div>
          <Image
            alt="resume-builder"
            className="h-[580px] w-[800px] rounded-lg object-cover shadow-lg shadow-violet-600/40 dark:hidden"
            height={1080}
            src="/images/app-2.png"
            width={1920}
          />
          <Image
            alt="resume-builder"
            className="hidden h-[580px] w-[800px] rounded-lg object-cover shadow-lg dark:block dark:shadow-violet-600/40"
            height={1080}
            src="/images/app-2-dark.png"
            width={1920}
          />
        </div>
      </div>
    </div>
  </section> */
}
