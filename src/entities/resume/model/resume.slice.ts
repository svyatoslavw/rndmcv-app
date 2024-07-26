import { IPerson, IProject } from "@/shared/lib"
import { isDate } from "@/shared/lib/utils"
import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

export interface IInitialState {
  person: IPerson
  projects: {
    items: IProject[]
    selected: IProject | null
  }
  isEditing: Exclude<keyof IInitialState, "isEditing"> | null
}

type UpdateContentAction = {
  key: keyof IPerson
  value: string | Date
}

type UpdateProjectAction = {
  key: keyof IProject
  value: string
}

type UpdateEditingAction = Exclude<keyof IInitialState, "isEditing">

const initialState: IInitialState = {
  person: {
    name: "Sviatoslav Stepanov",
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
  isEditing: null
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
    toggleEditing: (state, action: PayloadAction<UpdateEditingAction>) => {
      state.isEditing = state.isEditing === action.payload ? null : action.payload
    },
    addProject: (state) => {
      state.projects.items.push({
        id: Date.now().toString(),
        title: `New Project ${state.projects.items.length + 1}`,
        description: "Project description",
        url: "example.com"
      })
    },
    updateProjectDetails: (state, action: PayloadAction<UpdateProjectAction>) => {
      const { key, value } = action.payload
      if (state.projects.selected) {
        const project = state.projects.items.find((p) => p.id === state.projects.selected!.id)
        if (project) {
          project[key] = value
        }
      }
    },
    selectProject: (state, action: PayloadAction<string>) => {
      const project = state.projects.items.find((project) => project.id === action.payload)
      if (project) state.projects.selected = project
    },
    reorderProjects: (state, action: PayloadAction<{ from: number; to: number }>) => {
      const { from, to } = action.payload
      const item = state.projects.items[from]
      state.projects.items.splice(from, 1)
      state.projects.items.splice(to, 0, item)
    }
  }
})

export const {
  updatePersonalDetails,
  toggleEditing,
  updateProjectDetails,
  addProject,
  selectProject,
  reorderProjects
} = resumeSlice.actions
