"use client"

import { AuthButton } from "./AuthButton"
import { useRegisterForm } from "@/entities/user/hooks/useRegisterForm"
import { Button } from "@/shared/ui/button"
import { GoogleIcon } from "@/shared/ui/icons/GoogleIcon"
import { Input } from "@/shared/ui/input"
import { PasswordInput } from "@/shared/ui/password-input"

const RegisterForm = () => {
  const { form, functions, state } = useRegisterForm()

  return (
    <div className="xs:w-[230px] mx-auto flex flex-col justify-center space-y-6 rounded-xl px-5 sm:w-[280px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold">Register an your account</h1>
        <h3 className="text-sm">Enter required details for registration</h3>
      </div>
      <form className="flex flex-col gap-4" onSubmit={functions.onSubmit}>
        <Input
          heading="Email"
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect="off"
          type="email"
          placeholder="your personal email"
          {...form.register("email")}
        />
        <Input
          heading="Login"
          autoComplete="login"
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
        <div
          onClick={functions.onSignin}
          className="mx-auto cursor-pointer text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          have account <span className="font-medium">already</span>
        </div>
      </form>
      <div className="mx-auto flex w-full items-center justify-evenly text-xs before:mr-4 before:block before:h-px before:flex-grow before:bg-secondary after:ml-4 after:block after:h-px after:flex-grow after:bg-secondary">
        OR CONTINUE WITH
      </div>
      <div className="flex flex-col gap-3">
        {/* <AuthButton text="github">
          <GithubIcon className="size-5" />
        </AuthButton> */}
        <AuthButton credential="google" text="google">
          <GoogleIcon className="size-5" />
        </AuthButton>
      </div>
    </div>
  )
}

export { RegisterForm }
