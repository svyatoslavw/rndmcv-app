import { axiosClassic } from "@/entities/common/api"

export const fileService = {
  upload(data: FormData) {
    return axiosClassic.post<{ url: string }>("/upload", data)
  }
}
