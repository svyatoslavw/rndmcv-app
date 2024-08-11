import { format } from "date-fns"
import { CalendarDaysIcon, MailIcon, MapPinIcon, PhoneCallIcon } from "lucide-react"

import { ResumePersonInfoItem } from "./ResumePersonInfoItem"
import { useAppSelector } from "@/shared/lib/store"
import { cn } from "@/shared/lib/utils"

const ResumeDocumentPerson = () => {
  const person = useAppSelector((state) => state.resume.person)
  const fontSize = useAppSelector((state) => state.customization.spacing.fontSize)

  const { side, applyAccent } = useAppSelector((state) => state.customization.colors)
  const { size: nameSz, isBold } = useAppSelector((state) => state.customization.name)
  const { size: jobSz, isItalic } = useAppSelector((state) => state.customization.job)

  return (
    <div>
      <div className={`leading-none`}>
        <h1
          className={cn("mb-1 text-3xl font-medium", {
            [`text-[${side.left.accent}]`]: applyAccent.name,
            [`text-[calc(24px+${nameSz}px+${fontSize}%)]`]: true,
            ["font-bold"]: isBold
          })}
        >
          {person.name}
        </h1>
        <h2
          className={cn("font-semibold", {
            [`text-[${side.left.accent}]`]: applyAccent.name,
            [`text-[calc(12px+${jobSz}px+${fontSize}%)]`]: true,
            ["italic"]: isItalic
          })}
        >
          {person.job}
        </h2>
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <ResumePersonInfoItem Icon={MailIcon} text={person.email} />
        <ResumePersonInfoItem Icon={PhoneCallIcon} text={person.phone} />
        <ResumePersonInfoItem Icon={MapPinIcon} text={person.address} />
        <ResumePersonInfoItem Icon={CalendarDaysIcon} text={format(new Date(person.date), "PPP")} />
      </div>
    </div>
  )
}

export { ResumeDocumentPerson }
