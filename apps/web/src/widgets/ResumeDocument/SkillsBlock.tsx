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

  const isBasic = colors.mode === "basic"
  const isBorder = colors.mode === "border"

  const currentSide = isLeft ? "left" : "right"

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
        render={(item) => (
          <div className={cn({ "text-[5px]": isCard })}>
            {item.level &&
              sections.skills.showLevel &&
              Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={cn(
                    "opacity-30",
                    `text-[${(isBasic || isBorder || isLeft) && colors.isAccent.dots ? colors.side[currentSide].accent : colors.side[currentSide].text}]`,
                    { "opacity-100": index < +item.level }
                  )}
                >
                  {sections.skills.icon}
                </span>
              ))}
          </div>
        )}
      />
    </div>
  )
}

export { SkillsBlock }

