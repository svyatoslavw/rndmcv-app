"use client"

import { useState } from "react"
import toast from "react-hot-toast"

import { useCreateResumeMutation } from "@/app/api/mutations"
import { useAppDispatch, useAppSelector } from "@/app/store"
import { createResume, selectResumeSelectedId } from "@/entities/resume"
import { useProfile } from "@/entities/user"
import { GENERAL_STATE } from "@/shared/lib/constants"
import type { ICustomization } from "@/shared/lib/types"

export const useCreateResume = () => {
  const dispatch = useAppDispatch()
  const resumes = useAppSelector((state) => state.resume.resumes)

  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false)
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false)

  const { profile } = useProfile()

  const { mutate, isPending: isLoading } = useCreateResumeMutation({
    onSuccess: ({ data }) => {
      dispatch(createResume(data))
      toast.success("Successfully created!")
    }
  })

  const handleCreateWithProfile = (customization: ICustomization) =>
    mutate({
      customization: JSON.stringify(customization),
      general: JSON.stringify(GENERAL_STATE)
    })

  const handleCreateWithoutProfile = (customization: ICustomization) =>
    dispatch(
      createResume({
        id: crypto.randomUUID(),
        customization: customization,
        general: GENERAL_STATE
      })
    )

  const onCreateResume = (customization: ICustomization) => {
    if (resumes.length >= 1 && !profile) {
      setIsPricingModalOpen(true)
      return
    }

    if (profile) {
      handleCreateWithProfile(customization)
    } else {
      handleCreateWithoutProfile(customization)
    }
  }

  const onSelectResume = (id: string) => {
    dispatch(selectResumeSelectedId({ id }))
  }

  return {
    functions: {
      onCreateResume,
      onSelectResume,
      onShowPricing: setIsPricingModalOpen,
      onShowTemplate: setIsTemplateModalOpen
    },
    state: {
      isPricingModalOpen,
      isTemplateModalOpen,
      isLoading
    }
  }
}
