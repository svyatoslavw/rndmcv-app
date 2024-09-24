"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import { AuthButton } from "../../pages_/AuthPage/AuthButton"

import { useRegisterForm } from "@/features/Auth/useRegisterForm"
import { PUBLIC_URL } from "@/shared/lib/config"
import { AppleIcon, DiscordIcon, GithubIcon } from "@/shared/ui"
import { Button } from "@/shared/ui/button"
import { GoogleIcon } from "@/shared/ui/icons/GoogleIcon"
import { Input } from "@/shared/ui/input"
import { PasswordInput } from "@/shared/ui/password-input"

const RegisterForm = () => {
  const { form, functions, state } = useRegisterForm()

  return (
    <div className="mx-auto flex w-[450px] flex-col justify-center space-y-6 rounded-xl px-5 pb-8">
      <Link
        className="flex items-center justify-center text-sm text-gray-400"
        href={PUBLIC_URL.home()}
      >
        <ArrowLeft size={16} className="mr-2" /> Go home
      </Link>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold">Register an your account</h1>
        <h3 className="text-sm">Enter required details for registration</h3>
      </div>
      <form className="flex flex-col gap-4" onSubmit={functions.onSubmit}>
        <Input
          heading="Email"
          autoComplete="email webauthn"
          autoCapitalize="none"
          autoCorrect="off"
          type="email"
          placeholder="your personal email"
          {...form.register("email")}
        />
        <Input
          heading="Login"
          autoComplete="name webauthn"
          autoCorrect="off"
          placeholder="your personal login"
          {...form.register("login")}
        />

        <PasswordInput
          heading="Password"
          id="password"
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect="off"
          placeholder="secret password"
          {...form.register("password")}
        />
        <PasswordInput
          heading="Confirm Password"
          id="confirmPassword"
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect="off"
          placeholder="confirm your secret password"
          {...form.register("confirmPassword")}
        />
        <Button type="submit" disabled={state.isLoading || !form.formState.isDirty}>
          Continue
        </Button>
        <div className="text-start text-xs text-muted-foreground">
          By creating an account, you agree to our{" "}
          <Link href="#" className="underline" prefetch={false}>
            Terms of Service
          </Link>
          . We do not sell your personal data. To learn more about how we collect, use, share and
          protect it please read our{" "}
          <Link href="#" className="underline" prefetch={false}>
            Privacy Policy
          </Link>
          .
        </div>
        <div
          onClick={functions.onSignin}
          className="mx-auto cursor-pointer text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          have account <span className="font-medium">already</span>
        </div>
      </form>
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

export { RegisterForm }
