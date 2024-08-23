import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

import type {
  IInitialStateResume,
  ReorderItemsAction,
  SelectItemAction,
  UpdateContentAction,
  UpdateDetailsAction,
  UpdateItemAction
} from "./resume.types"
import { IPersonInfo, IPersonLink, TSectionItem, TSectionKey } from "@/shared/lib"
import {
  createResumeItemHelper,
  isDate,
  reorderArray,
  updateResumeItemDetailsHelper
} from "@/shared/lib/utils"

const initialState: IInitialStateResume = {
  isFirstLoading: true,
  visibleBlocks: [],
  person: {
    name: "",
    job: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    information: [],
    links: []
  },
  projects: {
    items: [],
    selected: null
  },
  education: {
    items: [],
    selected: null
  },
  experience: {
    items: [],
    selected: null
  },
  skills: {
    items: [],
    selected: null
  },
  languages: {
    items: [],
    selected: null
  },
  certificates: {
    items: [],
    selected: null
  }
}

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    toggleSectionVisibility: (state, action: PayloadAction<TSectionKey>) => {
      if (state.visibleBlocks.includes(action.payload)) {
        state.visibleBlocks = state.visibleBlocks.filter((key) => key !== action.payload)
      } else {
        state.visibleBlocks.push(action.payload)
      }
    },
    hideSectionInResume: (state, action: PayloadAction<TSectionKey>) => {},
    selectItem: (state, action: PayloadAction<SelectItemAction>) => {
      const { id, key } = action.payload
      const item = state[key].items.find((it) => it.id === id)
      if (item) state[key].selected = item
    },
    reorderItems: (state, action: PayloadAction<ReorderItemsAction>) => {
      const { key, from, to } = action.payload
      reorderArray(state[key].items as TSectionItem[], from, to)
    },
    createResumeItem: (state, action: PayloadAction<UpdateItemAction>) => {
      const { key, item } = action.payload
      createResumeItemHelper(state[key].items, item)
    },
    updateResumeItemDetails: (state, action: PayloadAction<UpdateDetailsAction>) => {
      const { key, field, value } = action.payload
      updateResumeItemDetailsHelper(
        state[key].items as TSectionItem[],
        state[key].selected?.id ?? null,
        field,
        value
      )
    },
    updatePersonalDetails: (state, action: PayloadAction<UpdateContentAction>) => {
      const { key, value } = action.payload
      if (isDate(value)) {
        state.person.date = value.toISOString()
      } else if (key === "information") {
        state.person.information = value as IPersonInfo[]
      } else if (key === "links") {
        state.person.links = value as IPersonLink[]
      } else {
        state.person[key] = value as string
      }
    },
    hideIsFirstLoading: (state) => {
      state.isFirstLoading = false
    }
  }
})

export const {
  updatePersonalDetails,
  createResumeItem,
  updateResumeItemDetails,
  selectItem,
  reorderItems,
  toggleSectionVisibility,
  hideIsFirstLoading
} = resumeSlice.actions
