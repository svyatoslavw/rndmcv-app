"use client"

import { ArrowLeft, Loader2Icon } from "lucide-react"
import Link from "next/link"

import { AuthButton } from "./AuthButton"
import { useLoginForm } from "@/entities/user/hooks/useLoginForm"
import {
  AppleIcon,
  Button,
  DiscordIcon,
  GithubIcon,
  GoogleIcon,
  Input,
  PasswordInput
} from "@/shared/ui"

const LoginForm = () => {
  const { form, functions, state } = useLoginForm()

  return (
    <div className="mx-auto flex w-[450px] flex-col justify-center space-y-6 rounded-xl px-5">
      <Link className="flex items-center justify-center text-sm text-gray-400" href="/">
        <ArrowLeft size={16} className="mr-2" /> Go home
      </Link>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold">Login to your account</h1>
        <h3 className="text-sm">Enter your email and password</h3>
      </div>
      <form onSubmit={functions.onSubmit} className="flex flex-col gap-4">
        <Input
          autoComplete="email webauthn"
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
      <div className="flex w-full gap-0.5">
        <AuthButton
          className="rounded-l-lg bg-black text-background hover:bg-black/85"
          credential="apple"
          text="apple"
        >
          <AppleIcon className="size-6" />
        </AuthButton>
        <AuthButton credential="google" text="google">
          <GoogleIcon className="size-6" />
        </AuthButton>
        <AuthButton
          className="bg-blue-600 text-background hover:bg-blue-600/85"
          credential="discord"
          text="discord"
        >
          <DiscordIcon className="size-6" />
        </AuthButton>
        <AuthButton
          className="rounded-r-lg bg-black text-background hover:bg-black/85"
          credential="github"
          text="github"
        >
          <GithubIcon className="size-6" />
        </AuthButton>
      </div>
    </div>
  )
}

export { LoginForm }
