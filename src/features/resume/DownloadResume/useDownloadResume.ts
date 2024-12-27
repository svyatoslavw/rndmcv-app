"use client"

import { useState } from "react"

import { selectResume } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"

export const useDownloadResume = () => {
  const resume = useAppSelector(selectResume)
  const [isPending, setIsPending] = useState(false)

  const onDownload = async () => {
    setIsPending(true)
    const element = document.getElementById("resume")

    if (element) {
      const htmlContent = element.outerHTML

      try {
        const response = await fetch("/api/pdf", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ html: htmlContent, title: resume.general.person.name })
        })

        if (!response.ok) throw new Error("Failed to generate PDF")

        const blob = await response.blob()
        const url = URL.createObjectURL(blob)

        const a = document.createElement("a")

        a.href = url
        a.download = "resume.pdf"
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
      } catch (error) {
        console.error("Error generating PDF:", error)
      } finally {
        setIsPending(false)
      }
    } else {
      console.error("Resume element not found")
      setIsPending(false)
    }
  }

  return { onDownload, isPending }
}
