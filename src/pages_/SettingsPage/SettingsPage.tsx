"use client"

import { SettingsBlock, useProfile } from "@/entities/user"
import { ChangeAutosaveSettings, ChangeThemeSettings, SignOutFromAccount } from "@/features"

const SettingsPage = () => {
  const { profile } = useProfile()

  return (
    <div className="flex w-full flex-col items-center space-y-5">
      <h1 className="text-4xl font-bold">Settings</h1>
      <SettingsBlock description="Configure your general preferences." heading="General">
        <ChangeThemeSettings />
        {profile && <ChangeAutosaveSettings />}
      </SettingsBlock>
      {profile && (
        <SettingsBlock description="Change your account preferences." heading="Account">
          <SignOutFromAccount />
        </SettingsBlock>
      )}
    </div>
  )
}

export { SettingsPage }
