import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"

import { useAppDispatch } from "@/shared/lib/store"
import { statusSlice } from "../slices/status.slice"

export const useStatusActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(statusSlice.actions, dispatch), [])
}
