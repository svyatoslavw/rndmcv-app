import { IPerson, IProject } from "@/shared/lib"
import { isDate } from "@/shared/lib/utils"
import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

export type ProfileKey = keyof Omit<IPerson, "isEditing">

export type UpdateContentAction = {
  key: ProfileKey
  value: string | Date
}

export interface IInitialState {
  person: IPerson
  projects: IProject[]
}

const initialState: IInitialState = {
  person: {
    name: "Sviatoslav Stepanov",
    job: "Frontend Developer",
    email: "test@gmail.com",
    phone: "+380999999999",
    address: "Kharkiv, Ukraine",
    date: new Date("01-01-2000").toISOString(),
    isEditing: false
  },
  projects: []
}

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    updatePersonalDetails: (state, action: PayloadAction<UpdateContentAction>) => {
      const { key, value } = action.payload
      if (isDate(value)) {
        state.person.date = value.toISOString()
      } else {
        state.person[key] = value as string
      }
    },
    togglePersonalEditing: (state) => {
      state.person.isEditing = !state.person.isEditing
    },
    addProject: (state) => {
      state.projects.push({
        id: Date.now().toString(),
        title: `New Project ${state.projects.length + 1}`,
        description: "Project description",
        url: "example.com"
      })
    },
    reorderProjects: (state, action: PayloadAction<{ from: number; to: number }>) => {
      const { from, to } = action.payload
      const item = state.projects[from]
      state.projects.splice(from, 1)
      state.projects.splice(to, 0, item)
    }
  }
})

export const { updatePersonalDetails, togglePersonalEditing, addProject, reorderProjects } =
  resumeSlice.actions
