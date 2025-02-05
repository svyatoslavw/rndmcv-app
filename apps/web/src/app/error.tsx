"use client"

import { Button } from "@rndm/ui/components"
import { IterationCcwIcon, ServerCrashIcon } from "lucide-react"
import { useEffect } from "react"

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    //eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center">
      <ServerCrashIcon size={64} className="mb-4" />
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold uppercase">Internal server error!</h2>
        <h5 className="font-medium">Uh oh! Something went wrong. Please try again.</h5>
      </div>
      <Button className="items-center transition hover:scale-110" variant="secondary">
        <IterationCcwIcon className="mr-2" size={16} />
        Try again
      </Button>
    </div>
  )
}
