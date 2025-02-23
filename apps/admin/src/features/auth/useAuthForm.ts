import { GithubIcon, GoogleIcon } from "@rndm/ui/icons"
import { signIn } from "next-auth/react"
import { useMemo, useState } from "react"

import { ADMIN_URLS } from "@/shared/config"
import { TAuthProvider, TLoginButton } from "@/shared/types"

export const useAuthForm = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isLoading, setIsLoading] = useState<Record<TAuthProvider, boolean>>({
    github: false,
    google: false
  })

  const isAnyLoading = isLoading.github || isLoading.google

  const onSignIn = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    provider: TAuthProvider
  ) => {
    e.preventDefault()
    setIsLoading((prev) => ({ ...prev, [provider]: true }))
    try {
      await signIn(provider, { callbackUrl: ADMIN_URLS.DASHBOARD })
    } catch (error) {
      /* eslint-disable-next-line */
      console.error("Failed to sign in", error)
    } finally {
      setIsLoading((prev) => ({ ...prev, [provider]: false }))
    }
  }

  const signInButtons = useMemo((): TLoginButton[] => {
    return [
      {
        provider: "github",
        title: "Continue with GitHub",
        isLoading: isLoading.github,
        icon: GithubIcon
      },
      {
        provider: "google",
        title: "Continue with Google",
        isLoading: isLoading.google,
        icon: GoogleIcon
      }
    ]
  }, [isLoading.github, isLoading.google])

  return {
    functions: { onSignIn, setIsExpanded },
    state: { isExpanded, signInButtons, isAnyLoading }
  }
}
