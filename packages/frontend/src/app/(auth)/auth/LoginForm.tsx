"use client"

import { Loader2Icon } from "lucide-react"

import { AuthButton } from "./AuthButton"
import { useLoginForm } from "@/entities/user/hooks/useLoginForm"
import { Button, GithubIcon, GoogleIcon, Input, PasswordInput } from "@/shared/ui"

const LoginForm = () => {
  const { form, functions, state } = useLoginForm()

  return (
    <div className="xs:w-[230px] mx-auto flex flex-col justify-center space-y-6 rounded-xl px-5 sm:w-[280px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold">Login to your account</h1>
        <h3 className="text-sm">Enter your email and password</h3>
      </div>
      <form onSubmit={functions.onSubmit} className="flex flex-col gap-4">
        <Input
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect="off"
          placeholder="your email or login"
          {...form.register("email")}
        />

        <PasswordInput
          id="password"
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect="off"
          placeholder="secret password"
          {...form.register("password")}
        />
        <Button
          type="submit"
          className="w-full"
          disabled={state.isLoading || !form.formState.isDirty}
        >
          {state.isLoading && <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />}
          Sign in
        </Button>
        <Button
          type="button"
          variant={"link"}
          onClick={functions.onSignup}
          className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          create your account
        </Button>
      </form>
      {/*  */}
      <div className="mx-auto flex w-full items-center justify-evenly text-xs before:mr-4 before:block before:h-px before:flex-grow before:bg-black/30 after:ml-4 after:block after:h-px after:flex-grow after:bg-black/30">
        OR CONTINUE WITH
      </div>
      <div className="flex flex-col gap-3">
        <AuthButton credential="google" text="google">
          <GoogleIcon className="size-5" />
        </AuthButton>
        <AuthButton credential="github" text="github">
          <GithubIcon className="size-5" />
        </AuthButton>
      </div>
    </div>
  )
}

export { LoginForm }
