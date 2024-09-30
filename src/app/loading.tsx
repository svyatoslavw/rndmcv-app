import { SpinnerIcon } from "@/shared/ui"

export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background text-foreground">
      <SpinnerIcon />
    </div>
  )
}
