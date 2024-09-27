"use client"

import { loadStripe } from "@stripe/stripe-js"
import { useCallback, useState } from "react"
import toast from "react-hot-toast"
import Stripe from "stripe"

import { PricingCard } from "./PricingCard"
import { checkout, manageBilling } from "@/app/(site)/pricing/actions"
import { useProfile } from "@/entities/user"
import { EnumSubscriptionType } from "@/shared/lib/types"
import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui"

export interface IPricingCard {
  name: string
  type: EnumSubscriptionType
  monthlyPrice: number
  yearlyPrice: number
  monthlyPriceId: string
  yearlyPriceId: string
  description: string
  features: string[]
}

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
  const { profile } = useProfile()
  const [isLoading, setIsLoading] = useState(false)

  const onRedirectToCheckout = useCallback(async (email: string, priceId: string) => {
    setIsLoading(true)
    try {
      const response = await checkout(email, [{ product: { price_id: priceId } }])
      const sessionId = JSON.parse(response).id

      const stripe = await loadStripe(process.env.STRIPE_PUBLISHABLE_KEY!)

      if (!stripe) return

      await stripe.redirectToCheckout({ sessionId })
    } catch (error) {
      toast.error("Checkout process failed")
    } finally {
      setIsLoading(false)
    }
  }, [])

  const onManageBilling = useCallback(async () => {
    setIsLoading(true)
    try {
      if (!profile?.subscription.customerId) return

      const response = await manageBilling(profile.subscription.customerId)
      const session = JSON.parse(response) as Stripe.Response<Stripe.BillingPortal.Session>

      window.location.href = session.url
    } catch (error) {
      toast.error("Failed to manage billing")
    } finally {
      setIsLoading(false)
    }
  }, [profile])

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
