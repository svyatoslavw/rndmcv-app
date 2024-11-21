"use client"

import { RootState, useAppDispatch, useAppSelector } from "@/app/store"

export const getStoreFunctions = <T>(selector: (state: RootState) => T) => {
  const dispatch = useAppDispatch()
  const dataStore = useAppSelector(selector)
  return {
    dispatch,
    dataStore
  }
}
