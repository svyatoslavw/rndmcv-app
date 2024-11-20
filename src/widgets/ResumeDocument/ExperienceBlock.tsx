import { BriefcaseBusinessIcon } from "lucide-react"

import { cn, formatLocation, formatSectionDate } from "@/shared/lib/utils"
import { ICustomization, IExperience, ResumeSection } from "@/shared/types"
import { ResumeDocumentHeading } from "@/widgets/ResumeDocument/ResumeDocumentHeading"
import { ResumeDocumentSection } from "@/widgets/ResumeDocument/ResumeDocumentSection"

interface ExperienceBlockBlockProps {
  customization: ICustomization
  experience: ResumeSection<IExperience>
  isCard?: boolean
  isLeft?: boolean
}

const ExperienceBlock = ({
  customization,
  experience,
  isCard,
  isLeft
}: ExperienceBlockBlockProps) => {
  const { spacing, sections, colors } = customization

  return (
    <div>
      <ResumeDocumentHeading
        Icon={BriefcaseBusinessIcon}
        customization={customization}
        isCard={isCard}
      >
        Experience
      </ResumeDocumentHeading>
      <ResumeDocumentSection
        className="flex flex-col gap-2"
        fontSize={spacing.fontSize}
        heading="employer"
        headingClassName={cn({ "text-[5px]": isCard })}
        items={experience.items}
        render={(item) => (
          <div className="flex flex-col gap-1">
            {sections.experience.showLocation && (item.city || item.country) && (
              <h5>{formatLocation(item.city!, item.country!)}</h5>
            )}
            {sections.experience.showDates && item.startDate && item.endDate && (
              <p
                className={cn({
                  "text-[5px]": isCard,
                  [`${isLeft ? `text-[${colors.side.left.accent}]` : `text-[${colors.side.right.accent}]`}`]:
                    colors.isAccent.dates
                })}
              >
                {formatSectionDate(item.startDate)} | {""}
                {formatSectionDate(item.endDate)}
              </p>
            )}
            {sections.experience.showDescription && item.description && (
              <p className={cn({ "text-[5px]": isCard })}>
                {item.description.split("\n").map((line) => (
                  <>
                    {line}
                    <br />
                  </>
                ))}
              </p>
            )}
          </div>
        )}
      />
    </div>
  )
}

export { ExperienceBlock }
