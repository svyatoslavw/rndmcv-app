"use client"

import { signOut } from "next-auth/react"
import Link from "next/link"

import { persistor } from "@/app/store"
import { useProfile } from "@/entities/user"
import { PUBLIC_URL } from "@/shared/config"
import { HEADER_LINKS } from "@/shared/constants"
import { Button, CoffeeIcon, Logotype } from "@/shared/ui"

const Header = () => {
  const { profile } = useProfile()

  const onLogout = () => {
    signOut({ callbackUrl: "/" })
    persistor.purge()
  }

  return (
    <header className="sticky left-0 top-1 z-50 my-1 w-full backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border bg-background px-5 py-1 dark:border-foreground/10">
        <div className="flex items-center gap-14">
          <Logotype withText size="sm" />
          <div className="flex items-center gap-6">
            <div className="flex w-full items-center justify-between gap-4 text-sm font-medium text-foreground/60">
              {HEADER_LINKS.map((link) => (
                <Link
                  key={link.text}
                  className="w-full transition-all hover:text-foreground"
                  href={link.href}
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                  target={link.isExternal ? "_blank" : undefined}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {profile ? (
            <Button size="sm" variant={"secondary"} onClick={onLogout}>
              Logout
            </Button>
          ) : (
            <Link
              className="flex h-8 items-center justify-center rounded-[0.75rem] bg-black px-5 text-xs text-white transition-all hover:bg-neutral-700 dark:bg-white dark:text-black dark:hover:bg-neutral-300"
              href="/auth"
            >
              Auth
            </Link>
          )}
          <Button size={"sm"} variant={"outline"}>
            <Link
              className="flex w-full items-center gap-2"
              href={PUBLIC_URL.coffee()}
              rel="noopener noreferrer"
              target="_blank"
            >
              <CoffeeIcon className="size-4" />
              Buy me a coffee
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

export { Header }
