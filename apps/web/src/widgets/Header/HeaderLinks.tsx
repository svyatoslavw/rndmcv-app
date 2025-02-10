"use client"

import { PUBLIC_URLS } from "@/shared/config"
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@rndm/ui/components"
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
        text: "Builder",
        href: PUBLIC_URLS.BUILDER,
        isActive: pathname.includes(PUBLIC_URLS.BUILDER)
      }
    ],
    [pathname]
  )
  return (
    <>
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
    </>
  )
}

export { HeaderLinks }
