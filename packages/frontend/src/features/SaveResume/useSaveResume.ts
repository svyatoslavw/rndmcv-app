"use client"

//@ts-ignore
import html2pdf from "html2pdf.js"
import { useState } from "react"

export const useSaveResume = () => {
  const [isPending, setIsPending] = useState(false)

  const onSave = () => {
    setIsPending(true)
    setTimeout(() => {
      const element = document.getElementById("resume")
      if (element) {
        const options = {
          margin: [0, 0, 0, 0],
          filename: "resume.pdf",
          image: { type: "jpeg", quality: 1 },
          html2canvas: {
            scale: 2,
            useCORS: true,
            dpi: 192,
            windowWidth: document.documentElement.scrollWidth,
            windowHeight: document.documentElement.scrollHeight
          },
          jsPDF: {
            unit: "mm",
            format: [178.125, 253.958],
            orientation: "portrait",
            compress: true,
            cssPageSize: true
          }
        }

        const clone = element.cloneNode(true)
        const style = document.createElement("style")
        style.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
            @import url('https://cdn.tailwindcss.com');
            body { font-family: 'Work Sans', sans-serif; line-height: 0.5; }
          `
        clone.appendChild(style)

        html2pdf().from(clone).set(options).save()
      }

      setIsPending(false)
    }, 3000)
  }

  return { onSave, isPending }
}
