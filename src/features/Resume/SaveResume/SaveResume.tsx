"use client"

import { LoaderIcon, SaveAllIcon } from "lucide-react"
import Link from "next/link"

import { useSaveResume } from "./useSaveResume"

import { useProfile } from "@/entities/user"
import { PUBLIC_URLS } from "@/shared/config"
import { Button } from "@/shared/ui"

const SaveResume = () => {
  const { profile } = useProfile()
  const { isLoading, onSave } = useSaveResume()

  return (
    <>
      {profile ? (
        <Button className="gap-2" disabled={isLoading} variant={"outline"} onClick={onSave}>
          {isLoading ? (
            <LoaderIcon className="animate-spin" size={16} />
          ) : (
            <SaveAllIcon size={16} />
          )}
          Save
        </Button>
      ) : (
        <Button variant={"outline"}>
          <Link className="flex w-full items-center gap-2" href={PUBLIC_URLS.AUTH}>
            <SaveAllIcon size={16} />
            Save
          </Link>
        </Button>
      )}
    </>
  )
}

export { SaveResume }
