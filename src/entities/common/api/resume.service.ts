import { axiosInstance, axiosWithToken } from "@/entities/common/api"
import { ICreateResume, IResume, IResumeResponse, IUpdateResume } from "@/shared/lib/types"

export const resumeService = {
  async update(data: IUpdateResume) {
    return axiosInstance.patch<IResumeResponse>(`/resume`, data)
  },
  async getByUserId(userId: string) {
    return axiosWithToken.get<IResume[]>(`/resumes/by-user/${userId}`)
  },
  async create(data: ICreateResume) {
    return axiosInstance.post<IResumeResponse>("/resume", data)
  }
}
