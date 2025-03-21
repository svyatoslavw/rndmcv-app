"use client"

import { useEffect } from "react"

import { useSettingsActions } from "@/entities/user"
import { RESPONSE_STATUS } from "@/shared/constants"
import { getResumesByUserId } from "@/shared/lib/actions"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { useResumeActions } from "./useResumeActions"

export const useSetResumes = () => {
  const dispatch = useAppDispatch()
  const { saveFromApi } = useResumeActions()
  const { changeIsResumeSavedEnabled } = useSettingsActions()
  const isResumeSavedEnabled = useAppSelector((state) => state.settings.isResumeSavedEnabled)

  useEffect(() => {
    let canceled = true

    const fetchResumes = async () => {
      const { data, status } = await getResumesByUserId()

      if (data.length === 0) return

      if (status === RESPONSE_STATUS.SUCCESS) {
        console.log("@data", data)

        saveFromApi({ response: data })
        changeIsResumeSavedEnabled({ isEnabled: false })
      }
    }

    fetchResumes()

    return () => {
      canceled = false
    }
  }, [isResumeSavedEnabled])
}
