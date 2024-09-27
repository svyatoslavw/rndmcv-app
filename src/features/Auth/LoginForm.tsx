"use client"

import { AuthError } from "next-auth"
import { signIn } from "next-auth/react"
import { useMemo, useState } from "react"

import { AuthButton } from "@/pages_/AuthPage/AuthButton"
import { APP_NAME, APP_TITLE } from "@/shared/lib/config"
import { TAuthProvider, TAuthProvidersLoading, TLoginButton } from "@/shared/lib/types"
import { cn } from "@/shared/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  GithubIcon,
  GoogleIcon,
  Logotype,
  SpotifyIcon
} from "@/shared/ui"

const LoginForm = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isLoading, setIsLoading] = useState<TAuthProvidersLoading>({
    github: false,
    google: false,
    spotify: false
  })

  const isAnyLoading = isLoading.github || isLoading.google || isLoading.spotify

  const onSignIn = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    provider: TAuthProvider
  ) => {
    e.preventDefault()
    setIsLoading((prev) => ({ ...prev, [provider]: true }))
    try {
      await signIn(provider, { redirect: true })
    } catch (err) {
      if (err instanceof AuthError) {
        console.error(err)
      }
      throw err
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
        icon: <GithubIcon className="size-4" />
      },
      {
        provider: "google",
        title: "Continue with Google",
        isLoading: isLoading.google,
        icon: <GoogleIcon className="size-4" />
      },
      {
        provider: "spotify",
        title: "Continue with Spotify",
        isLoading: isLoading.spotify,
        icon: <SpotifyIcon className="size-4" />
      }
    ]
  }, [isLoading.github, isLoading.google, isLoading.spotify])

  return (
    <div className="flex min-h-screen flex-col justify-between p-4 md:p-8">
      <div className="flex flex-grow flex-col items-center justify-center text-center">
        <div className="mb-4 flex items-center justify-center">
          <Logotype />
        </div>
        <h1 className="mb-1 text-2xl font-semibold md:text-3xl">Welcome to {APP_NAME.FULL}</h1>
        <p className="text-default-500">AI-powered resume builder.</p>
        <div className="my-4 h-[1px] w-full rounded-full bg-black md:w-1/2" />
        <p className="mb-4">Start {APP_TITLE}</p>
        <div className="flex flex-col items-center space-y-2">
          {signInButtons.slice(0, 2).map(({ provider, title, isLoading, icon }) => (
            <AuthButton
              key={provider}
              text={title}
              credential={provider}
              icon={icon}
              disabled={isAnyLoading}
              className="min-w-[220px]"
              loading={isLoading}
              onClick={(e) => onSignIn(e, provider)}
            />
          ))}
          <Accordion onChange={(prev) => setIsExpanded(!prev)} type="single" collapsible>
            <AccordionItem
              value="expand"
              className="rounded-2xl border-0 bg-transparent p-0 shadow-none"
            >
              <AccordionTrigger className="flex min-w-[220px] items-center justify-center gap-2">
                {isExpanded ? `Hide more` : `Show more`}
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-2 flex flex-col items-center space-y-2">
                  {signInButtons.slice(2).map(({ provider, title, isLoading, icon }) => (
                    <AuthButton
                      key={provider}
                      text={title}
                      credential={provider}
                      icon={icon}
                      disabled={isAnyLoading}
                      className="min-w-[220px]"
                      loading={isLoading}
                      onClick={(e) => onSignIn(e, provider)}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2 text-center">
        <InfoText text="Signing in does not create an account." />
        <InfoText text="AES encryption protects your sensitive data." />
        <InfoText text="Your name and email will be visible on the site and serve as your primary identifiers." />
      </div>
    </div>
  )
}

export { LoginForm }

type TProps = {
  id?: string
  text: string
  withAsterisk?: boolean
  withDoubleAsterisk?: boolean
  isSm?: boolean
}

export default function InfoText({
  id,
  text,
  withAsterisk = true,
  withDoubleAsterisk = false,
  isSm = false
}: TProps) {
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
