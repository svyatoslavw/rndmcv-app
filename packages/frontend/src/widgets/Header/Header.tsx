"use client"

import { useQueryClient } from "@tanstack/react-query"
import { CircleUserRoundIcon } from "lucide-react"
import Link from "next/link"

import { useLogoutMutation } from "@/app/api/mutations"
import { persistor } from "@/app/store"
import { removeCookiesFromStorage, useProfile } from "@/entities/user"
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

const Header = () => {
  const { profile } = useProfile()
  const queryClient = useQueryClient()

  const { mutate } = useLogoutMutation({
    onSuccess: () => {
      queryClient.clear()
      persistor.purge()
      removeCookiesFromStorage()
    }
  })

  return (
    <header className="flex w-full items-center justify-between p-5">
      <Logotype />
      <div className="flex items-center gap-6">
        {profile ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <CircleUserRoundIcon className="mr-2" size={20} />
                {profile.email}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>{profile.login}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link href="/pricing" className="w-full">
                    Pricing
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/settings" className="w-full">
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
              <DropdownMenuItem onClick={mutate}>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link href="/auth" className="rounded-[0.75rem] bg-black px-6 py-2 text-white">
            Auth
          </Link>
        )}
      </div>
    </header>
  )
}

export { Header }
