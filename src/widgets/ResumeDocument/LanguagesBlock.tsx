import { LanguagesIcon } from "lucide-react"

import { cn } from "@/shared/lib/utils"
import { ICustomization, Language, ResumeSection } from "@/shared/types"
import { DocumentHeading } from "@/widgets/ResumeDocument/DocumentHeading"
import { DocumentSection } from "@/widgets/ResumeDocument/DocumentSection"

interface LanguagesBlockProps {
  customization: ICustomization
  languages: ResumeSection<Language>
  isCard?: boolean
  isLeft?: boolean
}

const LanguagesBlock = ({ customization, isCard, languages, isLeft }: LanguagesBlockProps) => {
  const { spacing, sections, colors } = customization

  const isBasic = colors.mode === "basic"
  const isBorder = colors.mode === "border"

  const currentSide = isLeft ? "left" : "right"

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
        render={(item) => (
          <div className={cn({ "text-[5px]": isCard })}>
            {item.level &&
              sections.languages.showLevel &&
              Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={cn(
                    "opacity-30",
                    `text-[${(isBasic || isBorder || isLeft) && colors.isAccent.dots ? colors.side[currentSide].accent : colors.side[currentSide].text}]`,
                    { "opacity-100": index < +item.level }
                  )}
                >
                  {sections.languages.icon}
                </span>
              ))}
          </div>
        )}
      />
    </div>
  )
}

export { LanguagesBlock }
