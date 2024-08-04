import { format } from "date-fns"
import {
  BrainIcon,
  BriefcaseBusinessIcon,
  CalendarDaysIcon,
  FolderOpenIcon,
  GraduationCapIcon,
  MailIcon,
  MapPinIcon,
  PhoneCallIcon
} from "lucide-react"

import { ResumeDocumentHeading } from "./ResumeDocumentHeading"
import { ResumePersonInfoItem } from "./ResumePersonInfoItem"
import { useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"

const ResumeDocument = () => {
  const { person, education, experience } = useAppSelector((state) => state.resume)
  const { left, right } = useAppSelector((state) => state.customization.columns)
  const { left: leftWidth, right: rightWidth } = useAppSelector(
    (state) => state.customization.columnsWidth
  )
  const layout = useAppSelector((state) => state.customization.layout)
  const { applyAccent, mode, side } = useAppSelector((state) => state.customization.colors)
  const { fontSize, marginX, marginY, lineHeight } = useAppSelector(
    (state) => state.customization.spacing
  )
  const { style, icons, size } = useAppSelector((state) => state.customization.heading)

  return (
    <div className="overflow-y-auto overflow-x-hidden scroll-smooth pb-8 pt-8">
      <div
        className={cn("flex h-[885px] w-[625px] rounded-lg shadow-md", {
          [layout.class]: true,
          [`bg-[${side.right.background}] leading-[${lineHeight}]`]: true,
          [`border-[14px] border-[${side.left.accent}]`]: mode === "border"
        })}
      >
        {/* Block1 */}
        <div
          className={cn("flex flex-col gap-3", {
            [`w-[${leftWidth}%]`]: layout.position !== "top",
            ["rounded-l-lg"]: layout.position === "left",
            ["rounded-r-lg"]: layout.position === "right",
            ["rounded-t-lg"]: layout.position === "top",
            [`bg-[${side.left.background}]`]: mode === "advanced",
            [`text-[${side.left.text}] px-[${marginX}px] py-[${marginY}px]`]: true,
            [`text-[${side.right.text}]`]: mode !== "advanced"
          })}
        >
          <div>
            <div>
              <h1
                className={cn("mb-1 text-3xl font-bold", {
                  [`text-[${side.left.accent}]`]: applyAccent.name,
                  [`text-[calc(24px+${fontSize}%)]`]: true
                })}
              >
                {person.name}
              </h1>
              <h2
                className={cn("font-semibold", {
                  [`text-[${side.left.accent}]`]: applyAccent.name,
                  [`text-[calc(16px+${fontSize}%)]`]: true
                })}
              >
                {person.job}
              </h2>
            </div>
            <div className="mt-2 flex flex-col gap-1">
              <ResumePersonInfoItem Icon={MailIcon} text={person.email} />
              <ResumePersonInfoItem Icon={PhoneCallIcon} text={person.phone} />
              <ResumePersonInfoItem Icon={MapPinIcon} text={person.address} />
              <ResumePersonInfoItem
                Icon={CalendarDaysIcon}
                text={format(new Date(person.date), "PPP")}
              />
            </div>
          </div>
          <div>
            {left &&
              left.map((block) => (
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

                      {education.items.map((item) => (
                        <div key={item.id} className="mb-4">
                          <h3 className="text-lg font-bold">{item.school}</h3>
                          {item.startDate && item.endDate && (
                            <p className="text-sm">
                              {format(item.startDate, "PPP")} | {format(item.endDate, "PPP")}
                            </p>
                          )}
                          <p className="text-lg">{item.description}</p>
                        </div>
                      ))}
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

                      {experience.items.map((item) => (
                        <div key={item.id} className="mb-4">
                          <h3 className="text-lg font-bold">{item.employer}</h3>
                          {item.startDate && item.endDate && (
                            <p className="text-sm">
                              {format(item.startDate, "PPP")} | {format(item.endDate, "PPP")}
                            </p>
                          )}
                          <p className="text-lg">{item.description}</p>
                        </div>
                      ))}
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
                      {/* Отображение проектов */}
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
                      {/* Отображение навыков */}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
        {/* Block2 */}
        <div
          className={cn("flex flex-col gap-3", {
            [`w-[${rightWidth}%]`]: layout.position !== "top",
            [`bg-[${side.right.background}] px-[${marginX}px] py-[${marginY}px]`]: true
          })}
        >
          <div>
            {right &&
              right.map((block) => (
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
                      {education.items.map((item) => (
                        <div key={item.id} className="mb-4">
                          <h3 className="text-lg font-bold">{item.school}</h3>
                          {item.startDate && item.endDate && (
                            <p className="text-sm">
                              {format(item.startDate, "PPP")} | {format(item.endDate, "PPP")}
                            </p>
                          )}
                          <p className="text-lg">{item.description}</p>
                        </div>
                      ))}
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
                      {experience.items.map((item) => (
                        <div key={item.id} className="mb-4">
                          <h3 className="text-lg font-bold">{item.employer}</h3>
                          {item.startDate && item.endDate && (
                            <p className="text-sm">
                              {format(item.startDate, "PPP")} | {format(item.endDate, "PPP")}
                            </p>
                          )}
                          <p className="text-lg">{item.description}</p>
                        </div>
                      ))}
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

                      {/* Отображение проектов */}
                    </div>
                  )}
                  {block === "skills" && (
                    <div>
                      <ResumeDocumentHeading
                        Icon={BrainIcon}
                        icons={icons}
                        size={size}
                        accent={side.right.accent}
                        applyAccent={applyAccent}
                        fontSize={fontSize}
                        style={style}
                      >
                        Skills
                      </ResumeDocumentHeading>
                      {/* Отображение навыков */}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export { ResumeDocument }
