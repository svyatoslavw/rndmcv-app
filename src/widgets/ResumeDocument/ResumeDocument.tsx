"use client"

import { BrainIcon, BriefcaseBusinessIcon, FolderOpenIcon, GraduationCapIcon } from "lucide-react"

import { ResumeDocumentHeading } from "./ResumeDocumentHeading"
import { ResumeDocumentPerson } from "./ResumeDocumentPerson"
import { ResumeDocumentSection } from "./ResumeDocumentSection"
import { ResumeDocumentSide } from "./ResumeDocumentSide"
import { useAppSelector } from "@/shared/lib/store"
import { cn, formatSectionDate } from "@/shared/lib/utils"
import { AspectRatio } from "@/shared/ui/aspect-ratio"

const ResumeDocument = ({ className }: { className?: string }) => {
  const { person, projects, skills, education, experience } = useAppSelector(
    (state) => state.resume
  )
  const {
    colors,
    heading,
    job,
    name,
    spacing,
    layout: lyt
  } = useAppSelector((state) => state.customization)

  const { columns, layout } = lyt
  const { applyAccent, mode, side } = colors
  const { style, icons, size } = heading
  const { fontSize, lineHeight } = spacing

  return (
    <div
      className={cn(
        "hidden w-[675px] overflow-y-auto overflow-x-hidden scroll-smooth pb-8 pt-8 sm:hidden md:hidden lg:block xl:block 2xl:block",
        className
      )}
    >
      <AspectRatio
        className={cn("flex rounded-lg shadow-md", {
          [layout.class]: true,
          [`bg-[${side.right.background}] leading-[${lineHeight}]`]: true,
          [`border-[14px] border-[${side.left.accent}]`]: mode === "border"
        })}
        ratio={675 / 1200}
      >
        {/* Block1 */}
        <ResumeDocumentSide variant="left">
          <ResumeDocumentPerson />
          <div>
            {columns.left &&
              columns.left.map((block) => (
                <div className="mb-4" key={block}>
                  {block === "education" && (
                    <div>
                      <ResumeDocumentHeading
                        Icon={GraduationCapIcon}
                        icons={icons}
                        size={size}
                        accent={side.left.accent}
                        applyAccent={applyAccent}
                        fontSize={fontSize}
                        style={style}
                      >
                        Education
                      </ResumeDocumentHeading>
                      <ResumeDocumentSection
                        items={education.items}
                        heading="school"
                        render={(item) => (
                          <>
                            {item.startDate && item.endDate && (
                              <p className="text-sm">
                                {formatSectionDate(item.startDate)} | {""}
                                {formatSectionDate(item.endDate)}
                              </p>
                            )}
                            <p className="text-lg">{item.description}</p>
                          </>
                        )}
                      />
                    </div>
                  )}
                  {block === "experience" && (
                    <div>
                      <ResumeDocumentHeading
                        Icon={BriefcaseBusinessIcon}
                        icons={icons}
                        size={size}
                        accent={side.left.accent}
                        applyAccent={applyAccent}
                        fontSize={fontSize}
                        style={style}
                      >
                        Experience
                      </ResumeDocumentHeading>
                      <ResumeDocumentSection
                        items={experience.items}
                        heading="employer"
                        render={(item) => (
                          <>
                            {item.startDate && item.endDate && (
                              <p className="text-sm">
                                {formatSectionDate(item.startDate)} | {""}
                                {formatSectionDate(item.endDate)}
                              </p>
                            )}
                            <p className="text-lg">{item.description}</p>
                          </>
                        )}
                      />
                    </div>
                  )}
                  {block === "projects" && (
                    <div>
                      <ResumeDocumentHeading
                        Icon={FolderOpenIcon}
                        icons={icons}
                        size={size}
                        accent={side.left.accent}
                        applyAccent={applyAccent}
                        fontSize={fontSize}
                        style={style}
                      >
                        Projects
                      </ResumeDocumentHeading>
                      <ResumeDocumentSection
                        items={projects.items}
                        heading="title"
                        render={(item) => (
                          <>{item.description && <p className="text-sm">{item.description}</p>}</>
                        )}
                      />
                    </div>
                  )}
                  {block === "skills" && (
                    <div>
                      <ResumeDocumentHeading
                        Icon={BrainIcon}
                        icons={icons}
                        size={size}
                        accent={side.left.accent}
                        applyAccent={applyAccent}
                        fontSize={fontSize}
                        style={style}
                      >
                        Skills
                      </ResumeDocumentHeading>
                      <ResumeDocumentSection
                        items={skills.items}
                        heading="skill"
                        render={(item) => (
                          <>{item.level && <p className="text-lg">{item.level}</p>}</>
                        )}
                        headingClassName="text-sm"
                        className="flex gap-2"
                      />
                    </div>
                  )}
                </div>
              ))}
          </div>
        </ResumeDocumentSide>
        {/* Block2 */}
        <ResumeDocumentSide variant="right">
          <div>
            {columns.right &&
              columns.right.map((block) => (
                <div className="mb-4" key={block}>
                  {block === "education" && (
                    <div>
                      <ResumeDocumentHeading
                        Icon={GraduationCapIcon}
                        icons={icons}
                        size={size}
                        accent={side.right.accent}
                        applyAccent={applyAccent}
                        fontSize={fontSize}
                        style={style}
                      >
                        Education
                      </ResumeDocumentHeading>
                      <ResumeDocumentSection
                        items={education.items}
                        heading="school"
                        render={(item) => (
                          <>
                            {item.startDate && item.endDate && (
                              <p className="text-sm">
                                {formatSectionDate(item.startDate)} | {""}
                                {formatSectionDate(item.endDate)}
                              </p>
                            )}
                            <p className="text-lg">{item.description}</p>
                          </>
                        )}
                      />
                    </div>
                  )}
                  {block === "experience" && (
                    <div>
                      <ResumeDocumentHeading
                        Icon={BriefcaseBusinessIcon}
                        icons={icons}
                        size={size}
                        accent={side.right.accent}
                        applyAccent={applyAccent}
                        fontSize={fontSize}
                        style={style}
                      >
                        Experience
                      </ResumeDocumentHeading>
                      <ResumeDocumentSection
                        items={experience.items}
                        heading="employer"
                        render={(item) => (
                          <>
                            {item.startDate && item.endDate && (
                              <p className="text-sm">
                                {formatSectionDate(item.startDate)} | {""}
                                {formatSectionDate(item.endDate)}
                              </p>
                            )}
                            <p className="text-lg">{item.description}</p>
                          </>
                        )}
                      />
                    </div>
                  )}
                  {block === "projects" && (
                    <div>
                      <ResumeDocumentHeading
                        Icon={FolderOpenIcon}
                        icons={icons}
                        size={size}
                        accent={side.right.accent}
                        applyAccent={applyAccent}
                        fontSize={fontSize}
                        style={style}
                      >
                        Projects
                      </ResumeDocumentHeading>
                      <ResumeDocumentSection
                        items={projects.items}
                        heading="title"
                        render={(item) => (
                          <>{item.description && <p className="text-sm">{item.description}</p>}</>
                        )}
                      />
                    </div>
                  )}
                  {block === "skills" && (
                    <div>
                      <ResumeDocumentHeading
                        Icon={BrainIcon}
                        icons={icons}
                        size={size}
                        accent={side.left.accent}
                        applyAccent={applyAccent}
                        fontSize={fontSize}
                        style={style}
                      >
                        Skills
                      </ResumeDocumentHeading>
                      <ResumeDocumentSection
                        items={skills.items}
                        heading="skill"
                        render={(item) => (
                          <>{item.level && <p className="text-lg">{item.level}</p>}</>
                        )}
                        headingClassName="text-sm"
                        className="flex gap-2"
                      />
                    </div>
                  )}
                </div>
              ))}
          </div>
        </ResumeDocumentSide>
      </AspectRatio>
    </div>
  )
}

export { ResumeDocument }
