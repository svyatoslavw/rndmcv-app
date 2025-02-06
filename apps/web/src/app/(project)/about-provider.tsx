"use client"

import { APP_NAME, PUBLIC_URLS } from "@/shared/config"
import { cn } from "@/shared/lib/utils"
import { Footer, Header } from "@/widgets"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

const AboutProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen w-full flex-col bg-[url('/graph-paper.svg')] dark:bg-[url('/graph-paper-dark.svg')]">
      <Header />
      <div className="mx-auto flex w-full max-w-4xl flex-1 justify-center gap-10 px-4 lg:px-0">
        <aside className="text-foreground/70 my-20 flex w-[200px] flex-col gap-2 text-sm md:w-[150px]">
          <h5 className="text-sm font-medium">{APP_NAME.SHORT}</h5>
          <Link
            className={cn("px-2 py-1", {
              "border-primary bg-primary/5 w-full border-l-2": pathname === PUBLIC_URLS.ABOUT
            })}
            href={PUBLIC_URLS.ABOUT}
          >
            About
          </Link>

          <Link
            className={cn("px-2 py-1", {
              "border-primary bg-primary/5 w-full border-l-2": pathname === PUBLIC_URLS.BRAND
            })}
            href={PUBLIC_URLS.BRAND}
          >
            Brand
          </Link>
          <Link
            className={cn("px-2 py-1", {
              "border-primary bg-primary/5 w-full border-l-2": pathname === PUBLIC_URLS.TERMS
            })}
            href={PUBLIC_URLS.TERMS}
          >
            Terms
          </Link>
        </aside>
        <div className="mx-auto max-w-6xl flex-1 px-4 lg:px-0">{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export { AboutProvider }
