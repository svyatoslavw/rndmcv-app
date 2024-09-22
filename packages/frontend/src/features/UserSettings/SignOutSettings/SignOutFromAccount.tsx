"use client"

import Image from "next/image"

import { SettingsSection, useProfile } from "@/entities/user"
import { Button } from "@/shared/ui"

const SignOutFromAccount = () => {
  const { profile } = useProfile()
  if (!profile) return null
  return (
    <SettingsSection
      heading="Exit account"
      description="Signing out of your account will end your current session. You will need to sign in again or switch accounts."
    >
      <div className="mb-4 flex items-center gap-2">
        <Image
          alt={profile.login}
          src={profile.image}
          className="aspect-square rounded-full object-cover"
          width={50}
          height={50}
        />
        <div className="font-semibold">
          <h2 className="text-sm">{profile.login}</h2>
          <p className="text-xs font-medium">{profile.email}</p>
        </div>
      </div>
      <Button size={"sm"} className="w-full">
        Sign out
      </Button>
    </SettingsSection>
  )
}

export { SignOutFromAccount }
