import Image from "next/image"

interface Step {
  title: string
  image: {
    light: string
    dark: string
  }
  description: string
  codeExample?: Record<string, any>
}

const STEPS: Step[] = [
  {
    title: "Input Your Information",
    image: {
      light: "/images/img-1.webp",
      dark: "/images/img-1-dark.webp"
    },
    codeExample: {
      name: "John Doe",
      job: "Software Engineer"
    },
    description:
      "Enter your personal details, work experience, education, and skills using an easy-to-use interface."
  },
  {
    title: "Customize your resume",
    image: {
      light: "/images/img-2.webp",
      dark: "/images/img-2-dark.webp"
    },
    codeExample: {
      accentColor: "red",
      backgroundColor: "blue",
      variant: "border"
    },
    description:
      "Customize your resume with different styles, fonts, and layouts to match your personality."
  },
  {
    title: "Edit with RNDM Intelligence",
    image: {
      light: "/images/img-3.webp",
      dark: "/images/img-3-dark.webp"
    },
    description: "With RNDM Intelligence, you can easily improve your resume."
  },
  {
    title: "Finalize and Share",
    image: {
      light: "/images/img-1.webp",
      dark: "/images/img-1-dark.webp"
    },
    description:
      "Review your resume, make final adjustments, and share it with employers or download it."
  }
]

const StepNumber = ({ number }: { number: number }) => (
  <div className="flex flex-col items-center">
    <div className="bg-foreground text-background flex aspect-square size-8 items-center justify-center rounded-full lg:size-12">
      {number}
    </div>
    <div className="h-full w-px bg-gradient-to-b from-black via-transparent to-black dark:from-white dark:via-transparent dark:to-white" />
  </div>
)

const StepContent = ({ step }: { step: Step }) => (
  <div className="relative flex flex-col gap-2 pb-14">
    <h5 className="text-xl font-bold">{step.title}</h5>
    <p className="mb-3 text-sm">{step.description}</p>
    <div className="relative">
      {step.codeExample && (
        <pre className="border-input bg-background absolute -top-2 right-2 whitespace-pre-wrap rounded-lg border px-0.5 text-[8px] font-semibold sm:text-xs lg:-right-6 lg:top-10 lg:px-2 lg:text-sm">
          <code>{JSON.stringify(step.codeExample, null, 2)}</code>
        </pre>
      )}
      <Image
        alt={step.title}
        className="block rounded-lg dark:hidden"
        draggable={false}
        height={486}
        loading="lazy"
        src={step.image.light}
        width={864}
      />
      <Image
        alt={step.title}
        className="hidden rounded-lg dark:block"
        draggable={false}
        height={486}
        loading="lazy"
        src={step.image.dark}
        width={864}
      />
    </div>
  </div>
)

const StepItem = ({ step, index }: { step: Step; index: number }) => (
  <div className="flex gap-3 lg:gap-10">
    <StepNumber number={index + 1} />
    <StepContent step={step} />
  </div>
)

const StepsSection = () => (
  <section className="flex w-full flex-col items-center py-12 md:py-20 lg:py-24">
    {STEPS.map((step, index) => (
      <StepItem key={step.title} index={index} step={step} />
    ))}
  </section>
)

export { StepsSection }
