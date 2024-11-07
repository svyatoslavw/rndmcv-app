"use client"

import { signOut } from "next-auth/react"
import Link from "next/link"

import { persistor } from "@/app/store"
import { useProfile } from "@/entities/user"
import { PUBLIC_URL, RESUME_URL } from "@/shared/config"
import { Button, Logotype } from "@/shared/ui"

const Header = () => {
  const { profile } = useProfile()

  const onLogout = () => {
    signOut({ callbackUrl: "/" })
    persistor.purge()
  }

  return (
    <header className="sticky left-0 top-0 z-50 flex w-full items-center justify-between px-5 py-3 backdrop-blur-sm">
      <Logotype size="sm" />
      <div className="flex items-center gap-6">
        {profile ? (
          <div className="flex w-full items-center justify-between gap-4 font-semibold text-foreground/60">
            <Link
              className="w-full transition-all hover:text-foreground"
              href={RESUME_URL.create()}
            >
              Resumes
            </Link>

            <Link
              className="w-full transition-all hover:text-foreground"
              href={PUBLIC_URL.settings()}
            >
              Settings
            </Link>

            <Link
              className="w-full transition-all hover:text-foreground"
              href={PUBLIC_URL.issue()}
              rel="noopener noreferrer"
              target="_blank"
            >
              Issue
            </Link>
            <Button variant={"destructive"} onClick={onLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <Link
            className="rounded-[0.75rem] bg-black px-6 py-2 text-white transition-all hover:bg-neutral-700 dark:bg-white dark:text-black dark:hover:bg-neutral-300"
            href="/auth"
          >
            Auth
          </Link>
        )}
      </div>
    </header>
  )
}

export { Header }
