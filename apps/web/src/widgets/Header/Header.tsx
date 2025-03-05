import { Button } from "@rndm/ui/components"
import { LogInIcon } from "lucide-react"
import Link from "next/link"

import type { Locale } from "@/i18n/config"
import { PUBLIC_URLS } from "@/shared/config"
import { IUser } from "@/shared/types"
import { GithubIcon } from "@rndm/ui/icons"
import { HeaderLinks } from "./HeaderLinks"
import { ProfileMenu } from "./ProfileMenu"

interface HeaderProps {
  profile: IUser | undefined
  currentLocale: Locale
}

const Header = ({ profile, currentLocale }: HeaderProps) => {
  return (
    <header className="bg-background dark:border-foreground/10 sticky left-0 top-0 z-50 mb-16 w-full rounded border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1">
        <div className="flex items-center gap-4 md:gap-10">
          {/* <Logotype size="sm" /> */}
          <h2 className="text-foreground text-2xl font-bold">
            <span className="text-primary">CV</span>
          </h2>
          <HeaderLinks />
        </div>
        <div className="flex items-center gap-2">
          {profile ? (
            <ProfileMenu profile={profile} currentLocale={currentLocale} />
          ) : (
            <Link href="/auth">
              <Button size={"sm"} variant={"outline"}>
                <LogInIcon className="mr-2" size={18} />
                <span className="hidden sm:inline">Auh</span>
              </Button>
            </Link>
          )}
          <Link href={PUBLIC_URLS.GITHUB} rel="noopener noreferrer" target="_blank">
            <Button size={"sm"} variant={"outline"}>
              <GithubIcon className="fill-foreground size-4 sm:mr-2" />
              <span className="hidden sm:inline">Give a star</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export { Header }
