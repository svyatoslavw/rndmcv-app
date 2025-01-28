import { createSelector } from "@reduxjs/toolkit"

import { CustomizationEntity, GeneralEntity, ResumeEntity } from "../../domain"

import { RootState } from "@/shared/lib/store"

export const selectResume = createSelector(
  (state: RootState) => state.general.generals,
  (state: RootState) => state.customization.customizations,
  (state: RootState) => state.resume.ids,
  (state: RootState) => state.resume.selectedId,
  (generals, customizations, ids, id): ResumeEntity => {
    if (id) {
      const selectedGeneral = generals.find((item) => item.id === id)
      const selectedCustomization = customizations.find((item) => item.id === id)
      const selectedId = ids.find((item) => item === id)

      if (selectedGeneral && selectedCustomization && selectedId) {
        return {
          id: selectedId,
          general: selectedGeneral,
          customization: selectedCustomization
        }
      }
    }

    return {
      id: ids[0],
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
