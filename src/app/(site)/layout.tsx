import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/shared/lib/utils"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn("min-h-screen w-full bg-zinc-100", montserrat.className)}>
      <header className="flex w-full items-center justify-between p-5">
        <Image src="/logo.webp" width={80} height={80} alt="logo" className="rounded-3xl" />
        <div className="flex gap-4">
          <Link href="/pricing">Premium</Link>
          <Link href="/">Home</Link>
        </div>
      </header>
      {children}
    </div>
  )
}
