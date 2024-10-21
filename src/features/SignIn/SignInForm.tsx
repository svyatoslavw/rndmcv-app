"use client"

import { useSignInForm } from "./useSignInForm"
import { AuthButton } from "@/pages_/SignInPage/AuthButton"
import { APP_NAME, APP_TITLE } from "@/shared/lib/config"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  InfoText,
  Logotype
} from "@/shared/ui"

const SignInForm = () => {
  const { functions, state } = useSignInForm()

  return (
    <div className="flex min-h-screen flex-col justify-between p-4 md:p-8">
      <div className="flex flex-grow flex-col items-center justify-center text-center">
        <div className="mb-4 flex items-center justify-center">
          <Logotype />
        </div>
        <h1 className="mb-1 text-2xl font-semibold md:text-3xl">Welcome to {APP_NAME.FULL}</h1>
        <p className="text-default-500">Create your resume builder.</p>
        <div className="my-4 h-[1px] w-full rounded-full bg-black md:w-1/2" />
        <p className="mb-4">Start {APP_TITLE}</p>
        <div className="flex flex-col items-center space-y-2">
          {state.signInButtons.slice(0, 2).map(({ provider, title, isLoading, icon }) => (
            <AuthButton
              key={provider}
              text={title}
              credential={provider}
              icon={icon}
              disabled={state.isAnyLoading}
              className="min-w-[220px]"
              loading={isLoading}
              onClick={(e) => functions.onSignIn(e, provider)}
            />
          ))}
          <Accordion onChange={(prev) => functions.setIsExpanded(!prev)} type="single" collapsible>
            <AccordionItem
              value="expand"
              className="rounded-2xl border-0 bg-transparent p-0 shadow-none"
            >
              <AccordionTrigger className="flex min-w-[220px] items-center justify-center gap-2">
                {state.isExpanded ? `Hide more` : `Show more`}
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-2 flex flex-col items-center space-y-2">
                  {state.signInButtons.slice(2).map(({ provider, title, isLoading, icon }) => (
                    <AuthButton
                      key={provider}
                      text={title}
                      credential={provider}
                      icon={icon}
                      disabled={state.isAnyLoading}
                      className="min-w-[220px]"
                      loading={isLoading}
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
        <InfoText text="Application is in beta. We appreciate your feedback." />
        <InfoText text="Your name and email will be visible on the site and serve as your primary identifiers." />
      </div>
    </div>
  )
}

export { SignInForm }
