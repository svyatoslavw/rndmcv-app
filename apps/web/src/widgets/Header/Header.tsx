"use client"

import { Button } from "@rndm/ui/components"
import { LogInIcon, StarIcon } from "lucide-react"
import Link from "next/link"

import { PUBLIC_URLS } from "@/shared/config"
import { IUser } from "@/shared/types"
import { Logotype } from "@/shared/ui"
import { HeaderLinks } from "./HeaderLinks"
import { ProfileMenu } from "./ProfileMenu"

const Header = ({ profile }: { profile?: IUser }) => {
  return (
    <header className="bg-background dark:border-foreground/10 sticky left-0 top-0 z-50 mb-6 w-full rounded border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1">
        <div className="flex items-center gap-4 md:gap-10">
          <Logotype size="sm" />
          <HeaderLinks />
        </div>
        <div className="flex items-center gap-2">
          {profile ? (
            <ProfileMenu profile={profile} />
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
