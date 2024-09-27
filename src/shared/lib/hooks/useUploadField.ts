import { ChangeEvent } from "react"

import { useUploadFileMutation } from "@/entities/common/api/mutations"

export const useUploadFile = (onChange: (url: string) => void) => {
  const { mutateAsync } = useUploadFileMutation({
    onSuccess: ({ data }) => onChange(data.url)
  })

  const onUploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    const formData = new FormData()
    formData.append("file", files[0])

    await mutateAsync(formData)
  }

  return { onUploadFile }
}
