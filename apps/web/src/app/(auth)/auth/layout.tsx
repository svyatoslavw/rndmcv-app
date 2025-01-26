import { Montserrat } from "next/font/google"

import { cn } from "@/shared/lib/utils"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div
      className={cn(
        "h-screen w-full overflow-hidden bg-zinc-100 dark:bg-background",
        montserrat.className
      )}
    >
      <div className="grid h-screen w-full place-items-center">{children}</div>
    </div>
  )
}
