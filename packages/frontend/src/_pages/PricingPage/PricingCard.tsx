"use client"

import { loadStripe } from "@stripe/stripe-js"
import { Loader2Icon } from "lucide-react"
import { useState } from "react"
import toast from "react-hot-toast"

import { checkout } from "../../app/(site)/pricing/actions"

import { CheckItem } from "./CheckItem"
import { PricingCardProps } from "./PricingPage"
import { useGetProfileQuery } from "@/entities/user"
import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/shared/ui/card"

export const PricingCard = ({
  isYearly,
  title,
  monthlyPrice,
  yearlyPrice,
  description,
  features,
  actionLabel,
  isPopular,
  isExclusive,
  priceId
}: PricingCardProps) => {
  const { data } = useGetProfileQuery()
  const [isLoading, setIsLoading] = useState(false)

  const calculateSavings = () => {
    if (monthlyPrice && yearlyPrice) {
      return Math.round(monthlyPrice * 12 - yearlyPrice)
    }
  }

  const handleCheckout = async (email: string, priceId: string) => {
    setIsLoading(true)
    try {
      const data = JSON.parse(await checkout(email, [{ product: { price_id: priceId } }]))
      const stripe = await loadStripe(process.env.STRIPE_PUBLISHABLE_KEY!)
      const res = await stripe?.redirectToCheckout({ sessionId: data.id })
      if (res?.error) {
        toast.error("Failed to checkout")
      }
    } catch (error) {
      toast.error("Checkout process failed")
    } finally {
      setIsLoading(false)
    }
  }

  const renderPrice = () => {
    if (isYearly && yearlyPrice) {
      return (
        <>
          <h3 className="text-3xl font-bold">${yearlyPrice}</h3>
          <span className="mb-1 text-sm">/year</span>
        </>
      )
    }
    if (monthlyPrice) {
      return (
        <>
          <h3 className="text-3xl font-bold">${monthlyPrice}</h3>
          <span className="mb-1 text-sm">/month</span>
        </>
      )
    }
    return <h3 className="text-3xl font-bold">Free</h3>
  }

  const price = renderPrice()
  const savings = calculateSavings()

  return (
    <Card
      className={cn(
        "mx-auto flex w-72 flex-col justify-between bg-gradient-to-br from-white via-white to-zinc-200/70 py-1 transition-all hover:scale-105 sm:mx-0",
        { "scale-105 hover:scale-110": isPopular }
      )}
    >
      <div>
        <CardHeader className="pb-8 pt-4">
          <div className="flex justify-between">
            <CardTitle className="text-lg text-zinc-700 dark:text-zinc-300">{title}</CardTitle>
            {isYearly && savings && (
              <div
                className={cn("h-fit rounded-xl px-2.5 py-1 text-sm font-medium", {
                  "bg-zinc-200 text-black": isPopular,
                  "bg-primary/80 text-white": isExclusive,
                  "bg-zinc-800 dark:bg-zinc-800 dark:text-white": !isExclusive && !isPopular
                })}
              >
                Save ${savings}
              </div>
            )}
          </div>
          <div className="flex gap-0.5">{price}</div>
          <CardDescription className="h-12 pt-1.5">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {features.map((feature) => (
            <CheckItem key={feature} text={feature} />
          ))}
        </CardContent>
      </div>
      <CardFooter className="mt-2">
        {data && (
          <Button
            disabled={isLoading || actionLabel === "Active"}
            onClick={() => handleCheckout(data.email, priceId)}
            variant={isPopular ? "default" : "outline"}
            className="relative inline-flex w-full items-center justify-center rounded-md px-6 font-medium transition-colors focus:outline-none"
          >
            {isPopular && (
              <div className="absolute -inset-1.5 -z-10 rounded-lg bg-gradient-to-b from-primary/60 to-primary opacity-75 blur" />
            )}
            {isLoading && <Loader2Icon size={16} className="mr-2 animate-spin" />}
            {actionLabel}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
