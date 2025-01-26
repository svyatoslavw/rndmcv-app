"use client"

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@rndm/ui/components"
import { CoffeeIcon, GithubIcon } from "@rndm/ui/icons"
import { BugIcon, LogInIcon, LogOut, PaletteIcon, Settings, User, UserCog2Icon } from "lucide-react"
import { signOut } from "next-auth/react"
import Link from "next/link"

import { useProfile } from "@/entities/user"
import { ChangeThemeSettings } from "@/features"
import { PUBLIC_URLS } from "@/shared/config"
import { HEADER_LINKS } from "@/shared/constants"
import { persistor } from "@/shared/lib/store"
import { Logotype } from "@/shared/ui"

const Header = () => {
  const { profile } = useProfile()

  const onLogout = () => {
    signOut({ callbackUrl: "/" })
    persistor.purge()
  }

  return (
    <header className="sticky left-0 top-1 z-50 mb-6 mt-1 w-full backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border bg-background px-5 py-1 dark:border-foreground/10">
        <div className="flex items-center gap-14">
          <Logotype withText size="sm" />
          <div className="flex items-center gap-5 text-sm text-foreground/60">
            {HEADER_LINKS.map((link) => (
              <Link
                key={link.text}
                className="transition-all hover:text-foreground"
                href={link.href}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                target={link.isExternal ? "_blank" : undefined}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {profile ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size={"sm"} variant="outline">
                  <UserCog2Icon size={18} className="mr-2" />
                  Profile
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="overflow-hidden text-ellipsis">
                  {profile.email}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem disabled>
                    <User />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href={PUBLIC_URLS.SETTINGS}>
                      <Settings size={18} />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href={PUBLIC_URLS.GITHUB} rel="noopener noreferrer" target="_blank">
                    <GithubIcon />
                    <span>GitHub</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={PUBLIC_URLS.ISSUES} rel="noopener noreferrer" target="_blank">
                    <BugIcon />
                    <span>Issues</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex-col items-start" title="Theme">
                  <div className="flex items-center gap-2">
                    <PaletteIcon />
                    <span>Theme</span>
                  </div>
                  <ChangeThemeSettings />
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={onLogout}>
                  <LogOut />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              className="flex h-8 items-center justify-center rounded-[0.75rem] bg-black px-5 text-xs text-white transition-all hover:bg-neutral-700 dark:bg-white dark:text-black dark:hover:bg-neutral-300"
              href="/auth"
            >
              <LogInIcon className="mr-2" size={18} />
              Auth
            </Link>
          )}
          <Button size={"sm"} variant={"outline"}>
            <Link
              className="flex w-full items-center gap-2"
              href={PUBLIC_URLS.COFFEE}
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
