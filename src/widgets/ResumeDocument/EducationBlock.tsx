import { GraduationCapIcon } from "lucide-react"

import { cn, formatSectionDate } from "@/shared/lib/utils"
import { Education, ICustomization, ResumeSection } from "@/shared/types"
import { ResumeDocumentHeading } from "@/widgets/ResumeDocument/ResumeDocumentHeading"
import { ResumeDocumentSection } from "@/widgets/ResumeDocument/ResumeDocumentSection"

interface EducationBlockProps {
  customization: ICustomization
  education: ResumeSection<Education>
  isCard?: boolean
  isLeft?: boolean
}

const EducationBlock = ({ customization, isCard, isLeft, education }: EducationBlockProps) => {
  const { spacing, sections, colors } = customization

  return (
    <div>
      <ResumeDocumentHeading Icon={GraduationCapIcon} customization={customization} isCard={isCard}>
        Education
      </ResumeDocumentHeading>
      <ResumeDocumentSection
        fontSize={spacing.fontSize}
        heading="school"
        headingClassName={cn({
          "text-[5px]": isCard
        })}
        items={education.items}
        render={(item) => (
          <div className={cn("mb-2 flex flex-col gap-1", { "gap-[2px]": isCard })}>
            <p className={cn({ "text-[5px]": isCard })}>{item.country}</p>
            {sections.education.showDates && item.startDate && item.endDate && (
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
            <p className={cn({ "text-[5px]": isCard })}>{item.description}</p>
          </div>
        )}
      />
    </div>
  )
}

export { EducationBlock }
