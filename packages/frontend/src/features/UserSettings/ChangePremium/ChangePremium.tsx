"use client"

import { formatDate } from "date-fns"
import { EllipsisVerticalIcon } from "lucide-react"
import Link from "next/link"

import { SettingsSection, useProfile } from "@/entities/user"
import { Button } from "@/shared/ui"

const ChangePremium = () => {
  const { profile } = useProfile()

  return (
    <SettingsSection
      heading="Your plan"
      description="Your current subscription plan. You can change it at any time."
    >
      <div className="mb-4 flex items-center justify-between gap-2 rounded-xl border-2 border-primary bg-white px-6 py-5">
        <h5 className="font-semibold">{profile?.subscription?.type}</h5>
        <div className="flex items-center gap-1 text-xs">
          Expires at{" "}
          {profile?.subscription.expiresAt &&
            formatDate(profile.subscription.expiresAt, "dd MMM yyyy")}
          <EllipsisVerticalIcon
            size={16}
            className="cursor-pointer opacity-40 transition-opacity hover:opacity-100"
          />
        </div>
      </div>
      <Button variant={"link"} className="w-full">
        <Link href="/pricing">Change</Link>
      </Button>
    </SettingsSection>
  )
}

export { ChangePremium }
