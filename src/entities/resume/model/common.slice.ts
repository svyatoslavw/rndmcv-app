import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

import { ResumeInitialState } from "@/shared/types"

export interface IInitialStateResume {
  ids: string[]
  selectedId: string | null
}

const initialState: ResumeInitialState = {
  ids: [],
  selectedId: null
}

export const commonSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    // setResumesFromServer: (state, action: PayloadAction<{ resumes: IResumeResponse[] }>) => {
    //   const { resumes } = action.payload

    //   resumes.forEach((resume) => {
    //     if (!state.resumes.find((it) => it.id === resume.id)) {
    //       state.resumes.push({
    //         id: resume.id,
    //         customization: JSON.parse(resume.customization),
    //         general: JSON.parse(resume.general)
    //       })
    //     }
    //   })

    //   state.selectedId = resumes[0].id
    // },
    createId: (state, action: PayloadAction<{ id: string }>) => {
      if (!state.ids.find((it) => it === action.payload.id)) {
        state.ids = [...state.ids, action.payload.id]
      }
    },
    deleteSelectedId: (state, action: PayloadAction<{ id: string }>) => {
      state.ids = state.ids.filter((it) => it !== action.payload.id)
      state.selectedId = state.ids[0]
    },
    setSelectedId: (state, action: PayloadAction<{ id: string }>) => {
      if (!state.ids.includes(action.payload.id)) {
        state.ids = [...state.ids, action.payload.id]
      }
      state.selectedId = action.payload.id
    }
    // createResume: (state, action: PayloadAction<IResumeResponse>) => {
    //   const { id, customization, general } = action.payload

    //   state.resumes.push({
    //     id,
    //     general: JSON.parse(general),
    //     customization: JSON.parse(customization)
    //   })
    // },
    // deleteResumeFromStore: (state, action: PayloadAction<{ id: string }>) => {
    //   state.resumes = state.resumes.filter((it) => it.id !== action.payload.id)
    // }
  }
})

export const { createId, setSelectedId, deleteSelectedId } = commonSlice.actions
