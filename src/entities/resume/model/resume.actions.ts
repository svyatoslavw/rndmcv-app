import type { TypeSectionKey } from "@/shared/lib/types"

import { createAsyncThunk } from "@reduxjs/toolkit"

import { RootState } from "@/app/store"
import { reorderColumns, toggleSectionVisibility } from "@/entities/resume"

const EDUCATION = "education"
const LANGUAGES = "languages"

export const toggleSectionInResume = createAsyncThunk(
  "resume/toggleSectionInResume",
  async (section: TypeSectionKey, { dispatch, getState }) => {
    const state = getState() as RootState

    const resume =
      state.resume.resumes.find((r) => r.id === state.resume.selectedId) ?? state.resume.resumes[0]

    const { left, right } = resume.customization.layout.columns

    const isInRightColumn = right.includes(section)
    const isInLeftColumn = left.includes(section)

    const reorder = (left: TypeSectionKey[], right: TypeSectionKey[]) => {
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

    if (section === EDUCATION || section === LANGUAGES) {
      handleLeftColumn()
    } else {
      handleRightColumn()
    }
  }
)
