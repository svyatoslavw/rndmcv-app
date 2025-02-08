import { BriefcaseBusinessIcon } from "lucide-react"

import { cn, formatLocation, formatSectionDate } from "@/shared/lib/utils"
import { CustomizationEntity, ExperienceEntity, ResumeSection } from "@/shared/types"
import { DocumentHeading } from "./DocumentHeading"
import { DocumentSection } from "./DocumentSection"

interface ExperienceBlockBlockProps {
  customization: CustomizationEntity
  experience: ResumeSection<ExperienceEntity>
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

  const renderDescription = (description: string) => (
    <p className={getCommonTextClasses()}>
      {description.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))}
    </p>
  )

  const renderExperienceItem = (item: ExperienceEntity) => (
    <div className="flex flex-col gap-1">
      {sections.experience.showLocation && (item.city || item.country) && (
        <h5>{formatLocation(item.city!, item.country!)}</h5>
      )}

      {sections.experience.showDates && item.startDate && item.endDate && (
        <p className={getDateClasses()}>
          {formatSectionDate(item.startDate)} | {formatSectionDate(item.endDate)}
        </p>
      )}

      {sections.experience.showDescription &&
        item.description &&
        renderDescription(item.description)}
    </div>
  )

  return (
    <div>
      <DocumentHeading Icon={BriefcaseBusinessIcon} customization={customization} isCard={isCard}>
        Experience
      </DocumentHeading>
      <DocumentSection
        className="flex flex-col gap-2"
        fontSize={spacing.fontSize}
        heading="employer"
        headingClassName={getCommonTextClasses()}
        items={experience.items}
        render={renderExperienceItem}
      />
    </div>
  )
}

export { ExperienceBlock }
