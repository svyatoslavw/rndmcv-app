import { SpinnerIcon } from "@rndm/ui/icons"

export default function Loading() {
  return (
    <div className="bg-background text-foreground flex h-screen w-full flex-col items-center justify-center">
      <SpinnerIcon className="text-primary" />
      <p className="font-medium">Just a second...</p>
    </div>
  )
}
