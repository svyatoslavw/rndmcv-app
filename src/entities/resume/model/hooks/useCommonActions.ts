import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"

import { commonSlice } from "../slices/common.slice"

import { useAppDispatch } from "@/shared/lib/store"

export const useCommonActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(commonSlice.actions, dispatch), [])
}
