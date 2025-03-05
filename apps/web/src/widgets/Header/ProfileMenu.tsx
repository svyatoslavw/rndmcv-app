"use client"

import { ChangeLanguage, ChangeThemeSettings } from "@/features"
import type { Locale } from "@/i18n/config"
import { PUBLIC_URLS } from "@/shared/config"
import { persistor } from "@/shared/lib/store"
import { IUser } from "@/shared/types"
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
import { GithubIcon } from "@rndm/ui/icons"
import {
  BugIcon,
  LanguagesIcon,
  LogOut,
  PaletteIcon,
  Settings,
  User,
  UserCog2Icon
} from "lucide-react"
import { signOut } from "next-auth/react"
import Link from "next/link"

interface ProfileMenuProps {
  profile: IUser
  currentLocale: Locale
}

const ProfileMenu = ({ profile, currentLocale }: ProfileMenuProps) => {
  const onLogout = () => {
    signOut({ callbackUrl: "/" })
    persistor.purge()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={"sm"} variant="outline">
          <UserCog2Icon className="size-4 sm:mr-2" />
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
        <DropdownMenuItem
          onClick={(e) => e.preventDefault()}
          className="flex-col items-start"
          title="Theme"
        >
          <div className="flex items-center gap-2">
            <PaletteIcon />
            <span>Theme</span>
          </div>
          <ChangeThemeSettings />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={(e) => e.preventDefault()}
          className="flex-col items-start"
          title="Language"
        >
          <div className="flex items-center gap-2">
            <LanguagesIcon />
            <span>Language</span>
          </div>
          <ChangeLanguage currentLocale={currentLocale} />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onLogout}>
          <LogOut />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { ProfileMenu }
