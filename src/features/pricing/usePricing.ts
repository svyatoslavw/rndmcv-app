import { loadStripe } from "@stripe/stripe-js"
import { useCallback, useState } from "react"
import toast from "react-hot-toast"
import Stripe from "stripe"

import { useProfile } from "@/entities/user"
import { checkout, manageBilling } from "@/shared/lib/actions"

export const usePricing = () => {
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

  return {
    onRedirectToCheckout,
    onManageBilling,
    isLoading,
    profile
  }
}
