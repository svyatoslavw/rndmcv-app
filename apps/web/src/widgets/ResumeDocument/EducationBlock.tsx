import { GraduationCapIcon } from "lucide-react"

import { cn, formatSectionDate } from "@/shared/lib/utils"
import { Education, ICustomization, ResumeSection } from "@/shared/types"
import { DocumentHeading } from "./DocumentHeading"
import { DocumentSection } from "./DocumentSection"

interface EducationBlockProps {
  customization: ICustomization
  education: ResumeSection<Education>
  isCard?: boolean
  isLeft?: boolean
}

const EducationBlock = ({ customization, isCard, isLeft, education }: EducationBlockProps) => {
  const { spacing, sections, colors } = customization

  const getDateClasses = () =>
    cn({
      "text-[5px]": isCard,
      [`text-[${isLeft ? colors.side.left.accent : colors.side.right.accent}]`]:
        colors.isAccent.dates
    })

  const getCommonTextClasses = () =>
    cn({
      "text-[5px]": isCard
    })

  const getContainerClasses = () => cn("mb-2 flex flex-col gap-1", { "gap-[2px]": isCard })

  const renderEducationItem = (item: Education) => (
    <div className={getContainerClasses()}>
      <p className={getCommonTextClasses()}>{item.country}</p>
      {sections.education.showDates && item.startDate && item.endDate && (
        <p className={getDateClasses()}>
          {formatSectionDate(item.startDate)} | {formatSectionDate(item.endDate)}
        </p>
      )}
      <p className={getCommonTextClasses()}>{item.description}</p>
    </div>
  )

  return (
    <div>
      <DocumentHeading Icon={GraduationCapIcon} customization={customization} isCard={isCard}>
        Education
      </DocumentHeading>
      <DocumentSection
        fontSize={spacing.fontSize}
        heading="school"
        headingClassName={getCommonTextClasses()}
        items={education.items}
        render={renderEducationItem}
      />
    </div>
  )
}

export { EducationBlock }
