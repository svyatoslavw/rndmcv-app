import { Button } from "@rndm/ui/components"
import { Loader2Icon } from "lucide-react"
import React from "react"

type IconType = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, "ref"> & React.RefAttributes<SVGSVGElement>
>

interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  icon: IconType
  loading: boolean
}

const AuthButton = React.forwardRef<HTMLButtonElement, AuthButtonProps>(
  ({ icon: Icon, loading, text, ...props }, ref) => {
    return (
      <Button
        {...props}
        ref={ref}
        className="bg-foreground text-background hover:bg-foreground/70 gap-2 border-neutral-700 px-5 dark:border-neutral-500"
      >
        {loading ? <Loader2Icon className="size-4 animate-spin" /> : <Icon className="size-4" />}
        <span>{text}</span>
      </Button>
    )
  }
)

AuthButton.displayName = "AuthButton"

export { AuthButton }
