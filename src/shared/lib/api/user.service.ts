import { axiosClassic } from "@/shared/lib/api"
import { IUser } from "@/shared/lib/types"

export const userService = {
  async getProfile() {
    const response = await axiosClassic.get<IUser>("/auth/me")
    return response.data
  }
}
