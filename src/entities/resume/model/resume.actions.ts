import { createAsyncThunk } from "@reduxjs/toolkit"

import { reorderColumns, toggleSectionVisibility } from "@/entities/resume"
import { TSectionKey } from "@/shared/lib"
import { RootState } from "@/shared/lib/store"

export const addSectionToResume = createAsyncThunk(
  "resume/addSectionToResume",
  async ({ section }: { section: TSectionKey }, { dispatch, getState }) => {
    const state = getState() as RootState

    const isSectionInVisibleBlocks = state.resume.visibleBlocks.includes(section)
    const isSectionInColumnsRight = state.customization.layout.columns.right.includes(section)
    const isSectionInColumnsLeft = state.customization.layout.columns.left.includes(section)

    if (isSectionInVisibleBlocks) {
      dispatch(toggleSectionVisibility(section))

      if (section === "education" || section === "languages") {
        if (isSectionInColumnsLeft) {
          dispatch(
            reorderColumns({
              left: state.customization.layout.columns.left.filter((s) => s !== section),
              right: state.customization.layout.columns.right
            })
          )
        }
      } else if (isSectionInColumnsRight) {
        dispatch(
          reorderColumns({
            left: state.customization.layout.columns.left,
            right: state.customization.layout.columns.right.filter((s) => s !== section)
          })
        )
      }
    } else {
      dispatch(toggleSectionVisibility(section))

      if (section === "education" || section === "languages") {
        if (!isSectionInColumnsLeft) {
          dispatch(
            reorderColumns({
              left: [...state.customization.layout.columns.left, section],
              right: state.customization.layout.columns.right
            })
          )
        }
      } else if (!isSectionInColumnsRight) {
        dispatch(
          reorderColumns({
            left: state.customization.layout.columns.left,
            right: [...state.customization.layout.columns.right, section]
          })
        )
      }
    }
  }
)
