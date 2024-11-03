"use client"

import { useEffect } from "react"

import { setResumesFromServer } from "../model/resume.slice"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { changeIsResumeSavedEnabled } from "@/entities/user"
import { getResumesByUserId } from "@/shared/lib/actions"
import { RESPONSE_STATUS } from "@/shared/lib/constants"

export const useSetResumes = () => {
  const dispatch = useAppDispatch()
  const isResumeSavedEnabled = useAppSelector((state) => state.settings.isResumeSavedEnabled)

  useEffect(() => {
    const fetchResumes = async () => {
      const response = await getResumesByUserId()

      if (response.status === RESPONSE_STATUS.SUCCESS) {
        if (!response.data.length) return

        dispatch(setResumesFromServer({ resumes: response.data }))
        dispatch(changeIsResumeSavedEnabled({ isEnabled: false }))
      }
    }

    fetchResumes()
  }, [isResumeSavedEnabled, dispatch])
}
