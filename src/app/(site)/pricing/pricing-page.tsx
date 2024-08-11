"use client"

import { useState } from "react"

import { PricingCard } from "./pricing-card"
import { PricingHeader } from "./pricing-header"
import { PricingSwitcher } from "./pricing-switcher"

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
}

export const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false)
  const togglePricingPeriod = (value: string) => setIsYearly(parseInt(value) === 1)

  const plans: PricingCardProps[] = [
    {
      title: "Basic",
      monthlyPrice: 10,
      yearlyPrice: 100,
      description: "Essential features you need to get started",
      features: [
        "Example Feature Number 1",
        "Example Feature Number 2",
        "Example Feature Number 3"
      ],
      actionLabel: "Get Started"
    },
    {
      title: "Pro",
      monthlyPrice: 25,
      yearlyPrice: 250,
      description: "Perfect for owners of small & medium businessess",
      features: [
        "Example Feature Number 1",
        "Example Feature Number 2",
        "Example Feature Number 3"
      ],
      actionLabel: "Get Started",
      isPopular: true
    },
    {
      title: "Enterprise",
      monthlyPrice: 50,
      yearlyPrice: 500,
      description: "Dedicated support and infrastructure to fit your needs",
      features: [
        "Example Feature Number 1",
        "Example Feature Number 2",
        "Example Feature Number 3",
        "Super Exclusive Feature"
      ],
      actionLabel: "Contact Sales",
      isExclusive: true
    }
  ]
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
