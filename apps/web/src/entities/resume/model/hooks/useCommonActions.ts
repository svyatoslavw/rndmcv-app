import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"

import { useAppDispatch } from "@/shared/lib/store"
import { commonSlice } from "../slices/common.slice"

export const useCommonActions = (): ReturnType<typeof bindActionCreators> => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(commonSlice.actions, dispatch), [])
}
