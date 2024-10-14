"use client"

import { useState } from "react"
import toast from "react-hot-toast"

import { useAppDispatch } from "@/app/store"
import { createResume, selectResumeSelectedId } from "@/entities/resume"
import { useProfile } from "@/entities/user"
import { useCreateResumeMutation } from "@/shared/lib/api"
import { CUSTOMIZATION_STATE, GENERAL_STATE } from "@/shared/lib/constants"
import type { ICustomization } from "@/shared/lib/types"

export const useCreateResume = () => {
  const dispatch = useAppDispatch()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const { profile } = useProfile()

  const { mutate, isPending: isLoading } = useCreateResumeMutation({
    onSuccess: ({ data }) => {
      dispatch(
        createResume({
          id: data.id,
          general: JSON.parse(data.general),
          customization: JSON.parse(data.customization)
        })
      )
      toast.success("Successfully created!")
    }
  })

  const onCreateResume = (customization: ICustomization) => {
    if (!profile || !profile.id) return

    mutate({
      customization: JSON.stringify({
        ...customization,
        layout: {
          ...customization.layout,
          columns: CUSTOMIZATION_STATE.layout.columns
        }
      }),
      general: JSON.stringify(GENERAL_STATE)
    })
  }

  const onSelectResume = (id: string) => {
    dispatch(selectResumeSelectedId({ id }))
  }

  return {
    functions: {
      onCreateResume,
      onSelectResume,
      setIsModalOpen
    },
    state: {
      isModalOpen,
      isLoading
    }
  }
}
