import Image from "next/image"
import Link from "next/link"

import { cn } from "../lib/utils"

interface LogotypeProps {
  size?: "lg" | "sm"
  isMulticolor?: boolean
}

const Logotype = ({ size = "lg", isMulticolor = false }: LogotypeProps) => {
  return (
    <Link href="/" className="relative">
      <Image
        draggable={false}
        src="/logo.webp"
        width={size === "lg" ? 80 : 70}
        height={size === "lg" ? 80 : 70}
        alt="logo"
        className="rounded-3xl"
      />
      <div
        className={cn(
          "absolute -right-1 -top-1 h-4 w-11 rounded-lg bg-[#9333ea] text-center text-xs font-semibold tracking-wider text-white",
          { "bg-primary": isMulticolor }
        )}
      >
        beta
      </div>
    </Link>
  )
}

export { Logotype }
