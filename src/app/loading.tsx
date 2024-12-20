import { SpinnerIcon } from "@/shared/ui"

export default function Loading() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background text-foreground">
      <SpinnerIcon className="text-primary" />
      <p className="font-medium">Just a second...</p>
    </div>
  )
}
