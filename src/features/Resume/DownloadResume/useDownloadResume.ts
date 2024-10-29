"use client"

//@ts-ignore
import html2pdf from "html2pdf.js"
import { useState } from "react"

export const useDownloadResume = () => {
  const [isPending, setIsPending] = useState(false)

  const onDownload = () => {
    setIsPending(true)
    setTimeout(() => {
      const element = document.getElementById("resume")

      if (element) {
        const options = {
          margin: [0, 0, 0, 0],
          filename: "resume.pdf",
          image: { type: "jpeg", quality: 1 },
          // pagebreak: { avoid: ["div"], mode: "avoid-all", after: "#page" },
          html2canvas: {
            scale: 2,
            useCORS: true,
            dpi: 192
          },
          jsPDF: {
            // format: [178.125, 253.958],
            format: "a4",
            orientation: "portrait"
          }
        }

        const clone = element.cloneNode(true)
        const style = document.createElement("style")

        style.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
            @import url('https://cdn.tailwindcss.com');
            body { font-family: 'Work Sans', sans-serif; line-height: 0.5; }
            * {padding: 0; }
          `
        clone.appendChild(style)

        html2pdf().from(clone).set(options).save()
      }

      setIsPending(false)
    }, 100)
  }

  return { onDownload, isPending }
}
