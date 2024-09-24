"use client"

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
    <main className="xs:px-0 mx-auto flex h-screen max-w-md flex-col items-center justify-center gap-4 px-4 text-center">
      <div className="flex flex-col items-center">
        <p className="text-default-500">#InternalError</p>
      </div>
      <h1 className="text-lg font-medium">
        We are currently experiencing technical difficulties. We have identified the error and are
        working on fixing it and will have it resolved soon.
      </h1>
      <Button onClick={() => reset()}>Try Again</Button>
    </main>
  )
}
