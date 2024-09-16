"use client"

import { CircleUserRoundIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { useGetProfileQuery } from "@/entities/user"
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/shared/ui"

const Header = () => {
  const { data } = useGetProfileQuery()

  return (
    <header className="flex w-full items-center justify-between p-5">
      <Link href="/">
        <Image
          draggable={false}
          src="/logo.webp"
          width={80}
          height={80}
          alt="logo"
          className="rounded-3xl"
        />
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/">Home</Link>
        <Link href="/pricing">Premium</Link>
        {data ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <CircleUserRoundIcon className="mr-2" size={20} />
                {data.email}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
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
              <DropdownMenuItem>GitHub</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem disabled>API</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
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
