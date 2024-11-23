"use client"

import { FilePlus2Icon } from "lucide-react"
import toast from "react-hot-toast"

import { createResumeService, createResumeToStore } from "@/entities/resume"
import { CUSTOMIZATION_STATE, GENERAL_STATE, RESPONSE_STATUS } from "@/shared/constants"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { Button } from "@/shared/ui"

const CreateResume = () => {
  const resumes = useAppSelector((state) => state.resume.ids)
  const dispatch = useAppDispatch()

  const createResume = async () => {
    try {
      if (resumes.length >= 1) throw new Error()

      const response = await createResumeService({
        customization: JSON.stringify({
          ...CUSTOMIZATION_STATE
        }),
        general: JSON.stringify({
          ...GENERAL_STATE
        })
      })

      if (response.status === RESPONSE_STATUS.ERROR) return

      if (response.status === RESPONSE_STATUS.SUCCESS) {
        dispatch(
          createResumeToStore({
            id: response.data.id,
            general: JSON.parse(response.data.general),
            customization: JSON.parse(response.data.customization)
          })
        )
        toast.success("Successfully created!")
      }
    } catch (e) {
      console.log("@e", e)

      toast.error("You already have a trial resume")
    }
  }

  return (
    <Button
      className="flex h-72 w-44 cursor-pointer items-center justify-center gap-2 border-2 border-dashed border-neutral-300 transition-all hover:border-primary hover:bg-inherit hover:text-primary"
      variant={"ghost"}
      onClick={() => createResume()}
    >
      <FilePlus2Icon size={44} strokeWidth={1.2} />
    </Button>
  )
}

export { CreateResume }
