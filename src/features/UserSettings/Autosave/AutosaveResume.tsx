"use client"

import { LoaderIcon } from "lucide-react"
import { useEffect } from "react"

import { useAppSelector } from "@/app/store"
import { useUpdateResumeMutation } from "@/entities/common/api/mutations"
import { selectResume } from "@/entities/resume"

const AutosaveResume = () => {
  const resume = useAppSelector(selectResume)

  const { isEnabled, interval } = useAppSelector((state) => state.settings.autosave)
  const { mutate, isPending: isLoading } = useUpdateResumeMutation()

  useEffect(() => {
    if (isEnabled) {
      const intervalId = setInterval(() => {
        mutate({
          id: resume.id,
          general: JSON.stringify(resume.general),
          customization: JSON.stringify(resume.customization)
        })
      }, interval * 1000)

      return () => clearInterval(intervalId)
    }
  }, [isEnabled, interval, mutate, resume])

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
