"use client"

import { ADMIN_URLS } from "@/shared"
import { cn } from "@rndm/ui/lib/utils"
import { ChartLineIcon, FileTextIcon, UsersIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

const Sidebar = () => {
  const pathname = usePathname()

  const links = useMemo(() => {
    return [
      {
        name: "Dashboard",
        href: ADMIN_URLS.DASHBOARD,
        icon: ChartLineIcon,
        isActive: pathname === ADMIN_URLS.DASHBOARD
      },
      {
        name: "Users",
        href: ADMIN_URLS.USERS,
        icon: UsersIcon,
        isActive: pathname === ADMIN_URLS.USERS
      },
      {
        name: "Resumes",
        href: ADMIN_URLS.RESUMES,
        icon: FileTextIcon,
        isActive: pathname === ADMIN_URLS.RESUMES
      }
    ]
  }, [pathname])

  return (
    <aside className="h-screen w-60 shrink-0 bg-gray-50 px-4">
      <h5 className="my-6 bg-gradient-to-tr from-violet-600 via-purple-600 to-fuchsia-500 bg-clip-text text-center text-xl font-bold text-transparent">
        RNDM Admin
      </h5>
      <nav className="space-y-1">
        {links.map((link) => (
          <Link
            key={link.href}
            className={cn(
              "flex items-center gap-3 rounded px-4 py-2 text-sm font-medium transition-all hover:bg-gray-100",
              {
                "bg-gray-200": link.isActive
              }
            )}
            href={link.href}
          >
            <link.icon size={20} />
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export { Sidebar }
