import { axiosInstance } from "@/shared/lib/api"
import { ICreateResume, IResumeResponse, IUpdateResume } from "@/shared/lib/types"

export const resumeService = {
  async update(data: IUpdateResume) {
    return axiosInstance.patch<IResumeResponse>(`/resume`, data)
  },
  async getByUserId() {
    return axiosInstance.get<IResumeResponse[]>(`/resume/by-user`)
  },
  async create(data: ICreateResume) {
    return axiosInstance.post<IResumeResponse>("/resume", data)
  }
}
