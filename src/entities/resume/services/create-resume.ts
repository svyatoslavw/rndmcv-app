import toast from "react-hot-toast"

import { AppDispatch } from "@/app/store"
import { createResumeToStore } from "@/entities/resume"
import { CUSTOMIZATION_STATE, GENERAL_STATE, RESPONSE_STATUS } from "@/shared/constants"
import { createResume as createResumeToServer } from "@/shared/lib/actions"

export const createResume = async (resumesLength: number, dispatch: AppDispatch) => {
  try {
    if (resumesLength >= 1) throw new Error()

    const response = await createResumeToServer({
      customization: JSON.stringify(CUSTOMIZATION_STATE),
      general: JSON.stringify(GENERAL_STATE)
    })

    if (response.status === RESPONSE_STATUS.ERROR) return

    if (response.status === RESPONSE_STATUS.SUCCESS) {
      dispatch(
        createResumeToStore({
          id: response.data.id,
          general: JSON.parse(response.data.general),
          customization: JSON.parse(response.data.customization)
        })
      )
      toast.success("Successfully created!")
    }
  } catch (error) {
    error instanceof Error
      ? toast.error("You already have a trial resume")
      : toast.error("Failed to create resume")
  }
}
