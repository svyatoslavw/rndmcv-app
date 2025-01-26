import { createSelector } from "@reduxjs/toolkit"

import { RootState } from "@/shared/lib/store"
import { CustomizationEntity, GeneralEntity, ResumeEntity } from "../../domain"

export const selectResume = createSelector(
  (state: RootState) => state.general.generals,
  (state: RootState) => state.customization.customizations,
  (state: RootState) => state.resume.selectedId,
  (generals, customizations, selectedId): ResumeEntity => {
    if (selectedId) {
      const selectedGeneral = generals.find((item) => item.id === selectedId)
      const selectedCustomization = customizations.find((item) => item.id === selectedId)

      if (selectedGeneral && selectedCustomization) {
        return {
          id: selectedGeneral.id,
          general: selectedGeneral,
          customization: selectedCustomization
        }
      }
    }

    return {
      id: generals[0].id,
      general: generals[0],
      customization: customizations[0]
    }
  }
)

export const selectResumes = createSelector(
  (state: RootState) => state.general.generals,
  (state: RootState) => state.customization.customizations,
  (state: RootState) => state.resume,
  (generals, customizations, resume): ResumeEntity[] => {
    return resume.ids.map((item) => ({
      id: item,
      general: generals.find((it) => it.id === item)!,
      customization: customizations.find((it) => it.id === item)!
    }))
  }
)

export const selectGeneralResume = <K extends keyof GeneralEntity>(field: K) =>
  createSelector(selectResume, (resume) => resume.general[field])

export const selectCustomizationResume = <K extends keyof CustomizationEntity>(field: K) =>
  createSelector(selectResume, (resume) => resume.customization[field])
