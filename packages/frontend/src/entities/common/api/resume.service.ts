import { axiosWithToken } from "@/app/api"
import { ICreateResume, IResume } from "@/shared/lib/types"

export const resumeService = {
  async update(data: IResume) {
    return axiosWithToken.patch<IResume>(`/resumes/${data.id}`, data)
  },
  async getByUserId(userId: string) {
    return axiosWithToken.get<IResume[]>(`/resumes/by-user/${userId}`)
  },
  async create(data: ICreateResume) {
    return axiosWithToken.post("/resumes", data)
  }
}
