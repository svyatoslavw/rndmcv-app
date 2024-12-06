import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

import {
  DeleteItemAction,
  GeneralEntity,
  GeneralState,
  ReorderItemsAction,
  ResumeStatus,
  SectionEntity,
  SectionKey,
  SelectItemAction,
  UpdateContentAction,
  UpdateDetailsAction,
  UpdateItemAction
} from "../../domain"

import {
  createResumeItemHelper,
  getSelectedGeneral,
  reorderArray,
  updateResumeItemDetailsHelper
} from "@/entities/resume"

const initialState: GeneralState = {
  generals: [],
  selectedId: ""
}

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    createGeneral: (state, action: PayloadAction<{ id: string; general: GeneralEntity }>) => {
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

      reorderArray(general[key].items as SectionEntity[], from, to)
    },
    createResumeItem: (state, action: PayloadAction<UpdateItemAction>) => {
      const general = getSelectedGeneral(state)

      if (!general) return

      createResumeItemHelper(general[action.payload.key].items, action.payload.item)
    },
    deleteResumeItem: (state, action: PayloadAction<DeleteItemAction>) => {
      const general = getSelectedGeneral(state)

      if (!general) return
      ;(general[action.payload.key].items as SectionEntity[]) = general[
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
        general[key].items as SectionEntity[],
        general[key].selected?.id!,
        values
      )
    },
    updatePersonalDetails: (state, action: PayloadAction<UpdateContentAction>) => {
      const general = getSelectedGeneral(state)

      if (!general) return

      general.person = { ...general.person, ...action.payload.values }
    },
    updateGeneralFlag: (
      state,
      action: PayloadAction<{ key: "isFirstLoading" | "isNameTyped"; value: boolean }>
    ) => {
      const general = getSelectedGeneral(state)

      if (!general) return

      general[action.payload.key] = action.payload.value
    },
    changeStatus: (state, action: PayloadAction<{ status: ResumeStatus }>) => {
      const general = getSelectedGeneral(state)

      if (!general) return

      general.status = action.payload.status
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
  toggleSectionVisibility,
  createResumeItem,
  deleteResumeItem,
  updateGeneralFlag,
  changeStatus
} = generalSlice.actions
