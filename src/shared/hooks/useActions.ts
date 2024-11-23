import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"

import { rootActions, useAppDispatch } from "../lib/store"

import { commonSlice, generalSlice } from "@/entities/resume"

export const useActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [])
}

export const useGeneralActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(generalSlice.actions, dispatch), [])
}

export const useCustomizationActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(generalSlice.actions, dispatch), [])
}

export const useIdActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(commonSlice.actions, dispatch), [])
}
