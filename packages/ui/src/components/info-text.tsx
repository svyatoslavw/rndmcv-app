import { cn } from "../lib/utils"

type InfoMessageProps = {
  id?: string
  text: string
  asterisk?: "single" | "double" | "none"
  size?: "md" | "sm" | "xs"
}

const InfoMessage = ({ id, text, asterisk = "single", size = "xs" }: InfoMessageProps) => {
  return (
    <p
      className={cn("font-medium text-foreground/60 hover:cursor-none hover:text-foreground", {
        [`text-${size}`]: size
      })}
      id={id}
    >
      {asterisk === "double" && " ** "}
      {asterisk === "single" && " * "}
      {text}
    </p>
  )
}

export { InfoMessage }
