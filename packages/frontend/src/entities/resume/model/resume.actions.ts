import { createAsyncThunk } from "@reduxjs/toolkit"

import { reorderColumns, toggleSectionVisibility } from "@/entities/resume"
import { RootState } from "@/shared/lib/store"
import { TSectionKey } from "@/shared/lib/types"

const EDUCATION = "education"
const LANGUAGES = "languages"

export const toggleSectionInResume = createAsyncThunk(
  "resume/toggleSectionInResume",
  async ({ section }: { section: TSectionKey }, { dispatch, getState }) => {
    const state = getState() as RootState

    const resume =
      state.resume.resumes.find((r) => r.id === state.resume.selectedId) ?? state.resume.resumes[0]

    const { left, right } = resume.customization.layout.columns

    const isInRightColumn = right.includes(section)
    const isInLeftColumn = left.includes(section)

    const reorder = (left: TSectionKey[], right: TSectionKey[]) => {
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
