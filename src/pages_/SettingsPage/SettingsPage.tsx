"use client"

import { SettingsBlock, useProfile } from "@/entities/user"
import {
  ChangeAutosaveSettings,
  ChangeColorSchemeSettings,
  ChangeThemeSettings,
  SignOutFromAccount
} from "@/features"

const SettingsPage = () => {
  const { profile } = useProfile()

  return (
    <div className="flex w-full flex-col items-center space-y-5">
      <h1 className="text-4xl font-bold">Settings</h1>
      <SettingsBlock heading="General" description="Configure your general preferences.">
        <ChangeThemeSettings />
        <ChangeColorSchemeSettings />
        {profile && <ChangeAutosaveSettings />}
      </SettingsBlock>
      {profile && (
        <SettingsBlock heading="Account" description="Change your account preferences.">
          <SignOutFromAccount />
        </SettingsBlock>
      )}
    </div>
  )
}
export { SettingsPage }
