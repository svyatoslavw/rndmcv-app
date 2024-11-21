import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

import { SectionKey } from "../domain"

import {
  createResumeItemHelper,
  getSelectedGeneral,
  reorderArray,
  updateResumeItemDetailsHelper
} from "./resume.helpers"
import type {
  DeleteItemAction,
  GeneralInitialState,
  IGeneral,
  ReorderItemsAction,
  SelectItemAction,
  UpdateContentAction,
  UpdateDetailsAction,
  UpdateItemAction
} from "@/shared/types"
import { SectionItem } from "@/shared/types"

const initialState: GeneralInitialState = {
  generals: [],
  selectedId: ""
}

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    createGeneral: (state, action: PayloadAction<{ id: string; general: IGeneral }>) => {
      if (!state.generals.find((it) => it.id === action.payload.general.id)) {
        state.generals = [...state.generals, { ...action.payload.general, id: action.payload.id }]
      }
    },
    setGeneralSelectedId: (state, action: PayloadAction<{ id: string }>) => {
      state.selectedId = action.payload.id
    },
    deleteGeneral: (state, action: PayloadAction<{ id: string }>) => {
      state.generals = state.generals.filter((item) => item.id !== action.payload.id)
    },

    selectItem: (state, action: PayloadAction<SelectItemAction>) => {
      const general = getSelectedGeneral(state)
      if (!general) return

      const { id, key } = action.payload
      const item = general[key].items.find((it) => it.id === id)

      if (item) general[key].selected = item
    },
    reorderItems: (state, action: PayloadAction<ReorderItemsAction>) => {
      const general = getSelectedGeneral(state)
      if (!general) return

      const { key, from, to } = action.payload

      reorderArray(general[key].items as SectionItem[], from, to)
    },
    createResumeItem: (state, action: PayloadAction<UpdateItemAction>) => {
      const general = getSelectedGeneral(state)
      if (!general) return

      createResumeItemHelper(general[action.payload.key].items, action.payload.item)
    },
    deleteResumeItem: (state, action: PayloadAction<DeleteItemAction>) => {
      const general = getSelectedGeneral(state)
      if (!general) return
      ;(general[action.payload.key].items as SectionItem[]) = general[
        action.payload.key
      ].items.filter((item) => item.id !== action.payload.id)
    },
    toggleSectionVisibility: (state, action: PayloadAction<SectionKey>) => {
      const general = getSelectedGeneral(state)
      if (!general) return

      if (general.visibleBlocks.includes(action.payload)) {
        general.visibleBlocks = general.visibleBlocks.filter((key) => key !== action.payload)
      } else {
        general.visibleBlocks.push(action.payload)
      }
    },
    updateResumeItemDetails: (state, action: PayloadAction<UpdateDetailsAction>) => {
      const general = getSelectedGeneral(state)
      if (!general) return

      const { key, values } = action.payload

      updateResumeItemDetailsHelper(
        general[key].items as SectionItem[],
        general[key].selected?.id!,
        values
      )
    },
    updatePersonalDetails: (state, action: PayloadAction<UpdateContentAction>) => {
      const general = getSelectedGeneral(state)
      if (!general) return

      general.person = { ...general.person, ...action.payload.values }
    },
    hideIsFirstLoading: (state) => {
      const general = getSelectedGeneral(state)
      if (!general) return

      general.isFirstLoading = false
    },
    hideIsNameTyped: (state) => {
      const general = getSelectedGeneral(state)
      if (!general) return

      general.isNameTyped = false
    },

    updateGeneralFlag(
      state,
      action: PayloadAction<{ key: "isFirstLoading" | "isNameTyped"; value: boolean }>
    ) {
      const general = getSelectedGeneral(state)
      if (!general) return

      general[action.payload.key] = action.payload.value
    }
  }
})

export const {
  createGeneral,
  setGeneralSelectedId,
  deleteGeneral,
  updatePersonalDetails,
  updateResumeItemDetails,
  selectItem,
  reorderItems,
  hideIsFirstLoading,
  toggleSectionVisibility,
  hideIsNameTyped,
  createResumeItem,
  deleteResumeItem,
  updateGeneralFlag
} = generalSlice.actions
