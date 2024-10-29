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
      className={cn(
        "font-medium text-foreground/70 hover:cursor-none hover:text-foreground",
        isSm ? "text-sm" : "text-xs"
      )}
      id={id}
    >
      {withDoubleAsterisk && " ** "}
      {!withDoubleAsterisk && withAsterisk && " * "}
      {text}
    </p>
  )
}

export { InfoText }
