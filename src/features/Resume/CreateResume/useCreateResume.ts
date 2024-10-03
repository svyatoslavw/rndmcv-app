"use client"

import { useState } from "react"
import toast from "react-hot-toast"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { createResume, selectResumeSelectedId } from "@/entities/resume"
import { useProfile } from "@/entities/user"
import { useCreateResumeMutation } from "@/shared/lib/api/mutations"
import { CUSTOMIZATION_STATE, GENERAL_STATE } from "@/shared/lib/constants"
import type { ICustomization } from "@/shared/lib/types"

export const useCreateResume = () => {
  const dispatch = useAppDispatch()
  const resumes = useAppSelector((state) => state.resume.resumes)

  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false)
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false)

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

  const handleCreateWithProfile = (customization: ICustomization) => {
    if (!profile || !profile.id) return

    mutate({
      customization: JSON.stringify(customization),
      general: JSON.stringify(GENERAL_STATE)
    })
  }

  const handleCreateWithoutProfile = (customization: ICustomization) => {
    const { layout, ...rest } = customization
    dispatch(
      createResume({
        id: crypto.randomUUID(),
        customization: { ...rest, layout: CUSTOMIZATION_STATE.layout },
        general: GENERAL_STATE
      })
    )
  }

  const onCreateResume = (customization: ICustomization) => {
    if (resumes.length >= 1 && !profile) {
      return
    }

    if (profile && profile.id) {
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
