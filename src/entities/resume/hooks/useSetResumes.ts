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

  console.log("@rendered")

  useEffect(() => {
    let canceled = true

    const fetchResumes = async () => {
      const { data, status } = await getResumesByUserId()

      if (status === RESPONSE_STATUS.SUCCESS) {
        if (!data.length) return

        dispatch(setResumesFromServer({ resumes: data }))
        dispatch(changeIsResumeSavedEnabled({ isEnabled: false }))
      }
    }

    fetchResumes()

    return () => {
      canceled = false
    }
  }, [isResumeSavedEnabled])
}
