import { ChangeEvent } from "react"

import { useUploadFileMutation } from "@/entities/user"

export const useUploadFile = (onChange: (url: string) => void) => {
  const [mutate, { error }] = useUploadFileMutation()

  const onUploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    const formData = new FormData()
    formData.append("file", files[0])

    const result = await mutate(formData)

    if (result.data && result.data.url) onChange(result.data.url)
  }

  return { onUploadFile }
}
