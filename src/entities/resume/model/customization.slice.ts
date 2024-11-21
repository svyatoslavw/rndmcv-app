import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

import { getSelectedCustomization } from "./resume.helpers"
import type {
  CustomizationInitialState,
  ICustomization,
  TypeApplyAccent,
  TypeBorderVisibility,
  UpdateColumnsPayload,
  UpdateCustomizationPayload,
  UpdateSectionsPayload
} from "@/shared/types"

const initialState: CustomizationInitialState = {
  customizations: [],
  selectedId: ""
}

export const customizationSlice = createSlice({
  name: "customization",
  initialState,
  reducers: {
    createCustomization: (
      state,
      action: PayloadAction<{ id: string; customization: ICustomization }>
    ) => {
      if (!state.customizations.find((it) => it.id === action.payload.customization.id)) {
        const { customization, id } = action.payload
        state.customizations = [...state.customizations, { ...customization, id }]
      }
    },
    setCustomizationSelectedId: (state, action: PayloadAction<{ id: string }>) => {
      state.selectedId = action.payload.id
    },
    deleteCustomization: (state, action: PayloadAction<{ id: string }>) => {
      state.customizations = state.customizations.filter((item) => item.id !== action.payload.id)
    },

    reorderColumns: (state, action: PayloadAction<UpdateColumnsPayload>) => {
      const customization = getSelectedCustomization(state)
      if (!customization) return

      customization.layout.columns.left = action.payload.left
      customization.layout.columns.right = action.payload.right
    },
    toggleAccentVisibility: (state, action: PayloadAction<{ key: keyof TypeApplyAccent }>) => {
      const customization = getSelectedCustomization(state)
      if (!customization) return

      const { key } = action.payload
      customization.colors.isAccent[key] = !customization.colors.isAccent[key]
    },
    toggleBorderVisibility: (state, action: PayloadAction<{ key: keyof TypeBorderVisibility }>) => {
      const customization = getSelectedCustomization(state)
      if (!customization) return

      const { key } = action.payload

      customization.colors.borderVisibility[key] = !customization.colors.borderVisibility[key]
    },
    updateCustomization: (state, action: PayloadAction<UpdateCustomizationPayload>) => {
      const customization = getSelectedCustomization(state)
      if (!customization) return

      const { key, value } = action.payload

      switch (key) {
        case "layout":
          customization.layout = { ...customization.layout, ...value }
          break
        case "colors":
          customization.colors = { ...customization.colors, ...value }
          break
        case "spacing":
          customization.spacing = { ...customization.spacing, ...value }
          break
        case "heading":
          customization.heading = { ...customization.heading, ...value }
          break
        case "name":
          customization.name = { ...customization.name, ...value }
          break
        case "job":
          customization.job = { ...customization.job, ...value }
          break
        case "font":
          customization.font = { ...customization.font, ...value }
          break
        default:
          break
      }
    },
    updateSections: (state, action: PayloadAction<UpdateSectionsPayload>) => {
      const customization = getSelectedCustomization(state)
      if (!customization) return

      const { key, value } = action.payload

      switch (key) {
        case "projects":
          customization.sections.projects = {
            ...customization.sections.projects,
            ...value
          }
          break
        case "education":
          customization.sections.education = {
            ...customization.sections.education,
            ...value
          }
          break
        case "experience":
          customization.sections.experience = {
            ...customization.sections.experience,
            ...value
          }
          break
        case "languages":
          customization.sections.languages = {
            ...customization.sections.languages,
            ...value
          }
          break
        case "skills":
          customization.sections.skills = {
            ...customization.sections.skills,
            ...value
          }
          break
        default:
          break
      }
    }
  }
})

export const {
  createCustomization,
  setCustomizationSelectedId,
  deleteCustomization,
  reorderColumns,
  toggleAccentVisibility,
  toggleBorderVisibility,
  updateCustomization,
  updateSections
} = customizationSlice.actions
