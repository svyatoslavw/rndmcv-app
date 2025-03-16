import { AspectRatio } from "@rndm/ui/components"

import { cn, uuid } from "@/shared/lib/utils"
import { CustomizationEntity, GeneralEntity, SectionKey } from "@/shared/types"
import { useMemo } from "react"
import { DocumentPage } from "./DocumentPage"
import { DocumentSide } from "./DocumentSide"
import { EducationBlock } from "./EducationBlock"
import { ExperienceBlock } from "./ExperienceBlock"
import { LanguagesBlock } from "./LanguagesBlock"
import { PersonBlock } from "./PersonBlock"
import { ProjectsBlock } from "./ProjectsBlock"
import { SkillsBlock } from "./SkillsBlock"

interface ResumeDocumentProps {
  className?: string
  isCard?: boolean
  width?: number
  height?: number
  general: GeneralEntity
  customization: CustomizationEntity
}

const ResumeDocument = ({
  customization,
  general,
  className,
  isCard,
  width = 820,
  height = 1125
}: ResumeDocumentProps) => {
  const { colors, spacing, layout, font } = customization

  const { visibleBlocks: vb } = general

  const isInclude = (block: SectionKey) => vb.includes(block)

  const renderBlock = (block: SectionKey, isLeft: boolean) => {
    switch (block) {
      case "person":
        return (
          <PersonBlock
            isLeft={isLeft}
            customization={customization}
            isCard={isCard}
            person={general.person}
          />
        )
      case "education":
        return (
          <EducationBlock
            isLeft={isLeft}
            customization={customization}
            education={general.education}
            isCard={isCard}
          />
        )
      case "experience":
        return (
          <ExperienceBlock
            isLeft={isLeft}
            customization={customization}
            experience={general.experience}
            isCard={isCard}
          />
        )
      case "projects":
        return (
          <ProjectsBlock
            customization={customization}
            isCard={isCard}
            projects={general.projects}
          />
        )
      case "skills":
        return (
          <SkillsBlock
            isLeft={isLeft}
            customization={customization}
            isCard={isCard}
            skills={general.skills}
          />
        )
      case "languages":
        return (
          <LanguagesBlock
            isLeft={isLeft}
            customization={customization}
            isCard={isCard}
            languages={general.languages}
          />
        )
      default:
        return null
    }
  }

  const leftColumns = useMemo(() => {
    return [...layout.columns.left].sort((a, b) => {
      if (a === "person") return -1
      if (b === "person") return 1
      return 0
    })
  }, [layout.columns.left])

  const rightColumns = useMemo(() => {
    return [...layout.columns.right].sort((a, b) => {
      if (a === "person") return -1
      if (b === "person") return 1
      return 0
    })
  }, [layout.columns.right])

  return (
    <AspectRatio ratio={width / height}>
      <div className={font.font.className} id={isCard ? uuid() : "resume"}>
        <DocumentPage
          borderSize={colors.borderSize}
          borderVisibility={colors.borderVisibility}
          className={className}
          layout={layout.layout}
          variant={layout.variant}
          sides={colors.side}
          lineHeight={spacing.lineHeight}
          mode={colors.mode}
          pageHeight={height}
        >
          <DocumentSide
            colors={colors}
            isCard={isCard}
            layout={layout}
            spacing={spacing}
            variant="left"
          >
            {layout.layout.pos === "top" || layout.variant === "1-column"
              ? renderBlock("person", true)
              : leftColumns &&
                leftColumns.map((block) => (
                  <div key={`${block}-left`}>
                    {block === "person" && renderBlock("person", true)}
                    {isInclude(block) && renderBlock(block, true)}
                  </div>
                ))}
          </DocumentSide>
          <DocumentSide
            colors={colors}
            isCard={isCard}
            layout={layout}
            spacing={spacing}
            variant="right"
          >
            {layout.layout.pos === "top" || layout.variant === "1-column" ? (
              <>
                <div className={cn("flex flex-col gap-3", `w-[${layout.columnsWidth.left}%]`)}>
                  {layout.columns.left &&
                    layout.columns.left
                      .filter((block) => block !== "person")
                      .map((block) => (
                        <div key={`${block}-left`}>
                          {isInclude(block) && renderBlock(block, true)}
                        </div>
                      ))}
                </div>
                <div className={cn("flex flex-col gap-3", `w-[${layout.columnsWidth.right}%]`)}>
                  {layout.columns.right &&
                    layout.columns.right.map((block) => (
                      <div key={`${block}-right`}>
                        {isInclude(block) && renderBlock(block, false)}
                      </div>
                    ))}
                </div>
              </>
            ) : (
              rightColumns &&
              rightColumns.map((block) => (
                <div key={`${block}-right`}>
                  {block === "person" && renderBlock("person", false)}
                  {isInclude(block) && renderBlock(block, false)}
                </div>
              ))
            )}
          </DocumentSide>
        </DocumentPage>
      </div>
    </AspectRatio>
  )
}

export { ResumeDocument }
