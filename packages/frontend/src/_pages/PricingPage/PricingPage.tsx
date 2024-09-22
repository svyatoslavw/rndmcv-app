"use client"

import { useState } from "react"

import { PricingHeader } from "./PricingHeader"
import { PricingList } from "./PricingList"
import { PricingSwitcher } from "./PricingSwitcher"

export const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false)
  const togglePricingPeriod = (value: string) => setIsYearly(parseInt(value) === 1)

  return (
    <div className="py-4">
      <PricingHeader title="Pricing Plans" subtitle="Choose the plan that's right for you" />
      <PricingSwitcher onSwitch={togglePricingPeriod} />
      <PricingList isYearly={isYearly} />
    </div>
  )
}
