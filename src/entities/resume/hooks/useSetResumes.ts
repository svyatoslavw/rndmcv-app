"use client"

import { useEffect } from "react"

import { setResumesFromServer } from "../model/resume.slice"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { changeIsResumeSavedEnabled } from "@/entities/user"
import { useGetResumesByUserIdQuery } from "@/shared/lib/api"

export const useSetResumes = () => {
  const dispatch = useAppDispatch()
  const isResumeSavedEnabled = useAppSelector((state) => state.settings.isResumeSavedEnabled)

  const { data: resumes, isSuccess } = useGetResumesByUserIdQuery({
    queryKey: ["get resumes by user id"],
    enabled: !!isResumeSavedEnabled
  })

  useEffect(() => {
    let isMounted = true

    if (!isResumeSavedEnabled) return

    const fetchResumes = () => {
      if (isSuccess) {
        if (!resumes.length) return

        dispatch(setResumesFromServer({ resumes }))
        dispatch(changeIsResumeSavedEnabled({ isEnabled: false }))
      }
    }
    fetchResumes()

    return () => {
      isMounted = false
    }
  }, [isResumeSavedEnabled, dispatch, isSuccess, resumes])
}
