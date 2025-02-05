import { createSelector } from "@reduxjs/toolkit"

import { CustomizationEntity, GeneralEntity, ResumeEntity } from "@/shared/types"

import { RootState } from "@/shared/lib/store"

export const selectResume = createSelector(
  (state: RootState) => state.resume.entities,
  (state: RootState) => state.resume.selectedId,
  (state: RootState) => state.resume.ids,
  (entities, selectedId, ids): ResumeEntity => {
    const activeId = selectedId || ids[0]
    if (activeId && entities[activeId]) {
      return {
        id: activeId,
        ...entities[activeId]
      }
    }
    return {
      id: ids[0],
      ...entities[ids[0]]
    }
  }
)

export const selectResumes = createSelector(
  (state: RootState) => state.resume.entities,
  (state: RootState) => state.resume.ids,
  (entities, ids): ResumeEntity[] => {
    return ids.map((id) => ({
      id,
      ...entities[id]
    }))
  }
)

export const selectGeneralResume = <K extends keyof GeneralEntity>(field: K) =>
  createSelector(selectResume, (resume) => resume.general[field])

export const selectCustomizationResume = <K extends keyof CustomizationEntity>(field: K) =>
  createSelector(selectResume, (resume) => resume.customization[field])
