import React from "react"

import { getAuthURL } from "@/shared/lib/utils"

interface AuthButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string
  credential: string
}

const AuthButton = React.forwardRef<HTMLAnchorElement, AuthButtonProps>(
  ({ children, text, credential }, ref) => {
    return (
      <a
        ref={ref}
        href={getAuthURL(credential)}
        className="flex w-full items-center justify-center gap-3 rounded-lg bg-primary px-3 py-2 font-medium text-background transition-colors hover:bg-primary/80 dark:text-background"
      >
        {children}
        <span className="capitalize">{text}</span>
      </a>
    )
  }
)
AuthButton.displayName = "AuthButton"

export { AuthButton }
