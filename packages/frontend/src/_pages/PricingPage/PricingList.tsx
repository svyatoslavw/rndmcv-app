import { useMemo } from "react"

import { PricingCard } from "./PricingCard"
import { useProfile } from "@/entities/user"
import { EnumSubscriptionType } from "@/shared/lib/types"

export type PricingCardProps = {
  isYearly?: boolean
  title: string
  monthlyPrice?: number
  yearlyPrice?: number
  description: string
  features: string[]
  actionLabel: string
  isPopular?: boolean
  isExclusive?: boolean
  priceId: string
}

interface IPricingListProps {
  isYearly?: boolean
  hasBasic?: boolean
}

const PricingList = ({ isYearly, hasBasic = true }: IPricingListProps) => {
  const { profile } = useProfile()

  const plans: PricingCardProps[] = useMemo(() => {
    const basePlans = [
      {
        title: "Basic",
        monthlyPrice: 0,
        yearlyPrice: 0,
        description: "Essential features you need to get started",
        features: ["📑Resume - 🎁 1 free"],
        actionLabel:
          profile?.subscription.type === EnumSubscriptionType.BASIC ? "Active" : "Get Started",
        priceId: "none"
      },
      {
        title: "Standard",
        monthlyPrice: 3.99,
        yearlyPrice: 39.9,
        description: "Perfect for owners of small & medium businesses",
        features: ["📑Resume - 3", "🗓️Job Tracker"],
        actionLabel:
          profile?.subscription.type === EnumSubscriptionType.STANDART ? "Active" : "Get Started",
        isPopular: true,
        priceId: "price_1PvyHmGfITKCO87W3zDyNFMp"
      },
      {
        title: "Premium",
        monthlyPrice: 5.99,
        yearlyPrice: 59.9,
        description: "Dedicated support and infrastructure to fit your needs",
        features: ["📑Resume - Unlimited", "🗓️Job Tracker", "🤖AI Features"],
        actionLabel:
          profile?.subscription.type === EnumSubscriptionType.PREMIUM ? "Active" : "Get Started",
        isExclusive: true,
        priceId: "price_1Pw9quGfITKCO87W1DxEV9zU"
      }
    ]

    if (!hasBasic) basePlans.shift()

    return basePlans
  }, [profile, hasBasic])

  return (
    <section className="mt-8 flex flex-col justify-center gap-8 sm:flex-row sm:flex-wrap">
      {plans.map((plan) => {
        return <PricingCard key={plan.title} {...plan} isYearly={isYearly} />
      })}
    </section>
  )
}

export { PricingList }
