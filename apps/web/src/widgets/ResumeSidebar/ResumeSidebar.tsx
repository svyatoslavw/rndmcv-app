"use client"

import { NotepadTextIcon, PencilRulerIcon, Share2Icon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

import { PUBLIC_URLS } from "@/shared/config"
import { cn } from "@/shared/lib/utils"
import { Logotype } from "@/shared/ui"

const ResumeSidebar = () => {
  const pathname = usePathname()

  const links = useMemo(() => {
    return [
      {
        name: "Content",
        href: PUBLIC_URLS.CONTENT,
        icon: NotepadTextIcon,
        isActive: pathname === PUBLIC_URLS.CONTENT
      },
      {
        name: "Customize",
        href: PUBLIC_URLS.CUSTOMIZE,
        icon: PencilRulerIcon,
        isActive: pathname === PUBLIC_URLS.CUSTOMIZE
      },
      {
        name: "Share",
        href: PUBLIC_URLS.SHARE,
        icon: Share2Icon,
        isActive: pathname === PUBLIC_URLS.SHARE
      }
    ]
  }, [pathname])

  return (
    <header className="bg-background dark:border-secondary hidden h-screen flex-col items-center gap-4 border-r px-3 py-2 text-sm sm:hidden lg:flex dark:shadow-neutral-900">
      <Logotype isLazy />
      {links.map((link) => (
        <Link
          key={link.href}
          className={cn(
            "flex w-full flex-col items-center gap-0.5 rounded-lg px-1 py-2 text-sm font-medium text-neutral-500 transition-all hover:bg-zinc-50 hover:dark:bg-zinc-800",
            { "bg-secondary text-primary": link.isActive }
          )}
          href={link.href}
        >
          <link.icon size={18} />
          {link.name}
        </Link>
      ))}
    </header>
  )
}

export { ResumeSidebar }
