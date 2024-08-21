"use client"

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
import { useAppSelector } from "@/shared/lib/store"
import { cn, formatSectionDate } from "@/shared/lib/utils"
import { AspectRatio } from "@/shared/ui/aspect-ratio"

const ResumeDocument = ({ className }: { className?: string }) => {
  const {
    projects,
    skills,
    education,
    experience,
    languages,
    visibleBlocks: vb
  } = useAppSelector((state) => state.resume)
  const { colors, heading, spacing, layout: lyt } = useAppSelector((state) => state.customization)

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
      <AspectRatio ratio={675 / 1200}>
        <div
          className={cn("flex h-full w-full rounded-lg shadow-md", {
            [`bg-[${side.right.background}] leading-[${lineHeight}] ${layout.class}`]: true,
            [`border-[14px] border-[${side.left.accent}]`]: mode === "border"
          })}
          id="resume"
        >
          {/* Block1 */}
          <ResumeDocumentSide variant="left">
            <ResumeDocumentPerson />
            <div>
              {columns.left &&
                columns.left.map((block) => (
                  <div className="mb-4" key={block}>
                    {block === "education" && vb.includes("education") && (
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
                              <p className="text-xs">{item.description}</p>
                            </>
                          )}
                        />
                      </div>
                    )}
                    {block === "experience" && vb.includes("experience") && (
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
                              <p className="text-xs">{item.description}</p>
                            </>
                          )}
                        />
                      </div>
                    )}
                    {block === "projects" && vb.includes("projects") && (
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
                            <>{item.description && <p className="text-xs">{item.description}</p>}</>
                          )}
                        />
                      </div>
                    )}
                    {block === "skills" && vb.includes("skills") && (
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
                    {block === "languages" && vb.includes("languages") && (
                      <div>
                        <ResumeDocumentHeading
                          Icon={LanguagesIcon}
                          icons={icons}
                          size={size}
                          accent={side.left.accent}
                          applyAccent={applyAccent}
                          fontSize={fontSize}
                          style={style}
                        >
                          Languages
                        </ResumeDocumentHeading>
                        <ResumeDocumentSection
                          items={languages.items}
                          heading="language"
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
                    {block === "education" && vb.includes("education") && (
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
                              <p className="text-xs">{item.description}</p>
                            </>
                          )}
                        />
                      </div>
                    )}
                    {block === "experience" && vb.includes("experience") && (
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
                              <p className="text-xs">{item.description}</p>
                            </>
                          )}
                        />
                      </div>
                    )}
                    {block === "projects" && vb.includes("projects") && (
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
                            <>{item.description && <p className="text-xs">{item.description}</p>}</>
                          )}
                        />
                      </div>
                    )}
                    {block === "skills" && vb.includes("skills") && (
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
                    {block === "languages" && vb.includes("languages") && (
                      <div>
                        <ResumeDocumentHeading
                          Icon={LanguagesIcon}
                          icons={icons}
                          size={size}
                          accent={side.left.accent}
                          applyAccent={applyAccent}
                          fontSize={fontSize}
                          style={style}
                        >
                          Languages
                        </ResumeDocumentHeading>
                        <ResumeDocumentSection
                          items={languages.items}
                          heading="language"
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
        </div>
      </AspectRatio>
    </div>
  )
}

export { ResumeDocument }
