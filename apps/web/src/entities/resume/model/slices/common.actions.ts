"use client"

import { createAsyncThunk } from "@reduxjs/toolkit"

import { Response, ResumeEntity, SectionKey } from "../../domain"

import { createId, deleteSelectedId, setSelectedId } from "./common.slice"
import {
  createCustomization,
  deleteCustomization,
  reorderColumns,
  setCustomizationSelectedId
} from "./customization.slice"
import {
  createGeneral,
  deleteGeneral,
  setGeneralSelectedId,
  toggleSectionVisibility
} from "./general.slice"
import { RootState } from "@/shared/lib/store"

const EDUCATION = "education"
const LANGUAGES = "languages"

export const setResumesFromServer = createAsyncThunk(
  "resume/setResumesFromServer",
  async (resumes: Response[], { dispatch, getState }) => {
    const state = getState() as RootState

    resumes.forEach(({ id, customization, general }) => {
      if (!state.resume.ids.includes(id)) {
        dispatch(createGeneral({ id, general: JSON.parse(general) }))
        dispatch(createCustomization({ id, customization: JSON.parse(customization) }))
        dispatch(createId({ id }))
      }
    })
  }
)

export const createResumeToStore = createAsyncThunk(
  "resume/createResumeToStore",
  async (resume: Response, { dispatch }) => {
    const { id, customization, general } = resume

    dispatch(createGeneral({ id, general: JSON.parse(general) }))
    dispatch(createCustomization({ id, customization: JSON.parse(customization) }))
    dispatch(createId({ id }))
  }
)

export const deleteResumeFromStore = createAsyncThunk(
  "resume/deleteResumeFromStore",
  async (resumeId: string, { dispatch }) => {
    dispatch(deleteGeneral({ id: resumeId }))
    dispatch(deleteCustomization({ id: resumeId }))
    dispatch(deleteSelectedId({ id: resumeId }))
  }
)

export const selectResumeId = createAsyncThunk(
  "resume/selectResumeId",
  async (id: string, { dispatch }) => {
    dispatch(setGeneralSelectedId({ id }))
    dispatch(setCustomizationSelectedId({ id }))
    dispatch(setSelectedId({ id }))
  }
)

export const changeSectionVisibility = createAsyncThunk(
  "resume/changeSectionVisibility ",
  async (section: SectionKey, { dispatch, getState }) => {
    const state = getState() as RootState

    const findItem = <T extends { id: string }>(item: T) => item.id === state.resume.selectedId

    const resume: ResumeEntity = {
      id: state.resume.selectedId || state.resume.ids[0]!,
      general: state.general.generals.find(findItem) || state.general.generals[0]!,
      customization:
        state.customization.customizations.find(findItem) || state.customization.customizations[0]!
    }

    const {
      columns: { left, right },
      layout: { pos }
    } = resume.customization.layout

    const isInRightColumn = right.includes(section)
    const isInLeftColumn = left.includes(section)

    const reorder = (left: SectionKey[], right: SectionKey[]) => {
      dispatch(reorderColumns({ left, right }))
    }

    const toggleSection = () => dispatch(toggleSectionVisibility(section))

    const handleLeftColumn = () => {
      if (isInLeftColumn) {
        reorder(
          left.filter((s) => s !== section),
          right
        )
      } else {
        reorder([...left, section], right)
      }
    }

    const handleRightColumn = () => {
      if (isInRightColumn) {
        reorder(
          left,
          right.filter((s) => s !== section)
        )
      } else {
        reorder(left, [...right, section])
      }
    }

    toggleSection()

    if (section === EDUCATION || section === LANGUAGES || pos === "top") {
      handleLeftColumn()
    } else {
      handleRightColumn()
    }
  }
)
