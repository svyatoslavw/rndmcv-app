import { axiosInstance } from "@/shared/lib/api"
import { IUser } from "@/shared/lib/types"

export const userService = {
  async getProfile() {
    const response = await axiosInstance.get<IUser>("/auth/me")
    return response.data
  }
}
