"use client"
import { Button } from "@rndm/ui/components"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { PUBLIC_URLS } from "@/shared/config"
import { Logotype } from "@/shared/ui"
import { useEffect, useState } from "react"
import { HeaderLinks } from "./HeaderLinks"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "bg-background fixed top-4 z-20 flex h-[50px] w-full max-w-[100vw] justify-between rounded-lg px-[3%] text-gray-700 shadow-md transition-all max-lg:top-0 lg:left-1/2 lg:mr-auto lg:max-w-5xl lg:-translate-x-1/2 lg:px-4 lg:opacity-[0.99] lg:!backdrop-blur-lg dark:bg-[#17181b] dark:text-gray-200 dark:shadow-gray-700",
        {
          "bg-transparent shadow-none": !isScrolled
        }
      )}
    >
      <div className="flex items-center gap-4 md:gap-10">
        <Logotype withBeta={false} size="sm" />
        <HeaderLinks />
      </div>
      <div className="flex items-center gap-2">
        <Link href={PUBLIC_URLS.GITHUB} rel="noopener noreferrer" target="_blank">
          <Button size={"sm"}>
            <span className="hidden sm:inline">Start for free</span>
          </Button>
        </Link>
      </div>
    </header>
  )
}

export { Header }
