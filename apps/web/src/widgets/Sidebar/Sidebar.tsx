"use client"

import {
  BriefcaseBusinessIcon,
  BugIcon,
  FileTextIcon,
  LucideIcon,
  SettingsIcon
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { PUBLIC_URLS } from "@/shared/config"
import { cn } from "@/shared/lib/utils"
import type { IUser } from "@/shared/types"
import { Logotype } from "@/shared/ui"
import Image from "next/image"
import { Footer } from "../Footer/Footer"

interface SidebarLink {
  title: string
  url: string
  icon: LucideIcon
}

const topNavLinks: SidebarLink[] = [
  {
    title: "Resume",
    url: PUBLIC_URLS.RESUME,
    icon: FileTextIcon
  },
  {
    title: "Job Tracker",
    url: PUBLIC_URLS.JOB_TRACKER,
    icon: BriefcaseBusinessIcon
  }
]

const bottomNavLinks: SidebarLink[] = [
  {
    title: "Settings",
    url: PUBLIC_URLS.SETTINGS,
    icon: SettingsIcon
  },
  {
    title: "Issues",
    url: PUBLIC_URLS.ISSUES,
    icon: BugIcon
  }
]

interface SidebarProps {
  user: IUser | undefined
  children: React.ReactNode
}

const Sidebar = ({ user, children }: SidebarProps) => {
  const pathname = usePathname()

  return (
    <div className="h-screen w-full overflow-hidden">
      <input className="hidden" id="sidebar-toggle" type="checkbox" />
      <div className="flex h-full">
        <div className="fixed-no-scroll bg-background hidden h-full flex-none md:flex">
          <div className="flex h-screen flex-col items-start justify-between p-4 md:p-8">
            <nav className={"item-center flex w-full flex-col items-start gap-4 md:w-40 lg:w-56"}>
              <Logotype />
              {topNavLinks.map((link) => {
                return (
                  <Link
                    key={link.url}
                    className={cn(
                      "text-foreground/50 hover:text-foreground flex items-center gap-2 text-xl font-bold transition-colors md:text-base",
                      {
                        "text-foreground": pathname === link.url
                      }
                    )}
                    href={link.url}
                  >
                    <link.icon size={18} />
                    <span> {link.title}</span>
                  </Link>
                )
              })}
            </nav>
            <nav className={"item-center flex w-full flex-col items-start gap-4 md:w-40 lg:w-56"}>
              {bottomNavLinks.map((link) => {
                return (
                  <Link
                    key={link.url}
                    className={cn(
                      "text-foreground/50 hover:text-foreground flex items-center gap-2 text-xl font-bold transition-colors md:text-base",
                      {
                        "text-foreground": pathname === link.url
                      }
                    )}
                    href={link.url}
                  >
                    <link.icon size={18} />
                    <span> {link.title}</span>
                  </Link>
                )
              })}
              {user && (
                <div className="flex items-center gap-1">
                  <Image
                    className="rounded-full"
                    src={user.image}
                    alt={user.name}
                    width={45}
                    height={45}
                  />
                  <div>
                    <h5 className="text-md font-bold md:text-sm">{user.email}</h5>
                    <p className="text-foreground text-sm font-bold md:text-xs">{user.name}</p>
                  </div>
                </div>
              )}
            </nav>
          </div>
        </div>
        <main className="content-wrapper flex min-h-screen flex-1 flex-col overflow-y-auto">
          <div className="flex-1 p-4 md:p-8">{children}</div>
          <Footer />
        </main>
      </div>
      <label
        aria-label="Menu"
        htmlFor="sidebar-toggle"
        className="label bg-background fixed right-4 top-[19px] z-50 cursor-pointer rounded-md px-[3px] py-[8px] backdrop-blur-3xl transition-all duration-300 md:hidden"
      >
        <div className="hamburger-menu">
          <div className="hamburger-bar bar1" />
          <div className="hamburger-bar bar2" />
        </div>
      </label>
    </div>
  )
}

export { Sidebar }
