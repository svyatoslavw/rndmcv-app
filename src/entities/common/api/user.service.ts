import { axiosInstance, axiosWithToken } from "@/entities/common/api"
import { IUpdateUserForm, IUser } from "@/shared/lib/types"

export const userService = {
  async getProfile() {
    const response = await axiosInstance.get<IUser>("/auth/me")
    return response.data
  },
  async update(data: IUpdateUserForm) {
    return await axiosWithToken.patch<IUser>("/users/profile", data)
  }
}
