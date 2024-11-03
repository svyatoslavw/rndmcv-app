import { useState } from "react"

import { useAppSelector } from "@/app/store"
import { selectResume } from "@/entities/resume"
import { useProfile } from "@/entities/user"
import { updateResume } from "@/shared/lib/actions"

export const useSaveResume = () => {
  const resume = useAppSelector(selectResume)

  const [isLoading, setIsLoading] = useState(false)
  const { profile } = useProfile()

  const onSave = async () => {
    if (!resume || !profile) return

    setIsLoading(true)

    try {
      await updateResume({
        id: resume.id,
        general: JSON.stringify(resume.general),
        customization: JSON.stringify(resume.customization)
      })
    } catch (error) {
      /* eslint-disable-next-line */
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
