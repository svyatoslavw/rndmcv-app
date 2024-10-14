import { axiosClassic } from "@/shared/lib/api"
import { ICreateResume, IResumeResponse, IUpdateResume } from "@/shared/lib/types"

export const resumeService = {
  async update(data: IUpdateResume) {
    return axiosClassic.patch<IResumeResponse>(`/resume`, data)
  },
  async getByUserId() {
    return axiosClassic.get<IResumeResponse[]>(`/resume/by-user`)
  },
  async create(data: ICreateResume) {
    return axiosClassic.post<IResumeResponse>("/resume", data)
  }
}
