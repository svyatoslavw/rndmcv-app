"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Checkbox,
  InfoMessage
} from "@rndm/ui/components"

import { APP_NAME } from "@/shared/config"
import { Logotype } from "@/shared/ui/logotype"
import { AuthButton } from "./AuthButton"
import { useAuthForm } from "./useAuthForm"

const AuthForm = () => {
  const { functions, state } = useAuthForm()

  return (
    <div className="flex min-h-screen flex-col justify-between p-4 md:p-8">
      <div className="flex flex-grow flex-col items-center justify-center text-center">
        <div className="mb-4 flex items-center justify-center">
          <Logotype />
        </div>
        <h1 className="mb-1 text-2xl font-bold md:text-3xl">
          Welcome to{" "}
          <span className="from-primary bg-gradient-to-tl via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
            {APP_NAME.FULL}.
          </span>
        </h1>
        <p className="text-default-500">Admin Dashboard</p>
        <div className="my-6 h-[1px] w-full rounded-full bg-neutral-500 md:w-1/2 dark:bg-neutral-800" />
        <p className="mb-4 font-medium">Start using {APP_NAME.FULL}</p>
        <div className="flex flex-col items-center space-y-2">
          {state.signInButtons.slice(0, 2).map(({ provider, title, isLoading, icon }) => (
            <AuthButton
              key={provider}
              className="min-w-[220px]"
              disabled={state.isAnyLoading}
              icon={icon}
              loading={isLoading}
              text={title}
              onClick={(e) => functions.onSignIn(e, provider)}
            />
          ))}

          <Accordion collapsible type="single" onChange={(prev) => functions.setIsExpanded(!prev)}>
            <AccordionItem
              className="rounded-2xl border-0 bg-transparent p-0 shadow-none"
              value="expand"
            >
              <AccordionTrigger className="flex min-w-[220px] items-center justify-center gap-2">
                {state.isExpanded ? `Hide more` : `Show more`}
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-2 flex flex-col items-center space-y-2">
                  {state.signInButtons.slice(2).map(({ provider, title, isLoading, icon }) => (
                    <AuthButton
                      key={provider}
                      className="min-w-[220px]"
                      disabled={state.isAnyLoading}
                      icon={icon}
                      loading={isLoading}
                      text={title}
                      onClick={(e) => functions.onSignIn(e, provider)}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2 text-center">
        <InfoMessage text="You have entered the admin panel. Use it responsibly." />
        <InfoMessage text="Some changes may affect system functionality. Please review data before saving." />
        <label className="mx-auto flex items-center gap-1">
          <Checkbox
            className="border-input data-[state=checked]:bg-muted data-[state=checked]:text-muted-foreground"
            checked
          />
          <p className="text-foreground/50 my-2 text-xs">
            By continuing, you agree to the terms of use for the admin panel.
          </p>
        </label>
      </div>
    </div>
  )
}

export { AuthForm }
