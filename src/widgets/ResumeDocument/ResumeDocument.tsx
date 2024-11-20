import { EducationBlock } from "./EducationBlock"
import { ExperienceBlock } from "./ExperienceBlock"
import { LanguagesBlock } from "./LanguagesBlock"
import { PersonBlock } from "./PersonBlock"
import { ProjectsBlock } from "./ProjectsBlock"
import { ResumeDocumentPage } from "./ResumeDocumentPage"
import { ResumeDocumentSide } from "./ResumeDocumentSide"
import { SkillsBlock } from "./SkillsBlock"

import { ICustomization, IGeneral } from "@/shared/types"
import { AspectRatio } from "@/shared/ui/aspect-ratio"

interface ResumeDocumentProps {
  className?: string
  isCard?: boolean
  width?: number
  height?: number
  general: IGeneral
  customization: ICustomization
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

  return (
    <AspectRatio ratio={width / height}>
      <div className={font.font.className} id="resume">
        <ResumeDocumentPage
          borderSize={colors.borderSize}
          borderVisibility={colors.borderVisibility}
          className={className}
          layout={layout.layout}
          left={colors.side.left}
          lineHeight={spacing.lineHeight}
          mode={colors.mode}
        >
          <ResumeDocumentSide
            colors={colors}
            isCard={isCard}
            layout={layout}
            spacing={spacing}
            variant="left"
          >
            {layout.columns.left &&
              layout.columns.left.map((block) => (
                <>
                  {block === "person" && (
                    <PersonBlock
                      isLeft
                      customization={customization}
                      isCard={isCard}
                      person={general.person}
                    />
                  )}

                  {block === "education" && vb.includes("education") && (
                    <EducationBlock
                      isLeft
                      customization={customization}
                      education={general.education}
                      isCard={isCard}
                    />
                  )}

                  {block === "experience" && vb.includes("experience") && (
                    <ExperienceBlock
                      isLeft
                      customization={customization}
                      experience={general.experience}
                      isCard={isCard}
                    />
                  )}

                  {block === "projects" && vb.includes("projects") && (
                    <ProjectsBlock
                      customization={customization}
                      isCard={isCard}
                      projects={general.projects}
                    />
                  )}

                  {block === "skills" && vb.includes("skills") && (
                    <SkillsBlock
                      isLeft
                      customization={customization}
                      isCard={isCard}
                      skills={general.skills}
                    />
                  )}

                  {block === "languages" && vb.includes("languages") && (
                    <LanguagesBlock
                      isLeft
                      customization={customization}
                      isCard={isCard}
                      languages={general.languages}
                    />
                  )}
                </>
              ))}
          </ResumeDocumentSide>
          <ResumeDocumentSide
            colors={colors}
            isCard={isCard}
            layout={layout}
            spacing={spacing}
            variant="right"
          >
            {layout.columns.right &&
              layout.columns.right.map((block) => (
                <>
                  {block === "person" && (
                    <PersonBlock
                      customization={customization}
                      isCard={isCard}
                      person={general.person}
                    />
                  )}

                  {block === "education" && vb.includes("education") && (
                    <EducationBlock
                      customization={customization}
                      education={general.education}
                      isCard={isCard}
                    />
                  )}

                  {block === "experience" && vb.includes("experience") && (
                    <ExperienceBlock
                      isLeft
                      customization={customization}
                      experience={general.experience}
                      isCard={isCard}
                    />
                  )}

                  {block === "projects" && vb.includes("projects") && (
                    <ProjectsBlock
                      customization={customization}
                      isCard={isCard}
                      projects={general.projects}
                    />
                  )}

                  {block === "skills" && vb.includes("skills") && (
                    <SkillsBlock
                      isLeft
                      customization={customization}
                      isCard={isCard}
                      skills={general.skills}
                    />
                  )}

                  {block === "languages" && vb.includes("languages") && (
                    <LanguagesBlock
                      isLeft
                      customization={customization}
                      isCard={isCard}
                      languages={general.languages}
                    />
                  )}
                </>
              ))}
          </ResumeDocumentSide>
        </ResumeDocumentPage>
      </div>
    </AspectRatio>
  )
}

export { ResumeDocument }
