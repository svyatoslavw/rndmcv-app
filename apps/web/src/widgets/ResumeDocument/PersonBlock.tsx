import { cn, formatSectionDate } from "@/shared/lib/utils"
import { ICustomization, Person, TypeIconName } from "@/shared/types"
import { Icon } from "@/shared/ui"

interface ResumePersonInfoItemProps {
  icon: TypeIconName
  text: string
  isLink?: boolean
  className?: string
  url?: string
  isCard?: boolean
  fontSize: number
}

interface PersonBlockProps {
  isCard?: boolean
  isLeft?: boolean
  person: Person
  customization: ICustomization
}

const ResumePersonInfoItem = ({
  icon,
  text,
  isLink = false,
  isCard,
  fontSize,
  className,
  url = ""
}: ResumePersonInfoItemProps) => {
  return (
    <h5
      className={cn("flex items-center gap-2", className, {
        "gap-[2px]": isCard
      })}
    >
      <Icon name={icon} size={isCard ? 5 : 14} />
      {isLink ? (
        <a
          className={`text-[${isCard ? `4px` : `calc(5px+${fontSize}px)`}] h-fit`}
          href={url}
          rel="noreferrer"
          target="_blank"
        >
          {text}
        </a>
      ) : (
        <span className={`text-[${isCard ? `4px` : `calc(5px+${fontSize}px)`}] h-fit`}>{text}</span>
      )}
    </h5>
  )
}

const PersonBlock = ({ isCard, isLeft, person, customization }: PersonBlockProps) => {
  const {
    colors,
    name,
    job,
    spacing: { fontSize },
    layout: { layout }
  } = customization

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
              ["text-[10px]"]: isCard
            }
          )}
        >
          {person.name}
        </h1>
        <h2
          className={cn("font-semibold", `text-[calc(${jobSz}px+${fontSize}px)]`, {
            [`text-[${side.left.accent}]`]: isAccent.name,
            ["italic"]: isItalic,
            ["text-[4px]"]: isCard
          })}
        >
          {person.job}
        </h2>
      </div>
      <div
        className={cn("mt-3 flex flex-col gap-1", {
          ["mt-1"]: isCard,
          ["flex-row flex-wrap gap-3"]: layout.pos === "top"
        })}
      >
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
        {person.information &&
          person.information.map((info) => (
            <ResumePersonInfoItem
              key={info.key}
              className={cn({
                [`${isLeft ? `[&_svg]:text-[${side.left.accent}]` : `[&_svg]:text-[${side.right.accent}]`}`]:
                  isAccent.dates && info.key === "date"
              })}
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
              className={cn("underline underline-offset-[3px]", {
                [`${isLeft ? `[&_svg]:text-[${side.left.accent}]` : `[&_svg]:text-[${side.right.accent}]`}`]:
                  isAccent.linkIcons
              })}
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

export { PersonBlock }
