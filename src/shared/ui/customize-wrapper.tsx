import { cn } from "../lib/utils"

interface SectionWrapperProps {
  children: React.ReactNode
  heading: string
}

interface CustomizeSectionWrapperProps {
  children: React.ReactNode
  className?: string
  heading: string
}

const SectionWrapper = ({ children, heading }: SectionWrapperProps) => {
  return (
    <div className="mt-5 flex flex-col gap-4 rounded-lg bg-background p-8 shadow-lg dark:shadow-neutral-900">
      <h2 className="text-2xl font-bold">{heading}</h2>
      <div className="flex flex-col gap-8">{children}</div>
    </div>
  )
}

const CustomizeSectionWrapper = ({
  children,
  className,
  heading
}: CustomizeSectionWrapperProps) => {
  return (
    <div>
      <h3 className="mb-2 font-semibold">{heading}</h3>
      <div className={cn("flex flex-wrap gap-2", className)}>{children}</div>
    </div>
  )
}

export { CustomizeSectionWrapper, SectionWrapper }
