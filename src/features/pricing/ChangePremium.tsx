"use client"

import { formatDate } from "date-fns"
import { EllipsisVerticalIcon } from "lucide-react"
import Link from "next/link"

import { usePricing } from "./usePricing"
import { SettingsSection } from "@/entities/user"
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/shared/ui"

const ChangePremium = () => {
  const { isLoading, onManageBilling, onRedirectToCheckout, profile } = usePricing()

  return (
    <SettingsSection
      heading="Your plan"
      description="Your current subscription plan. You can change it at any time."
    >
      <div className="mb-4 flex items-center justify-between gap-2 rounded-xl border-2 border-primary bg-background px-6 py-5">
        <h5 className="font-semibold">{profile?.subscription?.type}</h5>
        <div className="flex items-center gap-1 text-xs">
          Expires at{" "}
          {profile?.subscription.expiresAt &&
            formatDate(profile.subscription.expiresAt, "dd MMM yyyy")}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <EllipsisVerticalIcon
                size={16}
                className="cursor-pointer opacity-40 transition-opacity hover:opacity-100"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Subscription</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Change plan</DropdownMenuItem>
                <DropdownMenuItem>Cancel subscription</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Button variant={"link"} className="w-full">
        <Link href="/pricing">Change</Link>
      </Button>
    </SettingsSection>
  )
}

export { ChangePremium }
