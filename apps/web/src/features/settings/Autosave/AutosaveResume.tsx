"use client"

import { LoaderIcon } from "lucide-react"
import { useEffect, useState } from "react"

import { selectResume } from "@/entities/resume"
import { RESPONSE_STATUS } from "@/shared/constants"
import { updateResume } from "@/shared/lib/actions"
import { useAppSelector } from "@/shared/lib/store"
import { UpdateResume } from "@/shared/types"

const AutosaveResume = () => {
  const resume = useAppSelector(selectResume)

  const { isEnabled, interval } = useAppSelector((state) => state.settings.autosave)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!resume) return

    const fetchResumes = async (data: UpdateResume) => {
      const response = await updateResume(data)

      if (response.status === RESPONSE_STATUS.ERROR) return

      return response
    }

    if (isEnabled) {
      const intervalId = setInterval(() => {
        setIsLoading(true) //FIXME:   ДОБАВЬ ЗАГРУЗКУ ПРОГРЕССА
        fetchResumes({
          id: resume.id,
          general: JSON.stringify(resume.general),
          customization: JSON.stringify(resume.customization)
        })
        setIsLoading(false)
      }, interval * 1000)

      return () => clearInterval(intervalId)
    }
  }, [isEnabled, interval, resume])

  return (
    <>
      {isLoading && (
        <div className="absolute left-3 top-3 z-30 animate-pulse text-black">
          <LoaderIcon className="animate-spin" size={15} />
        </div>
      )}
    </>
  )
}

export { AutosaveResume }
