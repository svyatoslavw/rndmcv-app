"use client"

import { PricingCard } from "../../widgets/Pricing/PricingCard"

import { usePricing } from "@/features/pricing/usePricing"
import { EnumSubscriptionType, IPricingCard } from "@/shared/lib/types"
import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui"

interface IPricingListProps {
  isYearly?: boolean
  hasBasic?: boolean
}

const tiers: IPricingCard[] = [
  {
    name: "Basic",
    type: EnumSubscriptionType.BASIC,
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Perfect for individuals who just want to get started.",
    features: ["1 resume", "Basic support"],
    monthlyPriceId: "",
    yearlyPriceId: ""
  },
  {
    name: "Standard",
    type: EnumSubscriptionType.STANDART,
    monthlyPrice: 2.99,
    yearlyPrice: 29.99,
    description: "Perfect for owners of small & medium businesses",
    features: ["3 resumes", "Advanced support"],
    monthlyPriceId: "price_1PvyHmGfITKCO87W3zDyNFMp",
    yearlyPriceId: "price_1Q2eW5GfITKCO87WBhqPtiBB"
  },
  {
    name: "Premium",
    type: EnumSubscriptionType.PREMIUM,
    monthlyPrice: 4.99,
    yearlyPrice: 49.99,
    description: "Dedicated support and infrastructure to fit your needs",
    features: ["Unlimited resumes", "24/7 dedicated support", "🤖AI Features"],
    monthlyPriceId: "price_1Pw9quGfITKCO87W1DxEV9zU",
    yearlyPriceId: "price_1Q2eIUGfITKCO87WSNDhYc8L"
  }
]

const PricingList = ({ isYearly, hasBasic = true }: IPricingListProps) => {
  const { isLoading, onManageBilling, onRedirectToCheckout, profile } = usePricing()

  return (
    <section
      className={cn("mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3", {
        "md:grid-cols-2": !hasBasic
      })}
    >
      {(hasBasic ? tiers : tiers.slice(1)).map((tier) => (
        <PricingCard
          key={tier.type}
          {...{ isLoading, onManageBilling, onRedirectToCheckout, profile, tier, isYearly }}
        />
      ))}
      <div className="col-span-full flex w-full justify-end">
        <Button
          disabled={isLoading || !profile?.subscription.customerId}
          variant={"outline"}
          onClick={onManageBilling}
        >
          Manage Plans
        </Button>
      </div>
    </section>
  )
}

export { PricingList }
