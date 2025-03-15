"use client"

import { PUBLIC_URLS } from "@/shared/config"
import { Button } from "@rndm/ui/components"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

const HeaderLinks = () => {
  const pathname = usePathname()

  const HEADER_LINKS = useMemo(
    () => [
      {
        text: "Home",
        href: PUBLIC_URLS.HOME,
        isActive: pathname === PUBLIC_URLS.HOME
      },
      {
        text: "About",
        href: PUBLIC_URLS.ABOUT,
        isActive: pathname.includes(PUBLIC_URLS.ABOUT)
      },
      {
        text: "Blog",
        href: PUBLIC_URLS.BLOG,
        isActive: pathname.includes(PUBLIC_URLS.BLOG)
      },
      {
        text: "Contact",
        href: PUBLIC_URLS.CONTACT,
        isActive: pathname.includes(PUBLIC_URLS.CONTACT)
      }
    ],
    [pathname]
  )
  return (
    <div className="hidden items-center md:flex">
      {HEADER_LINKS.map((link) => (
        <Button
          key={link.text}
          variant="ghost"
          className="text-foreground/60 hover:text-foreground text-sm font-normal transition-all"
        >
          <Link href={link.href}>{link.text}</Link>
        </Button>
      ))}
    </div>
  )
}

export { HeaderLinks }
