import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"

import { resumeSlice } from "../slices/resume.slice"

import { useAppDispatch } from "@/shared/lib/store"

export const useResumeActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(resumeSlice.actions, dispatch), [])
}
