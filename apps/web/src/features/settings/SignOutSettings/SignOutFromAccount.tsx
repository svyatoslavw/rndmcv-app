"use client"

import { Button } from "@rndm/ui/components"
import { signOut } from "next-auth/react"
import Image from "next/image"

import { persistor } from "@/shared/lib/store"
import { IUser } from "@/shared/types"

const SignOutFromAccount = ({ profile }: { profile: IUser }) => {
  const onLogout = () => {
    signOut({ callbackUrl: "/" })
    persistor.purge()
  }

  return (
    <>
      <div className="mb-4 flex items-center gap-2">
        <Image
          alt={profile?.name || "user"}
          className="aspect-square rounded-full object-cover"
          height={50}
          src={profile?.image || "/images/256x256.png"}
          width={50}
        />
        <div className="font-semibold">
          <h2 className="text-sm">{profile?.name}</h2>
          <p className="text-xs font-medium">{profile?.email}</p>
        </div>
      </div>
      <Button className="w-full" onClick={onLogout}>
        Sign out
      </Button>
    </>
  )
}

export { SignOutFromAccount }
