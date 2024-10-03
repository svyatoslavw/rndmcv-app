import { cn } from "../lib/utils"

type InfoTextProps = {
  id?: string
  text: string
  withAsterisk?: boolean
  withDoubleAsterisk?: boolean
  isSm?: boolean
}

const InfoText = ({
  id,
  text,
  withAsterisk = true,
  withDoubleAsterisk = false,
  isSm = false
}: InfoTextProps) => {
  return (
    <p
      id={id}
      className={cn(
        "font-medium text-foreground/70 hover:cursor-none hover:text-foreground",
        isSm ? "text-sm" : "text-xs"
      )}
    >
      {withDoubleAsterisk && " ** "}
      {!withDoubleAsterisk && withAsterisk && " * "}
      {text}
    </p>
  )
}

export { InfoText }
