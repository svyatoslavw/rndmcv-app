import type { IEducation, IExperience, IProject } from "@/shared/lib"
import { isDate, reorderArray } from "@/shared/lib/utils"
import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import type {
  IInitialStateResume,
  ReorderItemsAction,
  SelectItemAction,
  UpdateContentAction,
  UpdateEducationAction,
  UpdateExperienceAction,
  UpdateProjectAction
} from "./resume.types"

const initialState: IInitialStateResume = {
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
  experience: {
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
      switch (key) {
        case "projects":
          state.projects.items = reorderArray(state.projects.items, from, to)
          break
        case "education":
          state.education.items = reorderArray(state.education.items, from, to)
          break
        case "experience":
          state.experience.items = reorderArray(state.experience.items, from, to)
          break
      }
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
    },
    createExperience: (state, action: PayloadAction<IExperience>) => {
      const { employer, city, country, job, description, endDate, startDate } = action.payload

      state.experience.items.push({
        id: Date.now().toString(),
        employer,
        city,
        job,
        country,
        startDate,
        endDate,
        description
      })
    },
    updateExperienceDetails: (state, action: PayloadAction<UpdateExperienceAction>) => {
      const { key, value } = action.payload
      if (state.experience.selected) {
        const education = state.experience.items.find((p) => p.id === state.experience.selected!.id)
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
  createProject,
  createEducation,
  createExperience,
  updateProjectDetails,
  updateEducationDetails,
  updateExperienceDetails,
  selectItem,
  reorderItems
} = resumeSlice.actions
