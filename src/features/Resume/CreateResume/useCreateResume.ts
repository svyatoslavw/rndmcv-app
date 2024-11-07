"use client"

import type { ICustomization } from "@/shared/types"

import { useState } from "react"
import toast from "react-hot-toast"

import { useAppDispatch } from "@/app/store"
import { createResume as createResumeToStore, selectResumeSelectedId } from "@/entities/resume"
import { useProfile } from "@/entities/user"
import { CUSTOMIZATION_STATE, GENERAL_STATE, RESPONSE_STATUS } from "@/shared/constants"
import { createResume } from "@/shared/lib/actions"

export const useCreateResume = () => {
  const dispatch = useAppDispatch()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { profile } = useProfile()

  const onCreateResume = async (customization: ICustomization) => {
    if (!profile) return

    setIsLoading(true)
    try {
      const response = await createResume({
        customization: JSON.stringify({
          ...customization,
          layout: {
            ...customization.layout,
            columns: CUSTOMIZATION_STATE.layout.columns
          }
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
    } catch {
      toast.error("Failed to create resume")
    } finally {
      setIsLoading(false)
    }
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
