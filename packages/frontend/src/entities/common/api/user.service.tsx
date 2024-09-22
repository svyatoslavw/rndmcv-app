import { axiosWithToken } from "@/app/api"
import { IUpdateUserForm, IUser } from "@/shared/lib/types"

export const userService = {
  async getProfile() {
    const response = await axiosWithToken.get<IUser>("/users/profile")
    return response.data
  },
  async update(data: IUpdateUserForm) {
    return await axiosWithToken.patch<IUser>("/users/profile", data)
  }
}
