import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

import {
  GENERAL_STATE,
  createResumeItemHelper,
  getSelectedResume,
  reorderArray,
  updateResumeItemDetailsHelper
} from "./resume.helpers"
import type {
  DeleteItemAction,
  IInitialStateResume,
  IResume,
  ReorderItemsAction,
  SelectItemAction,
  TApplyAccent,
  UpdateColumnsPayload,
  UpdateContentAction,
  UpdateCustomizationPayload,
  UpdateDetailsAction,
  UpdateItemAction
} from "./resume.types"
import { CUSTOMIZATION_STATE } from "@/shared/lib/constants"
import { TSectionItem, TSectionKey } from "@/shared/lib/types"

const initialState: IInitialStateResume = {
  resumes: [
    {
      id: crypto.randomUUID(),
      general: { ...GENERAL_STATE },
      customization: { ...CUSTOMIZATION_STATE }
    }
  ],
  selectedId: null
}

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    toggleSectionVisibility: (state, action: PayloadAction<TSectionKey>) => {
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
      reorderArray(resume.general[key].items as TSectionItem[], from, to)
    },
    createResumeItem: (state, action: PayloadAction<UpdateItemAction>) => {
      const resume = getSelectedResume(state)
      if (!resume) return

      createResumeItemHelper(resume.general[action.payload.key].items, action.payload.item)
    },

    deleteResumeItem: (state, action: PayloadAction<DeleteItemAction>) => {
      const resume = getSelectedResume(state)
      if (!resume) return

      let items = resume.general[action.payload.key].items as TSectionItem[]
      items = items.filter((item) => item.id !== action.payload.id)
    },
    updateResumeItemDetails: (state, action: PayloadAction<UpdateDetailsAction>) => {
      const resume = getSelectedResume(state)
      if (!resume) return

      updateResumeItemDetailsHelper(
        resume.general[action.payload.key].items as TSectionItem[],
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
    toggleAccentVisibility: (state, action: PayloadAction<{ key: keyof TApplyAccent }>) => {
      const resume = getSelectedResume(state)
      if (!resume) return

      const { key } = action.payload
      resume.customization.colors.isAccent[key] = !resume.customization.colors.isAccent[key]
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
        default:
          break
      }
    },
    selectResumeSelectedId: (state, action: PayloadAction<{ id: string }>) => {
      state.selectedId = action.payload.id
    },
    createResume: (state, action: PayloadAction<{ resume: IResume }>) => {
      state.resumes.push({
        id: crypto.randomUUID(),
        general: { ...GENERAL_STATE },
        customization: { ...CUSTOMIZATION_STATE }
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
  updateCustomization,
  selectResumeSelectedId
} = resumeSlice.actions
