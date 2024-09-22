import { axiosClassic } from "@/app/api"

export const fileService = {
  upload(data: FormData) {
    return axiosClassic.post<{ url: string }>("/upload", data)
  }
}
