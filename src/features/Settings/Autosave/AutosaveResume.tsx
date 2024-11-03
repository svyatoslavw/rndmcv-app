"use client"

import { LoaderIcon } from "lucide-react"
import { useEffect, useState } from "react"

import { useAppSelector } from "@/app/store"
import { selectResume } from "@/entities/resume"
import { updateResume } from "@/shared/lib/actions"
import { RESPONSE_STATUS } from "@/shared/lib/constants"
import { IUpdateResume } from "@/shared/lib/types"

const AutosaveResume = () => {
  const resume = useAppSelector(selectResume)

  const { isEnabled, interval } = useAppSelector((state) => state.settings.autosave)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchResumes = async (data: IUpdateResume) => {
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
