// ... existing code ...

import {
  AccentOptions,
  BorderOptions,
  CustomizationEntity,
  DeleteItemAction,
  GeneralEntity,
  IResumeResponse,
  ReorderItemsAction,
  ResumeStatus,
  SectionEntity,
  SectionKey,
  SelectItemAction,
  UpdateColumnsPayload,
  UpdateContentAction,
  UpdateCustomizationPayload,
  UpdateDetailsAction,
  UpdateItemAction,
  UpdateSectionsPayload
} from "@/shared/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  createResumeItemHelper,
  reorderArray,
  updateResumeItemDetailsHelper
} from "../helpers/common"

interface ResumeState {
  ids: string[]
  selectedId: string | null
  entities: {
    [key: string]: {
      general: GeneralEntity
      customization: CustomizationEntity
    }
  }
}

const initialState: ResumeState = {
  ids: [],
  selectedId: null,
  entities: {}
}

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    createResume: (
      state,
      action: PayloadAction<{
        id: string
        general: GeneralEntity
        customization: CustomizationEntity
      }>
    ) => {
      const { id, general, customization } = action.payload
      if (!state.ids.includes(id)) {
        state.ids.push(id)
        state.entities[id] = { general, customization }
      }
    },
    saveFromApi: (state, action: PayloadAction<{ response: IResumeResponse[] }>) => {
      const { response } = action.payload
      response.forEach((item) => {
        const { id, general, customization } = item
        if (!state.ids.includes(id)) {
          state.ids.push(id)
          state.entities[id] = {
            general: JSON.parse(general),
            customization: JSON.parse(customization)
          }
        }
      })
    },

    deleteResume: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload
      state.ids = state.ids.filter((itemId) => itemId !== id)
      delete state.entities[id]
      state.selectedId = state.ids[0] || null
    },

    setSelectedResume: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload
      if (state.ids.includes(id)) {
        state.selectedId = id
      }
    },

    selectItem: (state, action: PayloadAction<SelectItemAction>) => {
      const activeId = state.selectedId || state.ids[0]
      if (!activeId || !state.entities[activeId]) return

      const { id, key } = action.payload
      const general = state.entities[activeId].general
      const item = general[key].items.find((it) => it.id === id)

      if (item) {
        general[key].selected = item
      }
    },

    reorderItems: (state, action: PayloadAction<ReorderItemsAction>) => {
      const activeId = state.selectedId || state.ids[0]
      if (!activeId || !state.entities[activeId]) return

      const { key, from, to } = action.payload
      const items = state.entities[activeId].general[key].items as SectionEntity[]
      reorderArray(items, from, to)
    },

    createResumeItem: (state, action: PayloadAction<UpdateItemAction>) => {
      const activeId = state.selectedId || state.ids[0]
      if (!activeId || !state.entities[activeId]) return

      const general = state.entities[activeId].general
      createResumeItemHelper(general[action.payload.key].items, action.payload.item)
    },

    deleteResumeItem: (state, action: PayloadAction<DeleteItemAction>) => {
      const activeId = state.selectedId || state.ids[0]
      if (!activeId || !state.entities[activeId]) return

      // ;(general[action.payload.key].items as any) = general[action.payload.key].items.filter(
      //   (item) => item.id !== action.payload.id
      // )
      const general = state.entities[activeId].general

      const section = general[action.payload.key]

      section.items = general[action.payload.key].items.filter(
        (item) => item.id !== action.payload.id
      ) as typeof section.items
    },

    // Операции с секциями и видимостью
    toggleSectionVisibility: (state, action: PayloadAction<SectionKey>) => {
      const activeId = state.selectedId || state.ids[0]
      if (!activeId || !state.entities[activeId]) return

      const general = state.entities[activeId].general
      const section = action.payload

      if (general.visibleBlocks.includes(section)) {
        general.visibleBlocks = general.visibleBlocks.filter((key) => key !== section)
      } else {
        general.visibleBlocks.push(section)
      }
    },

    // Обновление деталей и персональной информации
    updateResumeItemDetails: (state, action: PayloadAction<UpdateDetailsAction>) => {
      const activeId = state.selectedId || state.ids[0]
      if (!activeId || !state.entities[activeId]) return

      const general = state.entities[activeId].general
      const { key, values } = action.payload

      updateResumeItemDetailsHelper(
        general[key].items as SectionEntity[],
        general[key].selected?.id!,
        values
      )
    },
    updatePersonalDetails: (state, action: PayloadAction<UpdateContentAction>) => {
      const activeId = state.selectedId || state.ids[0]
      if (!activeId || !state.entities[activeId]) return

      const general = state.entities[activeId].general
      general.person = { ...general.person, ...action.payload.values }
    },
    updateGeneralFlag: (
      state,
      action: PayloadAction<{ key: "isFirstLoading" | "isNameTyped"; value: boolean }>
    ) => {
      const activeId = state.selectedId || state.ids[0]
      if (!activeId || !state.entities[activeId]) return

      const general = state.entities[activeId].general
      general[action.payload.key] = action.payload.value
    },
    changeStatus: (state, action: PayloadAction<{ status: ResumeStatus }>) => {
      const activeId = state.selectedId || state.ids[0]
      if (!activeId || !state.entities[activeId]) return

      state.entities[activeId].general.status = action.payload.status
    },
    reorderColumns: (state, action: PayloadAction<UpdateColumnsPayload>) => {
      const activeId = state.selectedId || state.ids[0]
      if (!activeId || !state.entities[activeId]) return

      const customization = state.entities[activeId].customization
      customization.layout.columns.left = action.payload.left
      customization.layout.columns.right = action.payload.right
    },
    toggleAccentVisibility: (state, action: PayloadAction<{ key: keyof AccentOptions }>) => {
      const activeId = state.selectedId || state.ids[0]
      if (!activeId || !state.entities[activeId]) return

      const customization = state.entities[activeId].customization
      customization.colors.isAccent[action.payload.key] =
        !customization.colors.isAccent[action.payload.key]
    },
    toggleBorderVisibility: (state, action: PayloadAction<{ key: keyof BorderOptions }>) => {
      const activeId = state.selectedId || state.ids[0]
      if (!activeId || !state.entities[activeId]) return

      const customization = state.entities[activeId].customization
      customization.colors.borderVisibility[action.payload.key] =
        !customization.colors.borderVisibility[action.payload.key]
    },
    updateCustomization: (state, action: PayloadAction<UpdateCustomizationPayload>) => {
      const activeId = state.selectedId || state.ids[0]
      if (!activeId || !state.entities[activeId]) return

      const customization = state.entities[activeId].customization
      const { key, value } = action.payload

      //@ts-ignore
      customization[key] = { ...customization[key], ...value }
    },
    updateSections: (state, action: PayloadAction<UpdateSectionsPayload>) => {
      const activeId = state.selectedId || state.ids[0]
      if (!activeId || !state.entities[activeId]) return

      const customization = state.entities[activeId].customization
      const { key, value } = action.payload

      //@ts-ignore
      customization.sections[key] = {
        ...customization.sections[key],
        ...value
      }
    }
  }
})

export const {
  createResume,
  deleteResume,
  setSelectedResume,
  selectItem,
  reorderItems,
  createResumeItem,
  deleteResumeItem,
  toggleSectionVisibility,
  updateResumeItemDetails,
  updatePersonalDetails,
  updateGeneralFlag,
  changeStatus,
  saveFromApi,
  reorderColumns,
  toggleAccentVisibility,
  toggleBorderVisibility,
  updateCustomization,
  updateSections
} = resumeSlice.actions
