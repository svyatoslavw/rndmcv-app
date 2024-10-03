"use client"

import { LoaderIcon, SaveAllIcon } from "lucide-react"
import Link from "next/link"

import { useSaveResume } from "./useSaveResume"
import { useProfile } from "@/entities/user"
import { PUBLIC_URL } from "@/shared/lib/config"
import { Button } from "@/shared/ui"

const SaveResume = () => {
  const { profile } = useProfile()
  const { isLoading, onSave } = useSaveResume()

  return (
    <>
      {profile ? (
        <Button disabled={isLoading} onClick={onSave} className="gap-2" variant={"outline"}>
          {isLoading ? (
            <LoaderIcon size={16} className="animate-spin" />
          ) : (
            <SaveAllIcon size={16} />
          )}
          Save
        </Button>
      ) : (
        <Button variant={"outline"}>
          <Link className="flex w-full items-center gap-2" href={PUBLIC_URL.auth()}>
            <SaveAllIcon size={16} />
            Save
          </Link>
        </Button>
      )}
    </>
  )
}

export { SaveResume }
