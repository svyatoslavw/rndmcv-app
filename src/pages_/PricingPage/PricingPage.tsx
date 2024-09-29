"use client"

import { useState } from "react"

import { PricingList } from "@/features"
import { PricingHeader, PricingSwitcher } from "@/widgets"

export const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="py-4">
      <PricingHeader title="Pricing Plans" subtitle="Choose the plan that's right for you" />
      <PricingSwitcher {...{ isYearly, setIsYearly }} />
      <PricingList {...{ isYearly }} />
    </div>
  )
}
