"use client"

import { createAsyncThunk } from "@reduxjs/toolkit"

import { RootState } from "@/shared/lib/store"
import { SectionKey } from "@/shared/types"
import { reorderColumns, toggleSectionVisibility } from "./resume.slice"

const EDUCATION = "education"
const LANGUAGES = "languages"

export const changeSectionVisibility = createAsyncThunk(
  "resume/changeSectionVisibility ",
  async (section: SectionKey, { dispatch, getState }) => {
    const state = getState() as RootState

    const activeId = state.resume.selectedId || state.resume.ids[0]

    if (!activeId) return

    const resume = state.resume.entities[activeId]

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
