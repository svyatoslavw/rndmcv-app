import { useAppDispatch } from "@/shared/lib/store"
import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { settingsSlice } from "../model/settings.slice"

export const useSettingsActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => {
    return bindActionCreators(settingsSlice.actions, dispatch)
  }, [dispatch])
}
