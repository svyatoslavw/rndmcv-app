import { BrainIcon } from "lucide-react"

import { cn } from "@/shared/lib/utils"
import { ICustomization, ResumeSection, Skill } from "@/shared/types"
import { DocumentHeading } from "./DocumentHeading"
import { DocumentSection } from "./DocumentSection"

interface SkillsBlockProps {
  customization: ICustomization
  skills: ResumeSection<Skill>
  isCard?: boolean
  isLeft?: boolean
}

const SkillsBlock = ({ customization, isCard, skills, isLeft }: SkillsBlockProps) => {
  const { spacing, sections, colors } = customization
  const currentSide = isLeft ? "left" : "right"

  const getSkillDotColor = () => {
    const { mode, isAccent, side } = colors
    const shouldUseAccent = (mode === "basic" || mode === "border" || isLeft) && isAccent.dots
    return shouldUseAccent ? side[currentSide].accent : side[currentSide].text
  }

  const renderSkillDots = (level: string) =>
    Array.from({ length: 5 }).map((_, index) => (
      <span
        key={index}
        className={cn("opacity-30", `text-[${getSkillDotColor()}]`, {
          "opacity-100": index < +level
        })}
      >
        {sections.skills.icon}
      </span>
    ))

  const renderSkillItem = (item: Skill) => (
    <div className={cn({ "text-[5px]": isCard })}>
      {item.level && sections.skills.showLevel && renderSkillDots(item.level)}
    </div>
  )

  return (
    <div>
      <DocumentHeading Icon={BrainIcon} customization={customization} isCard={isCard}>
        Skills
      </DocumentHeading>
      <DocumentSection
        className="flex flex-wrap gap-2"
        fontSize={spacing.fontSize}
        heading="skill"
        headingClassName={cn({ "text-[5px]": isCard })}
        items={skills.items}
        render={renderSkillItem}
      />
    </div>
  )
}

export { SkillsBlock }
