"use client"

import { CircleUserRoundIcon } from "lucide-react"
import { signOut } from "next-auth/react"
import Link from "next/link"

import { persistor } from "@/app/store"
import { removeCookiesFromStorage, useProfile } from "@/entities/user"
import { PUBLIC_URL, RESUME_URL } from "@/shared/lib/config"
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Logotype
} from "@/shared/ui"

const links = [
  {
    name: "Resumes",
    href: RESUME_URL.create()
  },
  {
    name: "Pricing",
    href: PUBLIC_URL.pricing()
  },
  {
    name: "Settings",
    href: PUBLIC_URL.settings()
  }
]

const Header = () => {
  const { profile } = useProfile()

  const onLogout = () => {
    signOut({ callbackUrl: "/" })
    persistor.purge()
    removeCookiesFromStorage()
  }

  return (
    <header className="flex w-full items-center justify-between p-5">
      <Logotype isMulticolor />
      <div className="flex items-center gap-6">
        {links.map((link) => (
          <Link key={link.href} className="transition-colors hover:text-primary" href={link.href}>
            {link.name}
          </Link>
        ))}
        {profile ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <CircleUserRoundIcon className="mr-2" size={20} />
                {profile.email}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>{profile.name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link className="w-full" href={RESUME_URL.create()}>
                    Resumes
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={PUBLIC_URL.pricing()} className="w-full">
                    Pricing
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={PUBLIC_URL.settings()} className="w-full">
                    Settings
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/svyatoslavw/cv-editor/issues"
                  className="w-full"
                >
                  Report Issue
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onLogout}>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            href="/auth"
            className="rounded-[0.75rem] bg-black px-6 py-2 text-white transition-all hover:bg-neutral-700 dark:bg-white dark:text-black dark:hover:bg-neutral-300"
          >
            Auth
          </Link>
        )}
      </div>
    </header>
  )
}

export { Header }
