import { cn, formatSectionDate } from "@/shared/lib/utils"
import { ICustomization, Person, TypeIconName } from "@/shared/types"
import { Icon } from "@/shared/ui"

interface PersonBlockProps {
  isCard?: boolean
  isLeft?: boolean
  person: Person
  customization: ICustomization
}

const PersonInfoItem = ({
  icon,
  text,
  isLink = false,
  isCard,
  fontSize,
  className,
  url = ""
}: {
  icon: TypeIconName
  text: string
  isLink?: boolean
  className?: string
  url?: string
  isCard?: boolean
  fontSize: number
}) => {
  const textSize = isCard ? "4px" : `calc(5px+${fontSize}px)`
  const TextComponent = isLink ? "a" : "span"
  const linkProps = isLink
    ? {
        href: url,
        rel: "noreferrer",
        target: "_blank"
      }
    : {}

  return (
    <h5 className={cn("flex items-center gap-2", className, { "gap-[2px]": isCard })}>
      <Icon name={icon} size={isCard ? 5 : 14} />
      <TextComponent className={`text-[${textSize}] h-fit`} {...linkProps}>
        {text}
      </TextComponent>
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

  const getNameClasses = () =>
    cn("mb-1 text-3xl font-medium", `text-[calc(10px+${nameSz}px+${fontSize}px)]`, {
      [`text-[${side.left.accent}]`]: isAccent.name,
      "font-bold": isBold,
      "text-[10px]": isCard
    })

  const getJobClasses = () =>
    cn("font-semibold", `text-[calc(${jobSz}px+${fontSize}px)]`, {
      [`text-[${side.left.accent}]`]: isAccent.name,
      italic: isItalic,
      "text-[4px]": isCard
    })

  const getInfoContainerClasses = () =>
    cn("mt-3 flex flex-col gap-1", {
      "mt-1": isCard,
      "flex-row flex-wrap gap-3": layout.pos === "top"
    })

  const getLinkIconClasses = () =>
    cn("underline underline-offset-[3px]", {
      [`${isLeft ? `[&_svg]:text-[${side.left.accent}]` : `[&_svg]:text-[${side.right.accent}]`}`]:
        isAccent.linkIcons
    })

  const getInfoIconClasses = (key: string) =>
    cn({
      [`${isLeft ? `[&_svg]:text-[${side.left.accent}]` : `[&_svg]:text-[${side.right.accent}]`}`]:
        isAccent.dates && key === "date"
    })

  return (
    <div>
      <div className="leading-none">
        <h1 className={getNameClasses()}>{person.name}</h1>
        <h2 className={getJobClasses()}>{person.job}</h2>
      </div>

      <div className={getInfoContainerClasses()}>
        {person.email && (
          <PersonInfoItem icon="mail" text={person.email} isCard={isCard} fontSize={fontSize} />
        )}
        {person.phone && (
          <PersonInfoItem
            icon="phone-call"
            text={person.phone}
            isCard={isCard}
            fontSize={fontSize}
          />
        )}
        {person.address && (
          <PersonInfoItem
            icon="map-pin"
            text={person.address}
            isCard={isCard}
            fontSize={fontSize}
          />
        )}

        {person.information?.map((info) => (
          <PersonInfoItem
            key={info.key}
            className={getInfoIconClasses(info.key)}
            icon={info.icon}
            text={info.key === "date" ? formatSectionDate(info.text) : info.text}
            isCard={isCard}
            fontSize={fontSize}
          />
        ))}

        {person.links?.map((link) => (
          <PersonInfoItem
            key={link.key}
            className={getLinkIconClasses()}
            icon={link.icon}
            text={link.text}
            url={link.url}
            isLink
            isCard={isCard}
            fontSize={fontSize}
          />
        ))}
      </div>
    </div>
  )
}

export { PersonBlock }
