"use client"

import * as htmlToImage from "html-to-image"
import jsPDF from "jspdf"
import { FileDownIcon } from "lucide-react"
import { useTransition } from "react"

import { Button } from "@/shared/ui"

const ResumeHeader = () => {
  const [isPending, startTransition] = useTransition()

  const onSaveDocument = () => {
    startTransition(async () => {
      const element = document.getElementById("resume")
      const scale = 1.5
      if (element) {
        const dataUrl = await htmlToImage.toPng(element, {
          quality: 0.8,
          width: element.clientWidth * scale,
          height: element.clientHeight * scale,
          style: {
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            width: `${element.clientWidth}px`,
            height: `${element.clientHeight}px`
          }
        })

        const a4Width = 165
        const a4Height = 297

        const pdf = new jsPDF({
          orientation: "p",
          unit: "mm",
          format: [a4Width, a4Height]
        })

        const aspectRatio = a4Width / a4Height
        const imgWidth = a4Width
        const imgHeight = imgWidth / aspectRatio

        pdf.addImage(dataUrl, "PNG", 0, 0, imgWidth, imgHeight, undefined, "FAST")
        pdf.save("resume.pdf")
      }
    })
  }

  return (
    <div className="sticky top-0 z-10 flex items-center justify-between rounded-xl bg-white p-5 shadow-md">
      <h3 className="text-xl font-bold">Resume</h3>
      <Button onClick={onSaveDocument} className="gap-1">
        {isPending ? "Downloading..." : "Download"}
        <FileDownIcon size={18} />
      </Button>
    </div>
  )
}

export { ResumeHeader }
