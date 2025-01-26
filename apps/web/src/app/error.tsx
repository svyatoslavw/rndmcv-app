"use client"

import { RotateCcwIcon } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

import { Button } from "@rndm/ui/components"

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
      <Image
        alt="not-found"
        draggable={false}
        height={64}
        loading="lazy"
        src="/images/error.png"
        width={64}
      />
      <div className="mb-8 text-center">
        <h2 className="text-5xl font-bold">Internal server error!</h2>
        <h5 className="font-medium">Uh oh! Something went wrong. Please try again.</h5>
      </div>
      <Button className="w-40 items-center" onClick={() => reset()}>
        <RotateCcwIcon className="mr-2" size={16} />
        Try again
      </Button>
    </div>
  )
}
