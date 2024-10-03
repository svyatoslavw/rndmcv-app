import { useAppSelector } from "@/app/store"
import { selectResume } from "@/entities/resume"
import { useProfile } from "@/entities/user"
import { useUpdateResumeMutation } from "@/shared/lib/api/mutations"

export const useSaveResume = () => {
  const resume = useAppSelector(selectResume)

  const { profile } = useProfile()

  const { mutate, isPending: isLoading } = useUpdateResumeMutation()

  const onSave = () => {
    if (!resume || !profile) return

    mutate({
      id: resume.id,
      general: JSON.stringify(resume.general),
      customization: JSON.stringify(resume.customization)
    })
  }

  return {
    onSave,
    isLoading
  }
}
