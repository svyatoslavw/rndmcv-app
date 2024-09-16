import { createAsyncThunk } from "@reduxjs/toolkit"

import { EnumTokens, saveTokenStorage } from "./tokens.helpers"
import { ExtraArgument } from "@/app/store"
import { resumeApi, setResumesFromServer } from "@/entities/resume"
import { Stage, userApi } from "@/entities/user"
import { IAuthLoginForm } from "@/shared/lib/types"
import { isErrorWithMessage, isFetchBaseQueryError } from "@/shared/lib/utils"

interface IAsyncThunkData {
  values: IAuthLoginForm
  push: any
  setStage: (stage: Stage) => void
}

export const loginThunk = createAsyncThunk(
  "auth/login",
  async ({ values, push, setStage }: IAsyncThunkData, { dispatch, rejectWithValue, extra }) => {
    const { toast } = extra as ExtraArgument

    try {
      const response = await dispatch(userApi.endpoints.login.initiate(values)).unwrap()

      if (EnumTokens.ACCESS_TOKEN in response) {
        saveTokenStorage(response.accessToken)

        const resumes = await dispatch(
          resumeApi.endpoints.getResumesByUserId.initiate(response.user.id)
        ).unwrap()

        if (resumes && resumes.length) {
          dispatch(setResumesFromServer({ resumes }))
        }

        push("/")
        toast.success("Successfully login!")

        return response
      } else {
        setStage("confirmation")
        toast("Confirm your account", { icon: "📢" })

        return response
      }
    } catch (error) {
      if (isFetchBaseQueryError(error) && isErrorWithMessage(error.data)) {
        toast.error(error.data.message || "Something went wrong")
        return rejectWithValue(error.data.message || "Something went wrong")
      }
    }
  }
)
