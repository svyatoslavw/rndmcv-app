"use client"

import { SettingsSection, useGetProfileQuery } from "@/entities/user"
import { Button } from "@/shared/ui"

const SignOutFromAccount = () => {
  const { data } = useGetProfileQuery()
  if (!data) return null
  return (
    <SettingsSection
      heading="Exit account"
      description="Signing out of your account will end your current session. You will need to sign in again or switch accounts."
    >
      <div className="mb-4 flex items-center gap-2">
        <div className="size-10 rounded-full bg-primary" />
        <div className="font-semibold">
          <h2 className="text-sm">{data.login}</h2>
          <p className="text-xs">{data.email}</p>
        </div>
      </div>
      <Button size={"sm"} className="w-full">
        Sign out
      </Button>
    </SettingsSection>
  )
}

export { SignOutFromAccount }
