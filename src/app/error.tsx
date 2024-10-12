"use client"

import { RotateCcwIcon } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

import { Button } from "@/shared/ui"

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center">
      <Image
        draggable={false}
        loading="lazy"
        src="/images/error.png"
        width={64}
        height={64}
        alt="not-found"
      />
      <div className="mb-8 text-center">
        <h2 className="text-5xl font-bold">Internal server error!</h2>
        <h5 className="font-medium">Uh oh! Something went wrong. Please try again.</h5>
      </div>
      <Button onClick={() => reset()} className="w-40 items-center">
        <RotateCcwIcon size={16} className="mr-2" />
        Try again
      </Button>
    </div>
  )
}
