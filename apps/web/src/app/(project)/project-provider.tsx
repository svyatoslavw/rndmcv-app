"use client"

import type { Locale } from "@/i18n/config"
import { APP_NAME, PUBLIC_URLS } from "@/shared/config"
import { cn } from "@/shared/lib/utils"
import { IUser } from "@/shared/types"
import { Footer, Header } from "@/widgets"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

interface ProjectProviderProps {
  children: React.ReactNode
  profile?: IUser
  currentLocale: Locale
}

const ProjectProvider = ({ children, currentLocale, profile }: ProjectProviderProps) => {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header profile={profile} currentLocale={currentLocale} />
      <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center gap-10 px-4 sm:flex-row lg:px-0">
        <aside className="text-foreground/70 flex w-full flex-col gap-2 text-sm sm:my-20 sm:w-[100px] lg:w-[200px]">
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
              "border-primary bg-primary/5 w-full border-l-2":
                pathname === PUBLIC_URLS.OTHER_PROJECTS
            })}
            href={PUBLIC_URLS.OTHER_PROJECTS}
          >
            Other Projects
          </Link>
        </aside>
        <div className="mx-auto max-w-6xl flex-1 px-4 lg:px-0">{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export { ProjectProvider }
