import {
  createResumeItemHelper,
  isDate,
  reorderArray,
  updateResumeItemDetailsHelper
} from "@/shared/lib/utils"
import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import type {
  IInitialStateResume,
  ReorderItemsAction,
  SelectItemAction,
  TUpdateItem,
  UpdateContentAction,
  UpdateDetailsAction,
  UpdateItemAction
} from "./resume.types"

const initialState: IInitialStateResume = {
  person: {
    name: "Name Surname",
    job: "Frontend Developer",
    email: "test@gmail.com",
    phone: "+380999999999",
    address: "Kharkiv, Ukraine",
    date: new Date("01-01-2000").toISOString()
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
  }
}

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    selectItem: (state, action: PayloadAction<SelectItemAction>) => {
      const { id, key } = action.payload
      const item = state[key].items.find((it) => it.id === id)
      if (item) state[key].selected = item
    },
    reorderItems: (state, action: PayloadAction<ReorderItemsAction>) => {
      const { key, from, to } = action.payload
      reorderArray(state[key].items as TUpdateItem[], from, to)
    },
    createResumeItem: (state, action: PayloadAction<UpdateItemAction>) => {
      const { key, item } = action.payload
      createResumeItemHelper(state[key].items, item)
    },
    updateResumeItemDetails: (state, action: PayloadAction<UpdateDetailsAction>) => {
      const { key, field, value } = action.payload
      updateResumeItemDetailsHelper(
        state[key].items as TUpdateItem[],
        state[key].selected?.id ?? null,
        field,
        value
      )
    },
    updatePersonalDetails: (state, action: PayloadAction<UpdateContentAction>) => {
      const { key, value } = action.payload
      if (isDate(value)) {
        state.person.date = value.toISOString()
      } else {
        state.person[key] = value as string
      }
    }
  }
})

export const {
  updatePersonalDetails,
  createResumeItem,
  updateResumeItemDetails,
  selectItem,
  reorderItems
} = resumeSlice.actions
