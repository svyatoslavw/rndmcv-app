"use client"

import { SettingsBlock, SettingsSection } from "@/entities/user"
import { ChangeAutosaveSettings, ChangeThemeSettings, SignOutFromAccount } from "@/features"
import type { IUser } from "@/shared/types"
import { PageDescription, PageHeader, PageTitle, PageWrapper } from "@/shared/ui"

const SettingsPage = ({ profile }: { profile: IUser | undefined }) => {
  return (
    <PageWrapper className="gap-5">
      <PageHeader>
        <PageTitle content="My Resumes">Settings</PageTitle>
        <PageDescription>Manage your account settings.</PageDescription>
      </PageHeader>
      <SettingsBlock description="Configure your general preferences." heading="General">
        <SettingsSection
          description="Select your favorite theme to give the app a new look that matches your style."
          heading="Theme"
        >
          <ChangeThemeSettings />
        </SettingsSection>
        {profile && (
          <SettingsSection
            description="Automatically save your resume at the specified interval."
            heading="Auto Save"
          >
            <ChangeAutosaveSettings />
          </SettingsSection>
        )}
      </SettingsBlock>
      {profile && (
        <SettingsBlock description="Change your account preferences." heading="Account">
          <SettingsSection
            description="Signing out of your account will end your current session. You will need to sign in again or switch accounts."
            heading="Exit account"
          >
            <SignOutFromAccount profile={profile} />
          </SettingsSection>
        </SettingsBlock>
      )}
    </PageWrapper>
  )
}

export { SettingsPage }
