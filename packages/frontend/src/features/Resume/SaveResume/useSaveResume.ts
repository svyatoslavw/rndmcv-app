import { useAppSelector } from "@/app/store"
import { useUpdateResumeMutation } from "@/entities/common/api/mutations"
import { selectResume } from "@/entities/resume"
import { useProfile } from "@/entities/user"

export const useSaveResume = () => {
  const resume = useAppSelector(selectResume)

  const { profile } = useProfile()

  const { mutate, isPending: isLoading } = useUpdateResumeMutation()

  const onSave = () => {
    if (!resume || !profile) return

    mutate({
      id: resume.id,
      general: JSON.stringify(resume.general),
      customization: JSON.stringify(resume.customization),
      userId: profile.id
    })
  }

  return {
    onSave,
    isLoading
  }
}
