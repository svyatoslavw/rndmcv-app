"use client"

import { useMemo, useState } from "react"

import { PricingCard } from "./PricingCard"
import { PricingHeader } from "./PricingHeader"
import { PricingSwitcher } from "./PricingSwitcher"
import { useGetProfileQuery } from "@/entities/user"
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

export const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false)
  const togglePricingPeriod = (value: string) => setIsYearly(parseInt(value) === 1)
  const { data } = useGetProfileQuery()

  const plans: PricingCardProps[] = useMemo(() => {
    return [
      {
        title: "Basic",
        monthlyPrice: 0,
        yearlyPrice: 0,
        description: "Essential features you need to get started",
        features: ["Resume - 🎁 1 free", "Job Tracker - ✖️", "🤖 AI Features - ✖️"],
        actionLabel:
          data?.subscription.type === EnumSubscriptionType.BASIC ? "Active" : "Get Started",
        priceId: "none"
      },
      {
        title: "Pro",
        monthlyPrice: 3.99,
        yearlyPrice: 39.9,
        description: "Perfect for owners of small & medium businessess",
        features: ["Resume - 3", "Job Tracker - ✖️", "🤖 AI Features - ✖️"],
        actionLabel:
          data?.subscription.type === EnumSubscriptionType.PREMIUM ? "Active" : "Get Started",
        isPopular: true,
        priceId: "price_1PvyHmGfITKCO87W3zDyNFMp"
      },
      {
        title: "Premium",
        monthlyPrice: 5.99,
        yearlyPrice: 59.9,
        description: "Dedicated support and infrastructure to fit your needs",
        features: ["Resume - Unlimited", "Job Tracker - ✔️", "🤖 AI Features - ✔️"],
        actionLabel:
          data?.subscription.type === EnumSubscriptionType.PREMIUM ? "Active" : "Get Started",
        isExclusive: true,
        priceId: "price_1Pw9quGfITKCO87W1DxEV9zU"
      }
    ]
  }, [data])

  return (
    <div className="py-4">
      <PricingHeader title="Pricing Plans" subtitle="Choose the plan that's right for you" />
      <PricingSwitcher onSwitch={togglePricingPeriod} />
      <section className="mt-8 flex flex-col justify-center gap-8 sm:flex-row sm:flex-wrap">
        {plans.map((plan) => {
          return <PricingCard key={plan.title} {...plan} isYearly={isYearly} />
        })}
      </section>
    </div>
  )
}
