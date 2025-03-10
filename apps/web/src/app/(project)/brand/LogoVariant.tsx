"use client"

import { Button } from "@rndm/ui/components"
import Image from "next/image"

const LogoVariant = ({ src, color }: { src: string; color: string }) => {
  const handleDownloadImage = (src: string) => {
    const link = document.createElement("a")
    link.href = src
    link.download = src.slice(1, src.length - 4)
    link.click()
  }
  return (
    <div className="border-input flex flex-col justify-center border">
      <Image src={src} alt="Logo" width={300} height={150} />
      <span className="text-muted-foreground py-1 text-center text-sm font-semibold">{color}</span>
      <Button
        onClick={() => handleDownloadImage(src)}
        variant="secondary"
        className="border-input flex w-full justify-center border-t"
      >
        Download
      </Button>
    </div>
  )
}

const LogomarkVariant = ({ src }: { src: string }) => {
  const handleDownloadImage = (src: string) => {
    const link = document.createElement("a")
    link.href = src
    link.download = src.slice(1, src.length - 4)
    link.click()
  }

  return (
    <div className="border-input flex flex-col justify-center border">
      <Image src={src} alt="Logo" width={300} height={150} />
      <Button
        onClick={() => handleDownloadImage(src)}
        variant="secondary"
        className="border-input flex w-full justify-center border-t"
      >
        Download
      </Button>
    </div>
  )
}

export { LogomarkVariant, LogoVariant }
