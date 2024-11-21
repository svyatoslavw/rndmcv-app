"use client"

import { useEffect } from "react"

import { setResumesFromServer } from "../model/resume.actions"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { changeIsResumeSavedEnabled } from "@/entities/user"
import { RESPONSE_STATUS } from "@/shared/constants"
import { getResumesByUserId } from "@/shared/lib/actions"

export const useSetResumes = () => {
  const dispatch = useAppDispatch()
  const isResumeSavedEnabled = useAppSelector((state) => state.settings.isResumeSavedEnabled)

  useEffect(() => {
    let canceled = true

    const fetchResumes = async () => {
      const { data, status } = await getResumesByUserId()

      if (data.length === 0) return

      if (status === RESPONSE_STATUS.SUCCESS) {
        console.log("@data", data)

        await dispatch(setResumesFromServer(data))
        dispatch(changeIsResumeSavedEnabled({ isEnabled: false }))
      }
    }

    fetchResumes()

    return () => {
      canceled = false
    }
  }, [isResumeSavedEnabled])
}
