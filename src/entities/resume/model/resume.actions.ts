import type { SectionKey } from "@/shared/types"

import { createAsyncThunk } from "@reduxjs/toolkit"

import { RootState } from "@/app/store"
import { reorderColumns, toggleSectionVisibility } from "@/entities/resume"

const EDUCATION = "education"
const LANGUAGES = "languages"

export const updateResumeSectionVisibility = createAsyncThunk(
  "resume/updateResumeSectionVisibility ",
  async (section: SectionKey, { dispatch, getState }) => {
    const state = getState() as RootState

    const resume =
      state.resume.resumes.find((r) => r.id === state.resume.selectedId) ?? state.resume.resumes[0]

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
