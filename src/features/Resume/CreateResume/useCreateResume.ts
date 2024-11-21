"use client"

import { useState } from "react"
import toast from "react-hot-toast"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { createResumeToStore, selectResumeId } from "@/entities/resume"
import { useProfile } from "@/entities/user"
import { CUSTOMIZATION_STATE, GENERAL_STATE, RESPONSE_STATUS } from "@/shared/constants"
import { createResume } from "@/shared/lib/actions"
import type { ICustomization } from "@/shared/types"

export const useCreateResume = () => {
  const dispatch = useAppDispatch()
  const resumes = useAppSelector((state) => state.resume.ids)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { profile } = useProfile()

  const onCreateResume = async (customization: ICustomization) => {
    if (!profile) return

    setIsLoading(true)
    try {
      // if (resumes.length === 1) throw new Error()

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
    } catch (error) {
      error instanceof Error
        ? toast.error("You already have a trial resume")
        : toast.error("Failed to create resume")
    } finally {
      setIsLoading(false)
    }
  }

  const onSelectResume = (id: string) => {
    dispatch(selectResumeId(id))
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
