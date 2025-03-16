import { Tabs, TabsContent, TabsList, TabsTrigger } from "@rndm/ui/components"
import { cn } from "@rndm/ui/lib/utils"
import Image from "next/image"

interface Step {
  title: string
  image?: {
    light: string
    dark: string
  }
}

const STEPS: Step[] = [
  {
    title: "Input Your Information",
    image: {
      light: "/images/img-1.webp",
      dark: "/images/img-1-dark.webp"
    }
  },
  {
    title: "Customize your resume",
    image: {
      light: "/images/img-2.webp",
      dark: "/images/img-2-dark.webp"
    }
  },
  {
    title: "Edit with RNDM Intelligence",
    image: {
      light: "/images/img-3.webp",
      dark: "/images/img-3-dark.webp"
    }
  },
  {
    title: "Finalize and Share",
    image: {
      light: "/images/img-1.webp",
      dark: "/images/img-1-dark.webp"
    }
  }
]

const StepContent = ({ step }: { step: Step }) => (
  <div className="flex flex-col gap-4">
    {step.image && (
      <div className="relative overflow-hidden rounded-lg">
        <Image
          alt={step.title}
          className="block dark:hidden"
          height={1080}
          width={1920}
          src={step.image.light}
        />
        <Image
          alt={step.title}
          className="hidden dark:block"
          height={1080}
          width={1920}
          src={step.image.dark}
        />
      </div>
    )}
  </div>
)

const StepsSection = () => (
  <Tabs defaultValue="step-0" className="w-full">
    <TabsList className="relative flex flex-wrap justify-center gap-2 bg-transparent p-0">
      {STEPS.map((step, index) => (
        <TabsTrigger
          key={index}
          value={`step-${index}`}
          className={cn(
            "flex h-auto flex-col items-start justify-start gap-2",
            "data-[state=active]:bg-muted"
          )}
        >
          <h3 className="text-sm font-semibold">{step.title}</h3>
        </TabsTrigger>
      ))}
    </TabsList>

    {STEPS.map((step, index) => (
      <TabsContent key={index} value={`step-${index}`} className="mt-6">
        <StepContent step={step} />
      </TabsContent>
    ))}
  </Tabs>
)

export { StepsSection }
