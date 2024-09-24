"use client"

import { CheckIcon, LoaderIcon } from "lucide-react"
import Link from "next/link"
import { memo } from "react"

import { IPricingCard } from "./PricingList"
import { PUBLIC_URL } from "@/shared/lib/config"
import { EnumSubscriptionType, IUser } from "@/shared/lib/types"
import { Button } from "@/shared/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/shared/ui/card"

interface PricingCardProps {
  tier: IPricingCard
  profile?: IUser
  isYearly?: boolean
  isLoading: boolean
  onRedirectToCheckout: (email: string, priceId: string) => Promise<void>
  onManageBilling: () => Promise<void>
}

export const PricingCard = memo(
  ({
    isYearly,
    isLoading,
    tier,
    profile,
    onManageBilling,
    onRedirectToCheckout
  }: PricingCardProps) => {
    const isActivePlan = profile?.subscription.type === tier.type
    const priceId = isYearly ? tier.yearlyPriceId : tier.monthlyPriceId

    return (
      <Card className="flex h-full flex-col justify-start bg-gradient-to-br from-white via-zinc-50 to-zinc-200/70">
        <CardHeader>
          <CardTitle>{tier.name}</CardTitle>
          <CardDescription className="h-8">{tier.description}</CardDescription>
        </CardHeader>
        <CardContent className="h-60">
          <div className="mb-4 text-3xl font-bold">
            ${isYearly ? tier.yearlyPrice.toFixed(2) : tier.monthlyPrice.toFixed(2)}
            <span className="text-sm font-normal">/{isYearly ? "year" : "month"}</span>
          </div>
          <ul className="mt-4 space-y-2">
            {tier.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center">
                <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          {profile ? (
            <Button
              disabled={isLoading || tier.type === profile.subscription.type}
              onClick={() => {
                tier.type === EnumSubscriptionType.BASIC
                  ? onManageBilling()
                  : onRedirectToCheckout(profile.email, priceId)
              }}
              variant={isActivePlan ? "outline" : "default"}
              className="relative w-full scale-105"
            >
              {isLoading && <LoaderIcon size={16} className="mr-2 animate-spin" />}
              {isActivePlan ? "Current Plan" : "Get Started"}
              {!isActivePlan && (
                <div className="absolute -inset-1.5 -z-10 rounded-lg bg-gradient-to-b from-primary/60 to-primary opacity-75 blur" />
              )}
            </Button>
          ) : (
            <Button variant="outline" className="w-full scale-105">
              <Link className="w-full" href={PUBLIC_URL.auth()}>
                Sign Up
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    )
  }
)

PricingCard.displayName = "PricingCard"
