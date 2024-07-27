import { IEducation, IPerson, IProject } from "@/shared/lib"
import { isDate, reorderArray } from "@/shared/lib/utils"
import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

export interface IInitialState {
  person: IPerson
  projects: {
    items: IProject[]
    selected: IProject | null
  }
  education: {
    items: IEducation[]
    selected: IEducation | null
  }
  isEditing: Exclude<keyof IInitialState, "isEditing" | "isCreating"> | null
  isCreating: Exclude<keyof IInitialState, "isEditing" | "isCreating"> | null
}

type UpdateKey = "projects" | "education"

type UpdateContentAction = {
  key: keyof IPerson
  value: string | Date
}

type UpdateProjectAction = {
  key: keyof IProject
  value: string
}

type UpdateEducationAction = {
  key: keyof IEducation
  value: string | Date
}

type SelectItemAction = {
  key: UpdateKey
  id: string
}

type ReorderItemsAction = {
  key: UpdateKey
  from: number
  to: number
}

type ExcludedStateKeys = "isEditing" | "isCreating"

type UpdateStateKeysAction = {
  key: ExcludedStateKeys
  content: Exclude<keyof IInitialState, ExcludedStateKeys>
}

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
  education: {
    items: [],
    selected: null
  },
  isEditing: null,
  isCreating: null
}

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    toggleState: (state, action: PayloadAction<UpdateStateKeysAction>) => {
      const { key, content } = action.payload
      state[key] = state[key] === content ? null : content
    },
    updatePersonalDetails: (state, action: PayloadAction<UpdateContentAction>) => {
      const { key, value } = action.payload
      if (isDate(value)) {
        state.person.date = value.toISOString()
      } else {
        state.person[key] = value as string
      }
    },
    createProject: (state, action: PayloadAction<IProject>) => {
      const { title, description, url } = action.payload

      state.projects.items.push({
        id: Date.now().toString(),
        title,
        description,
        url
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
    selectItem: (state, action: PayloadAction<SelectItemAction>) => {
      const { id, key } = action.payload
      const item = state[key].items.find((it) => it.id === id)
      if (item) state[key].selected = item
    },
    reorderItems: (state, action: PayloadAction<ReorderItemsAction>) => {
      const { key, from, to } = action.payload
      switch (key) {
        case "projects":
          state.projects.items = reorderArray(state.projects.items, from, to)
          break
        case "education":
          state.education.items = reorderArray(state.education.items, from, to)
          break
      }
    },
    createEducation: (state, action: PayloadAction<IEducation>) => {
      const { school, city, country, degree, description, endDate, startDate } = action.payload

      state.education.items.push({
        id: Date.now().toString(),
        school,
        city,
        degree,
        country,
        startDate,
        endDate,
        description
      })
    },
    updateEducationDetails: (state, action: PayloadAction<UpdateEducationAction>) => {
      const { key, value } = action.payload
      if (state.education.selected) {
        const education = state.education.items.find((p) => p.id === state.education.selected!.id)
        if (education) {
          if ((key === "endDate" || key === "startDate") && isDate(value)) {
            education[key] = value.toISOString()
          } else {
            education[key] = value as string
          }
        }
      }
    }
  }
})

export const {
  updatePersonalDetails,
  toggleState,
  createProject,
  createEducation,
  updateProjectDetails,
  updateEducationDetails,
  selectItem,
  reorderItems
} = resumeSlice.actions
