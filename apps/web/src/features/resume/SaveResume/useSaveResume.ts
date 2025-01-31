import { useState } from "react"

import { selectResume, updateResumeService } from "@/entities/resume"
import { useProfile } from "@/entities/user"
import { useAppSelector } from "@/shared/lib/store"

export const useSaveResume = () => {
  const resume = useAppSelector(selectResume)

  console.log("@resume", resume)

  const [isLoading, setIsLoading] = useState(false)
  const { profile } = useProfile()

  const onSave = async () => {
    if (!resume || !profile) return

    setIsLoading(true)

    try {
      await updateResumeService({
        id: resume.id,
        general: JSON.stringify(resume.general),
        customization: JSON.stringify(resume.customization)
      })
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    onSave,
    isLoading
  }
}
