import { cn } from "../lib/utils"

type InfoMessageProps = {
  id?: string
  text: string
  asterisk?: "single" | "double" | "none"
  size?: "md" | "sm" | "xs"
  className?: string
}

const InfoMessage = ({
  id,
  text,
  asterisk = "single",
  size = "xs",
  className
}: InfoMessageProps) => {
  return (
    <p
      className={cn(
        "text-foreground/60 hover:text-foreground font-medium hover:cursor-none",
        { [`text-${size}`]: size },
        className
      )}
      id={id}
    >
      {asterisk === "double" && " ** "}
      {asterisk === "single" && " * "}
      {text}
    </p>
  )
}

export { InfoMessage }
