"use client"

import { ADMIN_URLS } from "@/shared/config"
import { Logotype } from "@/shared/ui/logotype"
import { cn } from "@rndm/ui/lib/utils"
import { ChartLineIcon, FileTextIcon, LogOutIcon, UsersIcon } from "lucide-react"
import { signOut } from "next-auth/react"
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

  const handleLogout = () => {
    signOut({ callbackUrl: ADMIN_URLS.AUTH })
  }

  return (
    <aside className="flex h-screen w-60 shrink-0 flex-col bg-gray-100 px-4 py-6">
      <div className="mx-auto mb-6">
        <Logotype />
      </div>
      <nav className="flex flex-grow flex-col space-y-1">
        {links.map((link) => (
          <Link
            key={link.href}
            className={cn(
              "text-foreground/60 hover:text-foreground flex items-center gap-1.5 rounded px-4 py-2 font-bold transition-all",
              { "text-foreground": link.isActive }
            )}
            href={link.href}
          >
            <link.icon size={20} />
            {link.name}
          </Link>
        ))}
      </nav>
      <button
        onClick={handleLogout}
        className="flex w-full items-center gap-3 rounded px-4 py-2 font-bold text-red-600/60 transition-all hover:text-red-600"
      >
        <LogOutIcon size={20} />
        Logout
      </button>
    </aside>
  )
}

export { Sidebar }
