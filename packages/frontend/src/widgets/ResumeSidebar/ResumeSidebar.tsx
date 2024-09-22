"use client"

import { NotepadTextIcon, PencilRulerIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

import { cn } from "@/shared/lib/utils"
import { Logotype } from "@/shared/ui"

const ResumeSidebar = () => {
  const pathname = usePathname()

  const links = useMemo(() => {
    return [
      {
        name: "Content",
        href: "/resume/content",
        icon: NotepadTextIcon,
        isActive: pathname === "/resume/content"
      },
      {
        name: "Customize",
        href: "/resume/customize",
        icon: PencilRulerIcon,
        isActive: pathname === "/resume/customize"
      }
    ]
  }, [pathname])
  return (
    <header className="mt-8 hidden h-fit flex-col items-center gap-4 rounded-2xl bg-white p-4 text-sm sm:hidden md:hidden lg:flex xl:flex 2xl:flex">
      <Logotype isMulticolor size="sm" />
      {links.map((link) => (
        <Link
          key={link.href}
          className={cn(
            "flex w-full flex-col items-center gap-2 rounded-2xl p-3 transition-all hover:bg-zinc-50",
            { "bg-zinc-50 text-primary": link.isActive }
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
