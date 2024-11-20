"use client"

import { NotepadTextIcon, PencilRulerIcon } from "lucide-react"
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
      }
    ]
  }, [pathname])

  return (
    <header className="mt-8 hidden h-fit flex-col items-center gap-4 rounded-lg bg-background p-4 text-sm sm:hidden lg:flex">
      <Logotype />
      {links.map((link) => (
        <Link
          key={link.href}
          className={cn(
            "flex w-full flex-col items-center gap-2 rounded-lg p-3 font-medium text-neutral-500 transition-all hover:bg-zinc-50 hover:dark:bg-card",
            { "bg-zinc-50 text-primary dark:bg-secondary/50": link.isActive }
          )}
          href={link.href}
        >
          <link.icon size={26} />
          {link.name}
        </Link>
      ))}
    </header>
  )
}

export { ResumeSidebar }
