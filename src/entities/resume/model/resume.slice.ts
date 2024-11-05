import type { PayloadAction } from "@reduxjs/toolkit"
import type {
  DeleteItemAction,
  IInitialStateResume,
  IResumeResponse,
  ReorderItemsAction,
  SelectItemAction,
  TypeApplyAccent,
  TypeBorderVisibility,
  UpdateColumnsPayload,
  UpdateContentAction,
  UpdateCustomizationPayload,
  UpdateDetailsAction,
  UpdateItemAction,
  UpdateSectionsPayload
} from "@/shared/lib/types"

import { createSlice } from "@reduxjs/toolkit"

import {
  createResumeItemHelper,
  getSelectedResume,
  reorderArray,
  updateResumeItemDetailsHelper
} from "./resume.helpers"

import { SectionItem, SectionKey } from "@/shared/lib/types"

const initialState: IInitialStateResume = {
  resumes: [],
  selectedId: null
}

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    setResumesFromServer: (state, action: PayloadAction<{ resumes: IResumeResponse[] }>) => {
      const { resumes } = action.payload

      resumes.forEach((resume) => {
        if (!state.resumes.find((it) => it.id === resume.id)) {
          state.resumes.push({
            id: resume.id,
            customization: JSON.parse(resume.customization),
            general: JSON.parse(resume.general)
          })
        }
      })

      state.selectedId = resumes[0].id
    },
    toggleSectionVisibility: (state, action: PayloadAction<SectionKey>) => {
      const resume = getSelectedResume(state)

      if (!resume) return

      if (resume.general.visibleBlocks.includes(action.payload)) {
        resume.general.visibleBlocks = resume.general.visibleBlocks.filter(
          (key) => key !== action.payload
        )
      } else {
        resume.general.visibleBlocks.push(action.payload)
      }
    },
    selectItem: (state, action: PayloadAction<SelectItemAction>) => {
      const resume = getSelectedResume(state)

      if (!resume) return

      const { id, key } = action.payload
      const item = resume.general[key].items.find((it) => it.id === id)

      if (item) resume.general[key].selected = item
    },
    reorderItems: (state, action: PayloadAction<ReorderItemsAction>) => {
      const resume = getSelectedResume(state)

      if (!resume) return

      const { key, from, to } = action.payload

      reorderArray(resume.general[key].items as SectionItem[], from, to)
    },
    createResumeItem: (state, action: PayloadAction<UpdateItemAction>) => {
      const resume = getSelectedResume(state)

      if (!resume) return

      createResumeItemHelper(resume.general[action.payload.key].items, action.payload.item)
    },

    deleteResumeItem: (state, action: PayloadAction<DeleteItemAction>) => {
      const resume = getSelectedResume(state)

      if (!resume) return
      ;(resume.general[action.payload.key].items as SectionItem[]) = resume.general[
        action.payload.key
      ].items.filter((item) => item.id !== action.payload.id)
    },
    updateResumeItemDetails: (state, action: PayloadAction<UpdateDetailsAction>) => {
      const resume = getSelectedResume(state)

      if (!resume) return

      updateResumeItemDetailsHelper(
        resume.general[action.payload.key].items as SectionItem[],
        resume.general[action.payload.key].selected?.id!,
        action.payload.values
      )
    },
    updatePersonalDetails: (state, action: PayloadAction<UpdateContentAction>) => {
      const resume = getSelectedResume(state)

      if (!resume) return

      resume.general.person = { ...resume.general.person, ...action.payload.values }
    },
    hideIsFirstLoading: (state) => {
      const resume = getSelectedResume(state)

      if (!resume) return

      resume.general.isFirstLoading = false
    },
    hideIsNameTyped: (state) => {
      const resume = getSelectedResume(state)

      if (!resume) return

      resume.general.isNameTyped = false
    },
    reorderColumns: (state, action: PayloadAction<UpdateColumnsPayload>) => {
      const resume = getSelectedResume(state)

      if (!resume) return

      resume.customization.layout.columns.left = action.payload.left
      resume.customization.layout.columns.right = action.payload.right
    },
    toggleAccentVisibility: (state, action: PayloadAction<{ key: keyof TypeApplyAccent }>) => {
      const resume = getSelectedResume(state)

      if (!resume) return

      const { key } = action.payload

      resume.customization.colors.isAccent[key] = !resume.customization.colors.isAccent[key]
    },
    toggleBorderVisibility: (state, action: PayloadAction<{ key: keyof TypeBorderVisibility }>) => {
      const resume = getSelectedResume(state)

      if (!resume) return

      const { key } = action.payload

      resume.customization.colors.borderVisibility[key] =
        !resume.customization.colors.borderVisibility[key]
    },
    updateCustomization: (state, action: PayloadAction<UpdateCustomizationPayload>) => {
      const resume = getSelectedResume(state)

      if (!resume) return

      const { key, value } = action.payload

      switch (key) {
        case "layout":
          resume.customization.layout = { ...resume.customization.layout, ...value }
          break
        case "colors":
          resume.customization.colors = { ...resume.customization.colors, ...value }
          break
        case "spacing":
          resume.customization.spacing = { ...resume.customization.spacing, ...value }
          break
        case "heading":
          resume.customization.heading = { ...resume.customization.heading, ...value }
          break
        case "name":
          resume.customization.name = { ...resume.customization.name, ...value }
          break
        case "job":
          resume.customization.job = { ...resume.customization.job, ...value }
          break
        case "font":
          resume.customization.font = { ...resume.customization.font, ...value }
          break
        default:
          break
      }
    },

    updateSections: (state, action: PayloadAction<UpdateSectionsPayload>) => {
      const resume = getSelectedResume(state)

      if (!resume) return

      const { key, value } = action.payload

      switch (key) {
        case "projects":
          resume.customization.sections.projects = {
            ...resume.customization.sections.projects,
            ...value
          }
          break
        case "education":
          resume.customization.sections.education = {
            ...resume.customization.sections.education,
            ...value
          }
          break
        case "experience":
          resume.customization.sections.experience = {
            ...resume.customization.sections.experience,
            ...value
          }
          break
        case "languages":
          resume.customization.sections.languages = {
            ...resume.customization.sections.languages,
            ...value
          }
          break
        case "skills":
          resume.customization.sections.skills = {
            ...resume.customization.sections.skills,
            ...value
          }
          break
        default:
          break
      }
    },
    selectResumeSelectedId: (state, action: PayloadAction<{ id: string }>) => {
      state.selectedId = action.payload.id
    },
    createResume: (state, action: PayloadAction<IResumeResponse>) => {
      const { id, customization, general } = action.payload

      state.resumes.push({
        id,
        general: JSON.parse(general),
        customization: JSON.parse(customization)
      })
    }
  }
})

export const {
  updatePersonalDetails,
  createResumeItem,
  deleteResumeItem,
  updateResumeItemDetails,
  selectItem,
  reorderItems,
  toggleSectionVisibility,
  hideIsFirstLoading,
  hideIsNameTyped,
  reorderColumns,
  toggleAccentVisibility,
  toggleBorderVisibility,
  updateCustomization,
  updateSections,
  selectResumeSelectedId,
  setResumesFromServer,
  createResume
} = resumeSlice.actions
