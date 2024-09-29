"use client"

import { useEffect } from "react"

import { setResumesFromServer } from "../model/resume.slice"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { resumeService } from "@/entities/common"
import { changeIsResumeSavedEnabled } from "@/entities/user"

export const useSetResumes = () => {
  const isResumeSavedEnabled = useAppSelector((state) => state.settings.isResumeSavedEnabled)
  const dispatch = useAppDispatch()

  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      if (isResumeSavedEnabled) {
        const { data: resumes } = await resumeService.getByUserId()
        if (resumes && resumes.length) dispatch(setResumesFromServer({ resumes }))
        dispatch(changeIsResumeSavedEnabled({ isEnabled: false }))
      }
    }
    fetchData()

    return () => {
      isMounted = false
    }
  }, [isResumeSavedEnabled, dispatch])
}
