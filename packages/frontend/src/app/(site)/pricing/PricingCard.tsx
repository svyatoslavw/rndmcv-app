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
}: PricingCardProps) => (
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
                  "bg-gradient-to-br from-zinc-400 to-zinc-500 text-white": isPopular,
                  "bg-gradient-to-br from-primary/50 to-primary text-white": isExclusive
                }
              )}
            >
              Save ${monthlyPrice * 12 - yearlyPrice}
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
                : "Custom"}
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
        variant={isPopular ? "default" : "outline"}
        className="relative inline-flex w-full items-center justify-center rounded-md px-6 font-medium transition-colors focus:outline-none"
      >
        {isPopular && (
          <div className="absolute -inset-1.5 -z-10 rounded-lg bg-gradient-to-b from-primary/60 to-primary opacity-75 blur" />
        )}
        {actionLabel}
      </Button>
    </CardFooter>
  </Card>
)
