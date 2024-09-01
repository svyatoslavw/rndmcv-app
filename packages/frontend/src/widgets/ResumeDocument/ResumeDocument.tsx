"use client"

import {
  BrainIcon,
  BriefcaseBusinessIcon,
  FolderOpenIcon,
  GraduationCapIcon,
  LanguagesIcon
} from "lucide-react"
import { useLayoutEffect, useRef, useState } from "react"

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

  const [isOnePage, setIsOnePage] = useState(false)

  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const handleResize = () => {
      if (leftRef.current && rightRef.current) {
        const leftHeight = leftRef.current.offsetHeight
        const rightHeight = rightRef.current.offsetHeight
        const maxHeight = Math.max(leftHeight, rightHeight)
        console.log(maxHeight, leftHeight, rightHeight)
        console.log("offsetHeight", leftRef.current.offsetHeight, rightRef.current.offsetHeight)

        setIsOnePage(maxHeight > 960)
      }
    }

    const resizeObserver = new ResizeObserver(handleResize)
    if (leftRef.current) resizeObserver.observe(leftRef.current)
    if (rightRef.current) resizeObserver.observe(rightRef.current)

    // Initial check
    handleResize()

    return () => {
      if (leftRef.current) resizeObserver.unobserve(leftRef.current)
      if (rightRef.current) resizeObserver.unobserve(rightRef.current)
    }
  }, [columns])

  return (
    <div
      className={cn(
        "hidden w-[675px] overflow-y-auto overflow-x-hidden scroll-smooth pb-8 pt-8 sm:hidden md:hidden lg:block xl:block 2xl:block",
        className
      )}
    >
      <AspectRatio ratio={675 / 985}>
        <div id="resume">
          <div>
            <div className={`h-[${isOnePage ? "960px" : "1920"}] break-before-all break-after-all`}>
              <div
                className={cn(
                  "flex h-fit min-h-full w-full rounded-lg shadow-md after:absolute after:top-[960px] after:block after:h-4 after:w-full after:bg-neutral-100 after:content-['']",
                  {
                    [`bg-[${side.right.background}] leading-[${lineHeight}] ${layout.class}`]: true,
                    [`border-[14px] border-[${side.left.accent}]`]: mode === "border"
                  }
                )}
              >
                {/* Block1 */}
                <ResumeDocumentSide ref={leftRef} variant="left">
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
                                  <div className="flex flex-col gap-1">
                                    {item.startDate && item.endDate && (
                                      <p className="text-sm">
                                        {formatSectionDate(item.startDate)} | {""}
                                        {formatSectionDate(item.endDate)}
                                      </p>
                                    )}
                                    <p className="text-xs">{item.description}</p>
                                  </div>
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
                                className="flex flex-col gap-2"
                                render={(item) => (
                                  <div className="flex flex-col gap-1">
                                    {item.startDate && item.endDate && (
                                      <p className="text-sm">
                                        {formatSectionDate(item.startDate)} | {""}
                                        {formatSectionDate(item.endDate)}
                                      </p>
                                    )}
                                    <p className="text-xs">{item.description}</p>
                                  </div>
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
                                  <div className="mb-2 flex flex-col gap-1">
                                    {item.description && (
                                      <p className="text-xs">{item.description}</p>
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
                                  <>{item.level && <p className="text-xs">{item.level}</p>}</>
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
                                  <>{item.level && <p className="text-xs">{item.level}</p>}</>
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
                <ResumeDocumentSide ref={rightRef} variant="right">
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
                                className="flex flex-col gap-2"
                                render={(item) => (
                                  <div className="flex flex-col gap-1">
                                    {item.startDate && item.endDate && (
                                      <p className="text-sm">
                                        {formatSectionDate(item.startDate)} | {""}
                                        {formatSectionDate(item.endDate)}
                                      </p>
                                    )}
                                    <p className="text-xs">{item.description}</p>
                                  </div>
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
                                  <div className="mb-2 flex flex-col gap-1">
                                    {item.description && (
                                      <p className="text-xs">{item.description}</p>
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
                                  <>{item.level && <p className="text-xs">{item.level}</p>}</>
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
                                  <>{item.level && <p className="text-xs">{item.level}</p>}</>
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
            </div>
          </div>
        </div>
      </AspectRatio>
    </div>
  )
}

export { ResumeDocument }
