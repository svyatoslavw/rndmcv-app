import { LanguagesIcon } from "lucide-react"

import { cn } from "@/shared/lib/utils"
import { ICustomization, Language, ResumeSection } from "@/shared/types"
import { DocumentHeading } from "./DocumentHeading"
import { DocumentSection } from "./DocumentSection"

interface LanguagesBlockProps {
  customization: ICustomization
  languages: ResumeSection<Language>
  isCard?: boolean
  isLeft?: boolean
}

const LanguagesBlock = ({ customization, isCard, languages, isLeft }: LanguagesBlockProps) => {
  const { spacing, sections, colors } = customization
  const currentSide = isLeft ? "left" : "right"

  const getDotColor = () => {
    const { mode, isAccent, side } = colors
    const shouldUseAccent = (mode === "basic" || mode === "border" || isLeft) && isAccent.dots
    return shouldUseAccent ? side[currentSide].accent : side[currentSide].text
  }

  const renderDots = (level: string) =>
    Array.from({ length: 5 }).map((_, index) => (
      <span
        key={index}
        className={cn("opacity-30", `text-[${getDotColor()}]`, { "opacity-100": index < +level })}
      >
        {sections.languages.icon}
      </span>
    ))

  const renderLanguageItem = (item: Language) => (
    <div className={cn({ "text-[5px]": isCard })}>
      {item.level && sections.languages.showLevel && renderDots(item.level)}
    </div>
  )

  return (
    <div>
      <DocumentHeading Icon={LanguagesIcon} customization={customization} isCard={isCard}>
        Languages
      </DocumentHeading>
      <DocumentSection
        className="flex gap-2"
        fontSize={spacing.fontSize}
        heading="language"
        headingClassName={cn("text-sm", { "text-[5px]": isCard })}
        items={languages.items}
        render={renderLanguageItem}
      />
    </div>
  )
}

export { LanguagesBlock }
