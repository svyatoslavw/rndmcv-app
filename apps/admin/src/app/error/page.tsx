import { Button } from "@rndm/ui/components"
import { ChevronRight, ServerCrashIcon } from "lucide-react"
import Link from "next/link"

export default async function Error({
  searchParams
}: {
  searchParams: Promise<{ error: string }>
}) {
  const { error = "" } = await searchParams

  const formatError = (error?: string) => {
    if (!error || typeof error !== "string") return

    return error.replace(/(?<![A-Z])(?=[A-Z])/g, " ")
  }

  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center">
      <ServerCrashIcon size={64} className="mb-4" />
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold uppercase">
          {formatError(error) || "Internal server error!"}
        </h2>
        <h5 className="font-medium">Uh oh! Something went wrong. Please try again.</h5>
      </div>
      <Link href="/">
        <Button className="items-center transition hover:scale-105" variant="default">
          <ChevronRight className="mr-2" size={16} />
          Go home
        </Button>
      </Link>
    </div>
  )
}
