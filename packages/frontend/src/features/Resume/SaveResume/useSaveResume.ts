import { useUpdateResumeMutation } from "@/app/api/mutations"
import { useAppSelector } from "@/app/store"
import { selectResume } from "@/entities/resume"

export const useSaveResume = () => {
  const resume = useAppSelector(selectResume)

  const { mutate, isPending: isLoading } = useUpdateResumeMutation()

  const onSave = () => mutate(resume)

  return {
    onSave,
    isLoading
  }
}
