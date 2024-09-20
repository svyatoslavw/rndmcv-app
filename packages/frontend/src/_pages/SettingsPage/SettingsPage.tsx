"use client"

import { SettingsBlock } from "@/entities/user"
import {
  ChangeAccountSettings,
  ChangeAutosaveSettings,
  ChangePremium,
  ChangeThemeSettings,
  SignOutFromAccount
} from "@/features"

const SettingsPage = () => {
  return (
    <div className="flex w-full flex-col items-center space-y-5">
      <h1 className="text-4xl font-bold">Settings</h1>
      <SettingsBlock heading="General" description="Configure your general preferences.">
        <ChangeThemeSettings />
        <ChangeAutosaveSettings />
      </SettingsBlock>
      <SettingsBlock heading="Account" description="Change your account preferences.">
        <ChangeAccountSettings />
        <ChangePremium />
        <SignOutFromAccount />
      </SettingsBlock>
    </div>
  )
}
export { SettingsPage }
