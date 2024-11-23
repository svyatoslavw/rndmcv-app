import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"

import { customizationSlice } from "../slices/customization.slice"

import { useAppDispatch } from "@/shared/lib/store"

export const useCustomizationActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(customizationSlice.actions, dispatch), [])
}
