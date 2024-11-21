"use client"

import { AppDispatch } from "@/app/store"
import { hideIsNameTyped, updatePersonalDetails } from "@/entities/resume"

export const addResumeName = (dispatch: AppDispatch, name: string) => {
  dispatch(updatePersonalDetails({ values: { name } }))
  dispatch(hideIsNameTyped())
}
