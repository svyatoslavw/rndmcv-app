import { useState } from "react"
import toast from "react-hot-toast"

import { useCreateResumeMutation } from "@/app/api/mutations"
import { useAppDispatch, useAppSelector } from "@/app/store"
import { createResume } from "@/entities/resume"
import { useProfile } from "@/entities/user"
import { CUSTOMIZATION_STATE, GENERAL_STATE } from "@/shared/lib/constants"

export const useCreateResume = () => {
  const dispatch = useAppDispatch()
  const resumes = useAppSelector((state) => state.resume.resumes)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const { profile } = useProfile()

  const { mutate, isPending: isLoading } = useCreateResumeMutation({
    onSuccess: ({ data }) => {
      dispatch(createResume(data))
      toast.success("Successfully created!")
    }
  })

  const handleCreateWithProfile = () =>
    mutate({
      customization: JSON.stringify(CUSTOMIZATION_STATE),
      general: JSON.stringify(GENERAL_STATE)
    })

  const handleCreateWithoutProfile = () =>
    dispatch(
      createResume({
        id: crypto.randomUUID(),
        customization: CUSTOMIZATION_STATE,
        general: GENERAL_STATE
      })
    )

  const onCreateResume = () => {
    if (resumes.length >= 1 && !profile) {
      setIsModalOpen(true)
      return
    }

    if (profile) {
      handleCreateWithProfile()
    } else {
      handleCreateWithoutProfile()
    }
  }

  return {
    onCreateResume,
    setIsModalOpen,
    isModalOpen,
    isLoading
  }
}
