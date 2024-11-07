import Image from "next/image"
import Link from "next/link"

import { PUBLIC_URL } from "../config"

interface LogotypeProps {
  size?: "lg" | "sm"
}

const Logotype = ({ size = "lg" }: LogotypeProps) => {
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
      <div className="absolute -right-1 -top-1 rounded-lg bg-background p-[3px]">
        <div className="rounded-md bg-[#9333ea] px-2 text-center text-xs font-semibold tracking-wider text-white">
          beta
        </div>
      </div>
    </Link>
  )
}

export { Logotype }
