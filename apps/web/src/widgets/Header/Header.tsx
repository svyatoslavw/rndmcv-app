"use client"

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@rndm/ui/components"
import { GithubIcon } from "@rndm/ui/icons"
import {
  BugIcon,
  LogInIcon,
  LogOut,
  PaletteIcon,
  Settings,
  StarIcon,
  User,
  UserCog2Icon
} from "lucide-react"
import { signOut } from "next-auth/react"
import Link from "next/link"

import { useProfile } from "@/entities/user"
import { ChangeThemeSettings } from "@/features"
import { PUBLIC_URLS } from "@/shared/config"
import { persistor } from "@/shared/lib/store"
import { Logotype } from "@/shared/ui"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

const Header = () => {
  const { profile } = useProfile()

  const onLogout = () => {
    signOut({ callbackUrl: "/" })
    persistor.purge()
  }

  const pathname = usePathname()

  const HEADER_LINKS = useMemo(
    () => [
      {
        text: "Home",
        href: PUBLIC_URLS.HOME,
        isActive: pathname === PUBLIC_URLS.HOME
      },
      {
        text: "Builder",
        href: PUBLIC_URLS.BUILDER,
        isActive: pathname.includes(PUBLIC_URLS.BUILDER)
      }
      // {
      //   text: "About the Project",
      //   href: PUBLIC_URLS.ABOUT,
      //   isActive: pathname.includes(PUBLIC_URLS.ABOUT)
      // }
    ],
    [pathname]
  )

  return (
    <header className="bg-background dark:border-foreground/10 sticky left-0 top-0 z-50 mb-6 w-full rounded border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1">
        <div className="flex items-center gap-4 md:gap-10">
          <Logotype size="sm" />
          <div className="hidden items-center text-sm md:flex">
            {HEADER_LINKS.map((link) => (
              <Button
                key={link.text}
                variant="ghost"
                className="text-foreground/60 hover:text-foreground font-normal transition-all"
              >
                <Link href={link.href}>{link.text}</Link>
              </Button>
            ))}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground/60 hover:text-foreground font-normal transition-all">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex justify-between p-6 md:w-[200px] lg:w-[300px]">
                      <div className="flex flex-col gap-2">
                        <h6 className="text-foreground/50 text-xs font-medium">Application</h6>
                        <NavigationMenuLink href="/about">About</NavigationMenuLink>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h6 className="text-foreground/50 text-xs font-medium">Community</h6>
                        <NavigationMenuLink href={PUBLIC_URLS.ISSUES}>
                          Support & Feedback
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden">
              <Button variant="ghost" size="sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 md:hidden">
              <DropdownMenuGroup>
                {HEADER_LINKS.map((link) => (
                  <DropdownMenuItem key={link.text} asChild>
                    <Link href={link.href}>{link.text}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href={PUBLIC_URLS.ISSUES}>Support & Feedback</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center gap-2">
          {profile ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size={"sm"} variant="outline">
                  <UserCog2Icon size={18} className="mr-2" />
                  <span className="hidden sm:inline">Profile</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="font-default w-56">
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
            <Link href="/auth">
              <Button size={"sm"} variant={"outline"}>
                <LogInIcon className="mr-2" size={18} />
                <span className="hidden sm:inline">Auth</span>
              </Button>
            </Link>
          )}
          <Link href={PUBLIC_URLS.GITHUB} rel="noopener noreferrer" target="_blank">
            <Button size={"sm"} variant={"outline"}>
              <StarIcon className="fill-foreground mr-2 size-4" />
              <span className="hidden sm:inline">Give a star</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export { Header }
