"use client"

import { selectResume, useResumeActions } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { Button, Input } from "@rndm/ui/components"
import { CheckIcon, SquarePenIcon } from "lucide-react"
import { useState } from "react"

const ChangeResumeName = () => {
  const { general } = useAppSelector(selectResume)
  const { changeName } = useResumeActions()

  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(general.title)

  const handleUpdateName = () => {
    if (!name) return
    setIsEditing(false)
    changeName({ name })
  }

  return (
    <div className="flex items-center gap-2">
      {isEditing ? (
        <form onSubmit={handleUpdateName} className="flex items-center gap-2">
          <Input value={name} onChange={(e) => setName(e.target.value)} className="w-full" />
          <Button
            disabled={!name}
            type="submit"
            variant="default"
            size="icon"
            onClick={handleUpdateName}
          >
            <CheckIcon size={16} />
          </Button>
        </form>
      ) : (
        <div className="flex items-center gap-2" onClick={() => setIsEditing(true)}>
          <h3 className="hover:text-foreground/60 text-xl font-bold transition">{general.title}</h3>
          <SquarePenIcon className="cursor-pointer" size={16} />
        </div>
      )}
    </div>
  )
}

export { ChangeResumeName }
