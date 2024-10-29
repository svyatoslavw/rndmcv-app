import Image from "next/image"
import Link from "next/link"

import { PUBLIC_URL } from "../lib/config"
import { cn } from "../lib/utils"

interface LogotypeProps {
  size?: "lg" | "sm"
  isMulticolor?: boolean
}

const Logotype = ({ size = "lg", isMulticolor = false }: LogotypeProps) => {
  return (
    <Link className="relative transition-transform hover:scale-110" href={PUBLIC_URL.home()}>
      <Image
        alt="logo"
        className="rounded-3xl"
        draggable={false}
        height={size === "lg" ? 80 : 70}
        src="/images/logo.webp"
        width={size === "lg" ? 80 : 70}
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
