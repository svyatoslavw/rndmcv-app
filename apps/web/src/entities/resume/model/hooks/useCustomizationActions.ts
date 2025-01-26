import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"

import { useAppDispatch } from "@/shared/lib/store"
import { customizationSlice } from "../slices/customization.slice"

export const useCustomizationActions = (): ReturnType<typeof bindActionCreators> => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(customizationSlice.actions, dispatch), [])
}
