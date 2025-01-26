import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"

import { useAppDispatch } from "@/shared/lib/store"
import { generalSlice } from "../slices/general.slice"
import { statusSlice } from "../slices/status.slice"

export const useGeneralActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(
    () => bindActionCreators({ ...generalSlice.actions, ...statusSlice.actions }, dispatch),
    []
  )
}
