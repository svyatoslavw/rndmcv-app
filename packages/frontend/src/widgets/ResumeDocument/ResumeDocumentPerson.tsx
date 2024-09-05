import { CalendarDaysIcon, MailIcon, MapPinIcon, PhoneCallIcon } from "lucide-react"

import { ResumePersonInfoItem } from "./ResumePersonInfoItem"
import { selectCustomizationResume, selectGeneralResume } from "@/entities/resume"
import { ICONS } from "@/shared/lib/constants"
import { useAppSelector } from "@/shared/lib/store"
import { cn, formatSectionDate } from "@/shared/lib/utils"

const ResumeDocumentPerson = () => {
  const person = useAppSelector(selectGeneralResume).person
  const fontSize = useAppSelector(selectCustomizationResume).spacing.fontSize

  const {
    colors: { side, isAccent },
    name: { size: nameSz, isBold },
    job: { size: jobSz, isItalic }
  } = useAppSelector(selectCustomizationResume)

  return (
    <div>
      <div className={`leading-none`}>
        <h1
          className={cn("mb-1 text-3xl font-medium", {
            [`text-[${side.left.accent}]`]: isAccent.name,
            [`text-[calc(24px+${nameSz}px+${fontSize}%)]`]: true,
            ["font-bold"]: isBold
          })}
        >
          {person.name}
        </h1>
        <h2
          className={cn("font-semibold", {
            [`text-[${side.left.accent}]`]: isAccent.name,
            [`text-[calc(12px+${jobSz}px+${fontSize}%)]`]: true,
            ["italic"]: isItalic
          })}
        >
          {person.job}
        </h2>
      </div>
      <div className="mt-4 flex flex-col gap-1">
        {person.email && <ResumePersonInfoItem Icon={MailIcon} text={person.email} />}
        {person.phone && <ResumePersonInfoItem Icon={PhoneCallIcon} text={person.phone} />}
        {person.address && <ResumePersonInfoItem Icon={MapPinIcon} text={person.address} />}
        {person.date && (
          <ResumePersonInfoItem Icon={CalendarDaysIcon} text={formatSectionDate(person.date)} />
        )}
        {person.information &&
          person.information.map((info) => (
            <ResumePersonInfoItem
              Icon={ICONS[info.icon]}
              text={info.key === "date" ? formatSectionDate(info.text) : info.text}
              key={info.key}
            />
          ))}
        {person.links &&
          person.links.map((link) => (
            <ResumePersonInfoItem
              isLink
              url={link.url}
              Icon={ICONS[link.icon]}
              text={link.text}
              key={link.key}
            />
          ))}
      </div>
    </div>
  )
}

export { ResumeDocumentPerson }
