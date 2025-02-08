"use client"

import { useState } from "react"
import toast from "react-hot-toast"

import { createResumeService, useResumeActions } from "@/entities/resume"
import { useProfile } from "@/entities/user"
import { PUBLIC_URLS } from "@/shared/config"
import { CUSTOMIZATION_STATE, GENERAL_STATE, RESPONSE_STATUS } from "@/shared/constants"
import { redirect } from "next/navigation"

export const useCreateResume = () => {
  const { createResume: createResumeToStore } = useResumeActions()
  const [isLoading, setIsLoading] = useState(false)
  const { profile } = useProfile()

  const createResume = async () => {
    if (!profile) redirect(PUBLIC_URLS.AUTH)

    setIsLoading(true)
    try {
      const response = await createResumeService({
        customization: JSON.stringify(CUSTOMIZATION_STATE),
        general: JSON.stringify(GENERAL_STATE)
      })

      if (response.status === RESPONSE_STATUS.ERROR) return

      if (response.status === RESPONSE_STATUS.SUCCESS) {
        createResumeToStore({
          id: response.data.id,
          general: JSON.parse(response.data.general),
          customization: JSON.parse(response.data.customization)
        })
        toast.success("Successfully created!")
      }
    } catch (error) {
      error instanceof Error ? toast.error(error.message) : toast.error("Failed to create resume")
    } finally {
      setIsLoading(false)
    }
  }

  return {
    functions: { createResume },
    state: { isLoading }
  }
}
