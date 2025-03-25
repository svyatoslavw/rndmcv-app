import { BrainIcon } from "lucide-react"

import { cn } from "@/shared/lib/utils"
import type { CustomizationEntity, ResumeSection, SkillEntity, SkillLayout } from "@/shared/types"
import { DocumentHeading } from "./DocumentHeading"
import { DocumentSection } from "./DocumentSection"

interface SkillsBlockProps {
  customization: CustomizationEntity
  skills: ResumeSection<SkillEntity>
  isCard?: boolean
  isLeft?: boolean
}

const GRID_COLUMN_CLASSES: Record<string, string> = {
  "1-column": "grid-cols-1",
  "2-columns": "grid-cols-2",
  "3-columns": "grid-cols-3",
  "4-columns": "grid-cols-4"
}

const LEVEL_TEXT_MAP: Record<number, string> = {
  1: " - Beginner",
  2: " - Intermediate",
  3: " - Proficient",
  4: " - Expert",
  5: "- Master"
}

const SkillDots = ({
  level,
  icon,
  color
}: {
  level: number
  icon: React.ReactNode
  color: string
}) => (
  <>
    {Array.from({ length: 5 }).map((_, index) => (
      <span
        key={index}
        className={cn("opacity-30", `text-[${color}]`, {
          "opacity-100": index < +level
        })}
      >
        {icon}
      </span>
    ))}
  </>
)

const SkillBar = ({ level, color }: { level: number; color: string }) => {
  const width = `${level * 20}%`
  return (
    <div className="relative h-1 w-28">
      <div className={cn("h-1 w-full", { [`bg-[${color}]/10`]: true })} />
      <div className={cn("absolute left-0 top-0 h-1", `bg-[${color}]`, `w-[${width}%]`)} />
    </div>
  )
}

const SkillsBlock = ({ customization, isCard, skills, isLeft }: SkillsBlockProps) => {
  const { spacing, sections, colors } = customization
  const currentSide = isLeft ? "left" : "right"

  const { value, variant } = sections.skills.layout

  const getSkillDotColor = () => {
    const { mode, isAccent, side } = colors
    const shouldUseAccent = (mode === "basic" || mode === "border" || isLeft) && isAccent.dots
    return shouldUseAccent ? side[currentSide].accent : side[currentSide].text
  }

  const getSkillsContainerClasses = (layout: SkillLayout) => {
    const { variant, value } = layout
    return cn("flex flex-wrap gap-x-2", {
      [`grid ${GRID_COLUMN_CLASSES[value]}`]: variant === "grid",
      "gap-x-4": variant === "compact" && (value === "Bullet" || value === "Comma"),
      "gap-x-1": isCard,
      "flex-col": variant === "compact" && value === "New line"
    })
  }

  const getItemClassName = () =>
    cn("mb-0 flex flex-col", {
      "relative rounded-full after:absolute after:-right-[11px] after:top-1.5 after:size-1 after:rounded-full after:bg-black after:content-[''] last:after:hidden dark:after:bg-white":
        variant === "compact" && value === "Bullet" && !isCard,
      "relative rounded-full after:absolute after:-right-[3.04px] after:top-[2px] after:size-[2px] after:rounded-full after:bg-black after:content-[''] last:after:hidden dark:after:bg-white":
        variant === "compact" && value === "Bullet" && isCard,
      "relative after:absolute after:-right-[5px] after:bottom-0 after:content-[',']":
        variant === "compact" && value === "Comma",
      "flex w-full flex-row flex-nowrap items-center justify-between":
        variant === "level" && (value === "Icon" || value === "Bar"),
      "flex w-full flex-row flex-nowrap items-center gap-x-1.5":
        variant === "level" && value === "Text"
    })

  const renderSkillItem = (item: SkillEntity) => {
    if (!item.level || !sections.skills.showLevel) return null

    if (variant === "level") {
      switch (value) {
        case "Icon":
          return (
            <SkillDots level={+item.level} icon={sections.skills.icon} color={getSkillDotColor()} />
          )
        case "Bar":
          return (
            <SkillBar level={+item.level} color={customization.colors.side[currentSide].text} />
          )
        case "Text":
          return (
            <span
              className={cn({
                [`text-[calc(5px+${spacing.fontSize}px)]`]: value === "Text" && !isCard
              })}
            >
              {LEVEL_TEXT_MAP[+item.level] || ""}
            </span>
          )
      }
    }

    return null
  }

  return (
    <div>
      <DocumentHeading Icon={BrainIcon} customization={customization} isCard={isCard}>
        Skills
      </DocumentHeading>
      <DocumentSection
        className={getItemClassName()}
        containerClassName={getSkillsContainerClasses(customization.sections.skills.layout)}
        fontSize={spacing.fontSize}
        heading="skill"
        contentClassName={cn({ "text-[5px]": isCard })}
        headingClassName={cn({ "text-[5px]": isCard })}
        items={skills.items}
        render={renderSkillItem}
      />
    </div>
  )
}

export { SkillsBlock }
