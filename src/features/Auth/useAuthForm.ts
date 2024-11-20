import { signIn } from "next-auth/react"
import { useMemo, useState } from "react"

import { useAppDispatch } from "@/app/store"
import { changeIsResumeSavedEnabled } from "@/entities/user"
import { PUBLIC_URLS } from "@/shared/config"
import { TAuthProvider, TLoginButton } from "@/shared/types"
import { GithubIcon, GoogleIcon, SpotifyIcon } from "@/shared/ui"

export const useAuthForm = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isLoading, setIsLoading] = useState<Record<TAuthProvider, boolean>>({
    github: false,
    google: false,
    spotify: false
  })

  const isAnyLoading = isLoading.github || isLoading.google || isLoading.spotify
  const dispatch = useAppDispatch()

  const onSignIn = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    provider: TAuthProvider
  ) => {
    e.preventDefault()
    setIsLoading((prev) => ({ ...prev, [provider]: true }))
    try {
      dispatch(changeIsResumeSavedEnabled({ isEnabled: true }))
      await signIn(provider, { callbackUrl: PUBLIC_URLS.HOME })
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
      },
      {
        provider: "spotify",
        title: "Continue with Spotify",
        isLoading: isLoading.spotify,
        icon: SpotifyIcon
      }
    ]
  }, [isLoading.github, isLoading.google, isLoading.spotify])

  return {
    functions: { onSignIn, setIsExpanded },
    state: { isExpanded, signInButtons, isAnyLoading }
  }
}
