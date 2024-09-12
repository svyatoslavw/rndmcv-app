"use client"

import { loadStripe } from "@stripe/stripe-js"
import { Loader2Icon } from "lucide-react"
import { useState } from "react"

import { checkout } from "../../app/(site)/pricing/actions"

import { CheckItem } from "./CheckItem"
import { PricingCardProps } from "./PricingPage"
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
  isExclusive
}: PricingCardProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const onClick = async () => {
    setIsLoading(true)
    const data = JSON.parse(
      await checkout("sadness0v2@gmail.com", [
        { product: { price_id: "price_1Pw9quGfITKCO87W1DxEV9zU" } }
      ])
    )
    const stripe = await loadStripe(process.env.STRIPE_PUBLISHABLE_KEY!)
    const res = await stripe?.redirectToCheckout({
      sessionId: data.id
    })
    if (res?.error) {
      alert("Fail to checkout")
    }
    setIsLoading(false)
  }

  return (
    <Card
      className={cn(
        `mx-auto flex w-72 flex-col justify-between bg-gradient-to-br from-white via-white to-zinc-200/70 py-1 transition-all hover:scale-105 sm:mx-0`,
        {
          "scale-105 hover:scale-110": isPopular
        }
      )}
    >
      <div>
        <CardHeader className="pb-8 pt-4">
          {isYearly && yearlyPrice && monthlyPrice ? (
            <div className="flex justify-between">
              <CardTitle className="text-lg text-zinc-700 dark:text-zinc-300">{title}</CardTitle>
              <div
                className={cn(
                  "h-fit rounded-xl bg-zinc-200 px-2.5 py-1 text-sm font-medium text-black dark:bg-zinc-800 dark:text-white",
                  {
                    "bg-zinc-200 text-black": isPopular,
                    "bg-primary/80 text-white": isExclusive
                  }
                )}
              >
                Save ${Math.round(monthlyPrice * 12 - yearlyPrice)}
              </div>
            </div>
          ) : (
            <CardTitle className="text-lg text-zinc-700 dark:text-zinc-300">{title}</CardTitle>
          )}
          <div className="flex gap-0.5">
            <h3 className="text-3xl font-bold">
              {yearlyPrice && isYearly
                ? "$" + yearlyPrice
                : monthlyPrice
                  ? "$" + monthlyPrice
                  : "Free"}
            </h3>
            <span className="mb-1 flex flex-col justify-end text-sm">
              {yearlyPrice && isYearly ? "/year" : monthlyPrice ? "/month" : null}
            </span>
          </div>
          <CardDescription className="h-12 pt-1.5">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {features.map((feature) => (
            <CheckItem key={feature} text={feature} />
          ))}
        </CardContent>
      </div>
      <CardFooter className="mt-2">
        <Button
          onClick={onClick}
          variant={isPopular ? "default" : "outline"}
          className="relative inline-flex w-full items-center justify-center rounded-md px-6 font-medium transition-colors focus:outline-none"
        >
          {isPopular && (
            <div className="absolute -inset-1.5 -z-10 rounded-lg bg-gradient-to-b from-primary/60 to-primary opacity-75 blur" />
          )}
          {isLoading && <Loader2Icon size={16} className="mr-2 animate-spin" />}
          {actionLabel}
        </Button>
        {/* <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={isPopular ? "default" : "outline"}
            className="relative inline-flex w-full items-center justify-center rounded-md px-6 font-medium transition-colors focus:outline-none"
          >
            {isPopular && (
              <div className="absolute -inset-1.5 -z-10 rounded-lg bg-gradient-to-b from-primary/60 to-primary opacity-75 blur" />
            )}
            {actionLabel}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4"></div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog> */}
      </CardFooter>
    </Card>
  )
}
