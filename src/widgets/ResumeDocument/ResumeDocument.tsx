import { useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"
import { format } from "date-fns"
import { CalendarDaysIcon, MailIcon, MapPinIcon, PhoneCallIcon } from "lucide-react"
import { ResumePersonInfoItem } from "./ResumePersonInfoItem"

const ResumeDocument = () => {
  const { person, education, experience } = useAppSelector((state) => state.resume)
  const { left, right } = useAppSelector((state) => state.customization.columns)
  const { left: leftWidth, right: rightWidth } = useAppSelector(
    (state) => state.customization.columnsWidth
  )
  const layout = useAppSelector((state) => state.customization.layout)
  const colors = useAppSelector((state) => state.customization.colors)

  return (
    <div className="overflow-y-auto overflow-x-hidden scroll-smooth pb-8 pt-8">
      <div
        className={cn("flex h-[885px] w-[625px] rounded-sm shadow-md", {
          [layout.class]: true,
          [`bg-[${colors.side.right.background}]`]: true,
          [`border-[14px] border-[${colors.side.left.accent}]`]: colors.mode === "border"
        })}
      >
        {/* Block1 */}
        <div
          className={cn("flex flex-col gap-3 p-6", {
            [`w-[${leftWidth}%]`]: layout.position !== "top",
            ["rounded-l-sm"]: layout.position === "left",
            ["rounded-r-sm"]: layout.position === "right",
            ["rounded-t-sm"]: layout.position === "top",
            [`bg-[${colors.side.left.background}]`]: colors.mode === "advanced",
            [`text-[${colors.side.left.text}]`]: true,
            [`text-[${colors.side.right.text}]`]: colors.mode !== "advanced"
          })}
        >
          <div>
            <div>
              <h1
                className={cn("mb-1 text-3xl font-bold", {
                  [`text-[${colors.side.left.accent}]`]: colors.applyAccent.name
                })}
              >
                {person.name}
              </h1>
              <h2
                className={cn("text-2xl font-semibold", {
                  [`text-[${colors.side.left.accent}]`]: colors.applyAccent.name
                })}
              >
                {person.job}
              </h2>
            </div>
            <div className="mt-3 flex flex-col gap-1">
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
                      <h2
                        className={cn(
                          "mb-2 text-2xl font-semibold after:block after:h-[4px] after:w-12 after:bg-gray-700 after:content-['']",
                          {
                            [`after:bg-[${colors.side.left.accent}]`]:
                              colors.applyAccent.headingsLines,
                            [`text-[${colors.side.left.accent}]`]: colors.applyAccent.headings
                          }
                        )}
                      >
                        Education
                      </h2>
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
                      <h2
                        className={cn(
                          "mb-2 text-2xl font-semibold after:block after:h-[4px] after:w-12 after:bg-gray-700 after:content-['']",
                          {
                            [`after:bg-[${colors.side.left.accent}]`]:
                              colors.applyAccent.headingsLines,
                            [`text-[${colors.side.left.accent}]`]: colors.applyAccent.headings
                          }
                        )}
                      >
                        Experience
                      </h2>
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
                      <h2
                        className={cn(
                          "mb-2 text-2xl font-semibold after:block after:h-[4px] after:w-12 after:bg-gray-700 after:content-['']",
                          {
                            [`after:bg-[${colors.side.left.accent}]`]:
                              colors.applyAccent.headingsLines,
                            [`text-[${colors.side.left.accent}]`]: colors.applyAccent.headings
                          }
                        )}
                      >
                        Projects
                      </h2>
                      {/* Отображение проектов */}
                    </div>
                  )}
                  {block === "skills" && (
                    <div>
                      <h2
                        className={cn(
                          "mb-2 text-2xl font-semibold after:block after:h-[4px] after:w-12 after:bg-gray-700 after:content-['']",
                          {
                            [`after:bg-[${colors.side.left.accent}]`]:
                              colors.applyAccent.headingsLines,
                            [`text-[${colors.side.left.accent}]`]: colors.applyAccent.headings
                          }
                        )}
                      >
                        Skills
                      </h2>
                      {/* Отображение навыков */}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
        {/* Block2 */}
        <div
          className={cn("flex flex-col gap-3 p-6", {
            [`w-[${rightWidth}%]`]: layout.position !== "top",
            [`bg-[${colors.side.right.background}]`]: true
          })}
        >
          <div>
            {right &&
              right.map((block) => (
                <div className="mb-4" key={block}>
                  {block === "education" && (
                    <div>
                      <h2
                        className={cn(
                          "mb-2 text-2xl font-semibold after:block after:h-[4px] after:w-12 after:bg-gray-700 after:content-['']",
                          {
                            [`after:bg-[${colors.side.left.accent}]`]:
                              colors.applyAccent.headingsLines,
                            [`text-[${colors.side.right.accent}]`]: colors.applyAccent.headings
                          }
                        )}
                      >
                        Education
                      </h2>
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
                      <h2
                        className={cn(
                          "mb-2 text-2xl font-semibold after:block after:h-[4px] after:w-12 after:bg-gray-700 after:content-['']",
                          {
                            [`after:bg-[${colors.side.left.accent}]`]:
                              colors.applyAccent.headingsLines,
                            [`text-[${colors.side.right.accent}]`]: colors.applyAccent.headings
                          }
                        )}
                      >
                        Experience
                      </h2>
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
                      <h2
                        className={cn(
                          "mb-2 text-2xl font-semibold after:block after:h-[4px] after:w-12 after:bg-gray-700 after:content-['']",
                          {
                            [`after:bg-[${colors.side.left.accent}]`]:
                              colors.applyAccent.headingsLines,
                            [`text-[${colors.side.right.accent}]`]: colors.applyAccent.headings
                          }
                        )}
                      >
                        Projects
                      </h2>
                      {/* Отображение проектов */}
                    </div>
                  )}
                  {block === "skills" && (
                    <div>
                      <h2
                        className={cn(
                          "mb-2 text-2xl font-semibold after:block after:h-[4px] after:w-12 after:bg-gray-700 after:content-['']",
                          {
                            [`after:bg-[${colors.side.left.accent}]`]:
                              colors.applyAccent.headingsLines,
                            [`text-[${colors.side.right.accent}]`]: colors.applyAccent.headings
                          }
                        )}
                      >
                        Skills
                      </h2>
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
