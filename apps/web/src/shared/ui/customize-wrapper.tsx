import { Card, CardContent, CardHeader, CardTitle } from "@rndm/ui/components"
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
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{heading}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-8">{children}</div>
      </CardContent>
    </Card>
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
