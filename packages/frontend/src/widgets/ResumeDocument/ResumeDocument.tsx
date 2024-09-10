import {
  BrainIcon,
  BriefcaseBusinessIcon,
  FolderOpenIcon,
  GraduationCapIcon,
  LanguagesIcon
} from "lucide-react"
import { memo } from "react"

import { ResumeDocumentHeading } from "./ResumeDocumentHeading"
import { ResumeDocumentPerson } from "./ResumeDocumentPerson"
import { ResumeDocumentSection } from "./ResumeDocumentSection"
import { ResumeDocumentSide } from "./ResumeDocumentSide"
import { ICustomization, IGeneral } from "@/entities/resume"
import { cn, formatSectionDate } from "@/shared/lib/utils"
import { AspectRatio } from "@/shared/ui/aspect-ratio"

interface ResumeDocumentProps {
  className?: string
  isCard?: boolean
  width?: number
  height?: number
  general: IGeneral
  customization: ICustomization
}

const ResumeDocument = memo(
  ({
    customization,
    general,
    className,
    isCard,
    width = 794,
    height = 1122
  }: ResumeDocumentProps) => {
    const { projects, skills, education, experience, languages, visibleBlocks: vb } = general

    const { colors, heading, spacing, layout: lyt } = customization

    const { columns, layout } = lyt
    const { isAccent, mode, side, borderVisibility: bv, borderSize } = colors
    const { style, icons, size } = heading
    const { fontSize, lineHeight } = spacing

    return (
      <AspectRatio ratio={width / height}>
        <div id="resume">
          <div
            id="page"
            className={cn(
              "flex h-[1122px] w-full",
              `bg-[${side.left.background}] leading-[${lineHeight}] ${layout.class}`,
              className,
              {
                [`border-[${side.left.accent}]`]: mode === "border",
                [`border-t-[${borderSize}px]`]: bv.top && mode === "border",
                [`border-b-[${borderSize}px]`]: bv.bottom && mode === "border",
                [`border-l-[${borderSize}px]`]: bv.left && mode === "border",
                [`border-r-[${borderSize}px]`]: bv.right && mode === "border"
              }
            )}
          >
            {/* Block1 */}
            <ResumeDocumentSide
              colors={colors}
              layout={lyt}
              spacing={spacing}
              isCard={isCard}
              variant="left"
            >
              <div>
                {columns.left &&
                  columns.left.map((block) => (
                    <div className={isCard ? "mb-1" : "mb-4"} key={block}>
                      {block === "person" && (
                        <ResumeDocumentPerson
                          colors={colors}
                          job={customization.job}
                          name={customization.name}
                          fontSize={fontSize}
                          person={general.person}
                          isCard={isCard}
                        />
                      )}
                      {block === "education" && vb.includes("education") && (
                        <div>
                          <ResumeDocumentHeading
                            isCard={isCard}
                            Icon={GraduationCapIcon}
                            icons={icons}
                            size={size}
                            accent={side.left.accent}
                            textColor={side.left.text}
                            isAccent={isAccent}
                            fontSize={fontSize}
                            style={style}
                          >
                            Education
                          </ResumeDocumentHeading>
                          <ResumeDocumentSection
                            items={education.items}
                            headingClassName={cn({ "text-[5px]": isCard })}
                            heading="school"
                            render={(item) => (
                              <div className={cn("flex flex-col gap-1", { "gap-[2px]": isCard })}>
                                <p className={cn("text-sm", { "text-[5px]": isCard })}>
                                  {item.country}
                                </p>
                                {item.startDate && item.endDate && (
                                  <p className={cn("text-sm", { "text-[5px]": isCard })}>
                                    {formatSectionDate(item.startDate)} | {""}
                                    {formatSectionDate(item.endDate)}
                                  </p>
                                )}
                                <p className={cn("text-xs", { "text-[5px]": isCard })}>
                                  {item.description}
                                </p>
                              </div>
                            )}
                          />
                        </div>
                      )}
                      {block === "experience" && vb.includes("experience") && (
                        <div>
                          <ResumeDocumentHeading
                            isCard={isCard}
                            Icon={BriefcaseBusinessIcon}
                            icons={icons}
                            size={size}
                            accent={side.left.accent}
                            textColor={side.left.text}
                            isAccent={isAccent}
                            fontSize={fontSize}
                            style={style}
                          >
                            Experience
                          </ResumeDocumentHeading>
                          <ResumeDocumentSection
                            items={experience.items}
                            headingClassName={cn("text-sm", { "text-[5px]": isCard })}
                            heading="employer"
                            className="flex flex-col gap-2"
                            render={(item) => (
                              <div className="flex flex-col gap-1">
                                {item.startDate && item.endDate && (
                                  <p className={cn("text-sm", { "text-[5px]": isCard })}>
                                    {formatSectionDate(item.startDate)} | {""}
                                    {formatSectionDate(item.endDate)}
                                  </p>
                                )}
                                <p className={cn("text-xs", { "text-[5px]": isCard })}>
                                  {item.description}
                                </p>
                              </div>
                            )}
                          />
                        </div>
                      )}
                      {block === "projects" && vb.includes("projects") && (
                        <div>
                          <ResumeDocumentHeading
                            isCard={isCard}
                            Icon={FolderOpenIcon}
                            icons={icons}
                            size={size}
                            accent={side.left.accent}
                            textColor={side.left.text}
                            isAccent={isAccent}
                            fontSize={fontSize}
                            style={style}
                          >
                            Projects
                          </ResumeDocumentHeading>
                          <ResumeDocumentSection
                            items={projects.items}
                            headingClassName={cn("text-sm", { "text-[5px]": isCard })}
                            heading="title"
                            render={(item) => (
                              <div className="mb-2 flex flex-col gap-1">
                                {item.description && (
                                  <p className={cn("text-xs", { "text-[5px]": isCard })}>
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            )}
                          />
                        </div>
                      )}
                      {block === "skills" && vb.includes("skills") && (
                        <div>
                          <ResumeDocumentHeading
                            isCard={isCard}
                            Icon={BrainIcon}
                            icons={icons}
                            size={size}
                            accent={side.left.accent}
                            textColor={side.left.text}
                            isAccent={isAccent}
                            fontSize={fontSize}
                            style={style}
                          >
                            Skills
                          </ResumeDocumentHeading>
                          <ResumeDocumentSection
                            items={skills.items}
                            headingClassName={cn("text-sm", { "text-[5px]": isCard })}
                            heading="skill"
                            render={(item) => (
                              <>
                                {item.level && (
                                  <p className={cn("text-xs", { "text-[5px]": isCard })}>
                                    {item.level}
                                  </p>
                                )}
                              </>
                            )}
                            className="flex gap-2"
                          />
                        </div>
                      )}
                      {block === "languages" && vb.includes("languages") && (
                        <div>
                          <ResumeDocumentHeading
                            isCard={isCard}
                            Icon={LanguagesIcon}
                            icons={icons}
                            size={size}
                            accent={side.left.accent}
                            textColor={side.left.text}
                            isAccent={isAccent}
                            fontSize={fontSize}
                            style={style}
                          >
                            Languages
                          </ResumeDocumentHeading>
                          <ResumeDocumentSection
                            items={languages.items}
                            headingClassName={cn("text-sm", { "text-[5px]": isCard })}
                            heading="language"
                            render={(item) => (
                              <>
                                {item.level && (
                                  <p className={cn("text-xs", { "text-[5px]": isCard })}>
                                    {item.level}
                                  </p>
                                )}
                              </>
                            )}
                            className="flex gap-2"
                          />
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </ResumeDocumentSide>
            {/* Block2 */}
            <ResumeDocumentSide
              colors={colors}
              layout={lyt}
              spacing={spacing}
              isCard={isCard}
              variant="right"
            >
              <div>
                {columns.right &&
                  columns.right.map((block) => (
                    <div className={isCard ? "mb-1" : "mb-4"} key={block}>
                      {block === "person" && (
                        <ResumeDocumentPerson
                          fontSize={fontSize}
                          colors={colors}
                          job={customization.job}
                          name={customization.name}
                          person={general.person}
                          isCard={isCard}
                        />
                      )}

                      {block === "education" && vb.includes("education") && (
                        <div>
                          <ResumeDocumentHeading
                            isCard={isCard}
                            Icon={GraduationCapIcon}
                            icons={icons}
                            size={size}
                            accent={side.right.accent}
                            textColor={side.right.text}
                            isAccent={isAccent}
                            fontSize={fontSize}
                            style={style}
                          >
                            Education
                          </ResumeDocumentHeading>
                          <ResumeDocumentSection
                            items={education.items}
                            headingClassName={cn("text-sm", { "text-[5px]": isCard })}
                            heading="school"
                            render={(item) => (
                              <>
                                {item.startDate && item.endDate && (
                                  <p className={cn("text-sm", { "text-[5px]": isCard })}>
                                    {formatSectionDate(item.startDate)} | {""}
                                    {formatSectionDate(item.endDate)}
                                  </p>
                                )}
                                <p className={cn("text-xs", { "text-[5px]": isCard })}>
                                  {item.description}
                                </p>
                              </>
                            )}
                          />
                        </div>
                      )}
                      {block === "experience" && vb.includes("experience") && (
                        <div>
                          <ResumeDocumentHeading
                            isCard={isCard}
                            Icon={BriefcaseBusinessIcon}
                            icons={icons}
                            size={size}
                            accent={side.right.accent}
                            textColor={side.right.text}
                            isAccent={isAccent}
                            fontSize={fontSize}
                            style={style}
                          >
                            Experience
                          </ResumeDocumentHeading>
                          <ResumeDocumentSection
                            items={experience.items}
                            headingClassName={cn("text-sm", { "text-[5px]": isCard })}
                            heading="employer"
                            className="flex flex-col gap-2"
                            render={(item) => (
                              <div className="flex flex-col gap-1">
                                {item.startDate && item.endDate && (
                                  <p className={cn("text-sm", { "text-[5px]": isCard })}>
                                    {formatSectionDate(item.startDate)} | {""}
                                    {formatSectionDate(item.endDate)}
                                  </p>
                                )}
                                <p className={cn("text-xs", { "text-[5px]": isCard })}>
                                  {item.description}
                                </p>
                              </div>
                            )}
                          />
                        </div>
                      )}
                      {block === "projects" && vb.includes("projects") && (
                        <div>
                          <ResumeDocumentHeading
                            isCard={isCard}
                            Icon={FolderOpenIcon}
                            icons={icons}
                            size={size}
                            accent={side.right.accent}
                            textColor={side.right.text}
                            isAccent={isAccent}
                            fontSize={fontSize}
                            style={style}
                          >
                            Projects
                          </ResumeDocumentHeading>
                          <ResumeDocumentSection
                            items={projects.items}
                            headingClassName={cn("text-sm", { "text-[5px]": isCard })}
                            heading="title"
                            render={(item) => (
                              <div className="mb-2 flex flex-col gap-1">
                                {item.description && (
                                  <p className={cn("text-xs", { "text-[5px]": isCard })}>
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            )}
                          />
                        </div>
                      )}
                      {block === "skills" && vb.includes("skills") && (
                        <div>
                          <ResumeDocumentHeading
                            isCard={isCard}
                            Icon={BrainIcon}
                            icons={icons}
                            size={size}
                            accent={side.right.accent}
                            textColor={side.right.text}
                            isAccent={isAccent}
                            fontSize={fontSize}
                            style={style}
                          >
                            Skills
                          </ResumeDocumentHeading>
                          <ResumeDocumentSection
                            items={skills.items}
                            heading="skill"
                            render={(item) => (
                              <>
                                {item.level && (
                                  <p className={cn("text-xs", { "text-[5px]": isCard })}>
                                    {item.level}
                                  </p>
                                )}
                              </>
                            )}
                            headingClassName={cn("text-sm", { "text-[5px]": isCard })}
                            className="flex gap-2"
                          />
                        </div>
                      )}
                      {block === "languages" && vb.includes("languages") && (
                        <div>
                          <ResumeDocumentHeading
                            isCard={isCard}
                            Icon={LanguagesIcon}
                            icons={icons}
                            size={size}
                            accent={side.right.accent}
                            textColor={side.right.text}
                            isAccent={isAccent}
                            fontSize={fontSize}
                            style={style}
                          >
                            Languages
                          </ResumeDocumentHeading>
                          <ResumeDocumentSection
                            items={languages.items}
                            heading="language"
                            render={(item) => (
                              <>
                                {item.level && (
                                  <p className={cn("text-xs", { "text-[5px]": isCard })}>
                                    {item.level}
                                  </p>
                                )}
                              </>
                            )}
                            headingClassName={cn("text-sm", { "text-[5px]": isCard })}
                            className="flex gap-2"
                          />
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </ResumeDocumentSide>
          </div>
        </div>
      </AspectRatio>
    )
  }
)

export { ResumeDocument }
