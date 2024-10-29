import { createSelector } from "@reduxjs/toolkit"

import { RootState } from "@/app/store"
import { ICustomization } from "@/shared/lib/types"

export const selectResume = createSelector(
  (state: RootState) => state.resume.resumes,
  (state: RootState) => state.resume.selectedId,
  (resumes, selectedId) => {
    if (selectedId) {
      const resume = resumes.find((resume) => resume.id === selectedId)

      if (resume) return resume
    }

    return resumes[0]
  }
)

export const selectGeneralResume = createSelector(selectResume, (resume) => resume.general)

export const selectCustomizationResume = <K extends keyof ICustomization>(field: K) =>
  createSelector(selectResume, (resume) => resume.customization[field])
