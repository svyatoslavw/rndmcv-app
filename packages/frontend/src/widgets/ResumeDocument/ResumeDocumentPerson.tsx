import { ResumePersonInfoItem } from "./ResumePersonInfoItem"
import type { IPerson, TypeColors, TypeJob, TypeName } from "@/shared/lib/types"
import { cn, formatSectionDate } from "@/shared/lib/utils"

interface ResumeDocumentPersonProps {
  isCard?: boolean
  person: IPerson
  fontSize: number
  colors: TypeColors
  name: TypeName
  job: TypeJob
}

const ResumeDocumentPerson = ({
  isCard,
  fontSize,
  person,
  colors,
  job,
  name
}: ResumeDocumentPersonProps) => {
  const { side, isAccent } = colors
  const { size: nameSz, isBold } = name
  const { size: jobSz, isItalic } = job

  return (
    <div>
      <div className={`leading-none`}>
        <h1
          className={cn("mb-1 text-3xl font-medium", `text-[calc(24px+${nameSz}px+${fontSize}%)]`, {
            [`text-[${side.left.accent}]`]: isAccent.name,
            ["font-bold"]: isBold,
            "text-[10px]": isCard
          })}
        >
          {person.name}
        </h1>
        <h2
          className={cn("font-semibold", `text-[calc(12px+${jobSz}px+${fontSize}%)]`, {
            [`text-[${side.left.accent}]`]: isAccent.name,
            ["italic"]: isItalic,
            "text-[4px]": isCard
          })}
        >
          {person.job}
        </h2>
      </div>
      <div className={cn("mt-4 flex flex-col gap-1.5", { "mt-1": isCard })}>
        {person.email && (
          <ResumePersonInfoItem
            fontSize={fontSize}
            isCard={isCard}
            icon="mail"
            text={person.email}
          />
        )}
        {person.phone && (
          <ResumePersonInfoItem
            fontSize={fontSize}
            isCard={isCard}
            icon="phone-call"
            text={person.phone}
          />
        )}
        {person.address && (
          <ResumePersonInfoItem
            fontSize={fontSize}
            isCard={isCard}
            icon="map-pin"
            text={person.address}
          />
        )}
        {person.date && (
          <ResumePersonInfoItem
            fontSize={fontSize}
            isCard={isCard}
            icon="calendar-days"
            text={formatSectionDate(person.date)}
          />
        )}
        {person.information &&
          person.information.map((info) => (
            <ResumePersonInfoItem
              fontSize={fontSize}
              isCard={isCard}
              icon={info.icon}
              text={info.key === "date" ? formatSectionDate(info.text) : info.text}
              key={info.key}
            />
          ))}
        {person.links &&
          person.links.map((link) => (
            <ResumePersonInfoItem
              fontSize={fontSize}
              isCard={isCard}
              isLink
              url={link.url}
              icon={link.icon}
              text={link.text}
              key={link.key}
            />
          ))}
      </div>
    </div>
  )
}

export { ResumeDocumentPerson }
