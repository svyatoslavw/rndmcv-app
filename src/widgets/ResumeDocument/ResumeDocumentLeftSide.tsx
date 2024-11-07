import {
  BrainIcon,
  BriefcaseBusinessIcon,
  FolderOpenIcon,
  GraduationCapIcon,
  LanguagesIcon
} from "lucide-react"

import { ResumeDocumentHeading } from "./ResumeDocumentHeading"
import { ResumeDocumentPerson } from "./ResumeDocumentPerson"
import { ResumeDocumentSection } from "./ResumeDocumentSection"
import { ResumeDocumentSide } from "./ResumeDocumentSide"

import { cn, formatSectionDate } from "@/shared/lib/utils"
import { ICustomization, IGeneral } from "@/shared/types"

interface ResumSideProps {
  variant: "left" | "right"
  isCard?: boolean
  customization: ICustomization
  general: IGeneral
}

const ResumeDocumentLeftSide = ({ isCard, general, variant, customization }: ResumSideProps) => {
  const { projects, skills, education, experience, languages, visibleBlocks: vb } = general

  const { colors, heading, spacing, layout, sections } = customization

  const formatLocation = (city: string, country: string) => {
    if (city && country) return `${city}, ${country}`

    return city || country || ""
  }

  return (
    <ResumeDocumentSide
      colors={colors}
      isCard={isCard}
      layout={layout}
      spacing={spacing}
      variant={variant}
    >
      <div>
        {layout.columns.left &&
          layout.columns.left.map((block) => (
            <div key={block} className={isCard ? "mb-1" : "mb-4"}>
              {block === "person" && (
                <ResumeDocumentPerson
                  colors={colors}
                  fontSize={spacing.fontSize}
                  isCard={isCard}
                  job={customization.job}
                  name={customization.name}
                  person={general.person}
                />
              )}
              {block === "education" && vb.includes("education") && (
                <div>
                  <ResumeDocumentHeading
                    Icon={GraduationCapIcon}
                    accent={colors.side.left.accent}
                    fontSize={spacing.fontSize}
                    icons={heading.icons}
                    isAccent={colors.isAccent}
                    isCard={isCard}
                    size={heading.size}
                    style={heading.style}
                    textColor={colors.side.left.text}
                  >
                    Education
                  </ResumeDocumentHeading>
                  <ResumeDocumentSection
                    fontSize={spacing.fontSize}
                    heading="school"
                    headingClassName={cn(`text-[calc(4px+${spacing.fontSize}px)]`, {
                      "text-[5px]": isCard
                    })}
                    items={education.items}
                    render={(item) => (
                      <div className={cn("mb-2", { "gap-[2px]": isCard })}>
                        {sections.education.showLocation && (
                          <p className={cn({ "text-[5px]": isCard })}>{item.country}</p>
                        )}
                        {sections.education.showDates && item.startDate && item.endDate && (
                          <p className={cn({ "text-[5px]": isCard })}>
                            {formatSectionDate(item.startDate)} | {""}
                            {formatSectionDate(item.endDate)}
                          </p>
                        )}
                        <p className={cn({ "text-[5px]": isCard })}>{item.description}</p>
                      </div>
                    )}
                  />
                </div>
              )}
              {block === "experience" && vb.includes("experience") && (
                <div>
                  <ResumeDocumentHeading
                    Icon={BriefcaseBusinessIcon}
                    accent={colors.side.left.accent}
                    fontSize={spacing.fontSize}
                    icons={heading.icons}
                    isAccent={colors.isAccent}
                    isCard={isCard}
                    size={heading.size}
                    style={heading.style}
                    textColor={colors.side.left.text}
                  >
                    Experience
                  </ResumeDocumentHeading>
                  <ResumeDocumentSection
                    className="flex flex-col gap-2"
                    fontSize={spacing.fontSize}
                    heading="employer"
                    headingClassName={cn("text-sm", { "text-[5px]": isCard })}
                    items={experience.items}
                    render={(item) => (
                      <div className="flex flex-col gap-1">
                        {sections.experience.showLocation && (item.city || item.country) && (
                          <h5>{formatLocation(item.city!, item.country!)}</h5>
                        )}
                        {sections.experience.showDates && item.startDate && item.endDate && (
                          <p className={cn({ "text-[5px]": isCard })}>
                            {formatSectionDate(item.startDate)} | {""}
                            {formatSectionDate(item.endDate)}
                          </p>
                        )}
                        {sections.experience.showDescription && (
                          <p className={cn("text-xs", { "text-[5px]": isCard })}>
                            {item.description}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </div>
              )}
              {block === "projects" && vb.includes("projects") && (
                <div>
                  <ResumeDocumentHeading
                    Icon={FolderOpenIcon}
                    accent={colors.side.left.accent}
                    fontSize={spacing.fontSize}
                    icons={heading.icons}
                    isAccent={colors.isAccent}
                    isCard={isCard}
                    size={heading.size}
                    style={heading.style}
                    textColor={colors.side.left.text}
                  >
                    Projects
                  </ResumeDocumentHeading>
                  <ResumeDocumentSection
                    fontSize={spacing.fontSize}
                    heading="title"
                    headingClassName={cn({ "text-[5px]": isCard })}
                    items={projects.items}
                    render={(item) => (
                      <div className="mb-2">
                        {item.description && (
                          <p className={cn({ "text-[5px]": isCard })}>{item.description}</p>
                        )}
                      </div>
                    )}
                  />
                </div>
              )}
              {block === "skills" && vb.includes("skills") && (
                <div>
                  <ResumeDocumentHeading
                    Icon={BrainIcon}
                    accent={colors.side.left.accent}
                    fontSize={spacing.fontSize}
                    icons={heading.icons}
                    isAccent={colors.isAccent}
                    isCard={isCard}
                    size={heading.size}
                    style={heading.style}
                    textColor={colors.side.left.text}
                  >
                    Skills
                  </ResumeDocumentHeading>
                  <ResumeDocumentSection
                    className="flex gap-2"
                    fontSize={spacing.fontSize}
                    heading="skill"
                    headingClassName={cn("text-sm", { "text-[5px]": isCard })}
                    items={skills.items}
                    render={(item) => (
                      <div className={cn({ "text-[5px]": isCard })}>
                        {item.level &&
                          sections.skills.showLevel &&
                          Array.from({ length: 5 }).map((_, index) => (
                            <span
                              key={index}
                              className={cn("opacity-30", `text-[${colors.side.left.accent}]`, {
                                "opacity-100": index < +item.level
                              })}
                            >
                              {sections.skills.icon}
                            </span>
                          ))}
                      </div>
                    )}
                  />
                </div>
              )}
              {block === "languages" && vb.includes("languages") && (
                <div>
                  <ResumeDocumentHeading
                    Icon={LanguagesIcon}
                    accent={colors.side.left.accent}
                    fontSize={spacing.fontSize}
                    icons={heading.icons}
                    isAccent={colors.isAccent}
                    isCard={isCard}
                    size={heading.size}
                    style={heading.style}
                    textColor={colors.side.left.text}
                  >
                    Languages
                  </ResumeDocumentHeading>
                  <ResumeDocumentSection
                    className="flex flex-wrap gap-2"
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
                              className={cn("opacity-30", `text-[${colors.side.left.accent}]`, {
                                "opacity-100": index < +item.level
                              })}
                            >
                              {sections.languages.icon}
                            </span>
                          ))}
                      </div>
                    )}
                  />
                </div>
              )}
            </div>
          ))}
      </div>
    </ResumeDocumentSide>
  )
}

export { ResumeDocumentLeftSide }
