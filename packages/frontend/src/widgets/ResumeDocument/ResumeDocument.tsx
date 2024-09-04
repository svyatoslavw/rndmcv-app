import {
  BrainIcon,
  BriefcaseBusinessIcon,
  FolderOpenIcon,
  GraduationCapIcon,
  LanguagesIcon
} from "lucide-react"
import { Work_Sans } from "next/font/google"

import { ResumeDocumentHeading } from "./ResumeDocumentHeading"
import { ResumeDocumentPerson } from "./ResumeDocumentPerson"
import { ResumeDocumentSection } from "./ResumeDocumentSection"
import { ResumeDocumentSide } from "./ResumeDocumentSide"
import { useAppSelector } from "@/shared/lib/store"
import { cn, formatSectionDate } from "@/shared/lib/utils"
import { AspectRatio } from "@/shared/ui/aspect-ratio"

const work_sans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

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
  const { isAccent, mode, side } = colors
  const { style, icons, size } = heading
  const { fontSize, lineHeight } = spacing

  return (
    <div
      className={cn(
        "hidden w-[794px] overflow-x-hidden overflow-y-scroll scroll-smooth pb-44 pt-8 sm:hidden md:hidden lg:block xl:block 2xl:block",
        className,
        work_sans.className
      )}
    >
      <AspectRatio ratio={794 / 1122}>
        <div id="resume">
          <div
            id="page"
            className={cn(
              "flex h-full w-full",
              `bg-[${side.left.background}] leading-[${lineHeight}] ${layout.class}`,
              {
                [`border-[14px] border-[${side.left.accent}]`]: mode === "border"
              }
            )}
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
                            textColor={side.left.text}
                            isAccent={isAccent}
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
                                <p className="text-sm">{item.country}</p>
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
                            heading="title"
                            render={(item) => (
                              <div className="mb-2 flex flex-col gap-1">
                                {item.description && <p className="text-xs">{item.description}</p>}
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
                            textColor={side.left.text}
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
                            textColor={side.left.text}
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
                            textColor={side.right.text}
                            isAccent={isAccent}
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
                            textColor={side.right.text}
                            isAccent={isAccent}
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
                            textColor={side.right.text}
                            isAccent={isAccent}
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
                                {item.description && <p className="text-xs">{item.description}</p>}
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
      </AspectRatio>
    </div>
  )
}

export { ResumeDocument }
