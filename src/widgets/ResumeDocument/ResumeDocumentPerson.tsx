import type { IPerson, TypeColors, TypeJob, TypeName } from "@/shared/lib/types"

import { ResumePersonInfoItem } from "./ResumePersonInfoItem"

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
          className={cn(
            "mb-1 text-3xl font-medium",
            `text-[calc(10px+${nameSz}px+${fontSize}px)]`,
            {
              [`text-[${side.left.accent}]`]: isAccent.name,
              ["font-bold"]: isBold,
              "text-[10px]": isCard
            }
          )}
        >
          {person.name}
        </h1>
        <h2
          className={cn("font-semibold", `text-[calc(${jobSz}px+${fontSize}px)]`, {
            [`text-[${side.left.accent}]`]: isAccent.name,
            ["italic"]: isItalic,
            "text-[4px]": isCard
          })}
        >
          {person.job}
        </h2>
      </div>
      <div className={cn("mt-3 flex flex-col gap-1", { "mt-1": isCard })}>
        {person.email && (
          <ResumePersonInfoItem
            fontSize={fontSize}
            icon="mail"
            isCard={isCard}
            text={person.email}
          />
        )}
        {person.phone && (
          <ResumePersonInfoItem
            fontSize={fontSize}
            icon="phone-call"
            isCard={isCard}
            text={person.phone}
          />
        )}
        {person.address && (
          <ResumePersonInfoItem
            fontSize={fontSize}
            icon="map-pin"
            isCard={isCard}
            text={person.address}
          />
        )}
        {person.date && (
          <ResumePersonInfoItem
            fontSize={fontSize}
            icon="calendar-days"
            isCard={isCard}
            text={formatSectionDate(person.date)}
          />
        )}
        {person.information &&
          person.information.map((info) => (
            <ResumePersonInfoItem
              key={info.key}
              fontSize={fontSize}
              icon={info.icon}
              isCard={isCard}
              text={info.key === "date" ? formatSectionDate(info.text) : info.text}
            />
          ))}
        {person.links &&
          person.links.map((link) => (
            <ResumePersonInfoItem
              key={link.key}
              isLink
              className="underline underline-offset-2"
              fontSize={fontSize}
              icon={link.icon}
              isCard={isCard}
              text={link.text}
              url={link.url}
            />
          ))}
      </div>
    </div>
  )
}

export { ResumeDocumentPerson }
