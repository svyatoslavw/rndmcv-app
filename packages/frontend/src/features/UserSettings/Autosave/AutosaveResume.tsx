"use client"

import { LoaderIcon } from "lucide-react"
import { useEffect } from "react"

import { useAppSelector } from "@/app/store"
import { selectResume } from "@/entities/resume"
import { useUpdateResumeMutation } from "@/entities/resume/model/resume.api"

const AutosaveResume = () => {
  const resume = useAppSelector(selectResume)

  const { isEnabled, interval } = useAppSelector((state) => state.settings.autosave)
  const [updateResume, { isLoading }] = useUpdateResumeMutation()

  useEffect(() => {
    if (isEnabled) {
      const intervalId = setInterval(() => {
        updateResume(resume)
      }, interval * 1000)

      return () => clearInterval(intervalId)
    }
  }, [isEnabled, interval, updateResume, resume])

  return (
    <>
      {isLoading && (
        <div className="absolute left-3 top-3 z-30 animate-pulse text-black">
          <LoaderIcon size={15} className="animate-spin" />
        </div>
      )}
    </>
  )
}

export { AutosaveResume }
