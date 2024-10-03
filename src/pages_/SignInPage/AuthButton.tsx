import { Loader2Icon } from "lucide-react"
import React from "react"

import { TIconType } from "@/shared/lib/types"
import { Button } from "@/shared/ui"

interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  credential: string
  icon: TIconType
  loading: boolean
}

const AuthButton = React.forwardRef<HTMLButtonElement, AuthButtonProps>(
  ({ children, icon: Icon, loading, text, credential, className, ...props }, ref) => {
    return (
      <Button
        {...props}
        ref={ref}
        className="gap-2 bg-foreground px-5 text-background hover:bg-foreground/70"
      >
        {loading ? <Loader2Icon className="size-4 animate-spin" /> : <Icon className="size-4" />}
        <span> {text}</span>
      </Button>
    )
  }
)
AuthButton.displayName = "AuthButton"

export { AuthButton }
