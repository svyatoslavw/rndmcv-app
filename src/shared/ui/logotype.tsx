import Image from "next/image"
import Link from "next/link"

import { APP_NAME, PUBLIC_URLS } from "../config"
import { cn } from "../lib/utils"

interface LogotypeProps {
  size?: "lg" | "sm"
  withText?: boolean
  isLazy?: boolean
}

const Logotype = ({ size = "lg", withText = false, isLazy = false }: LogotypeProps) => {
  return (
    <Link className="flex items-center gap-2" href={PUBLIC_URLS.HOME}>
      <div
        className={cn("relative transition-transform hover:scale-105", {
          "hover:scale-100": size === "sm"
        })}
      >
        <Image
          alt="logo"
          loading={isLazy ? "lazy" : "eager"}
          className={size === "lg" ? "rounded-3xl" : "rounded-2xl"}
          draggable={false}
          height={size === "lg" ? 80 : 50}
          src="/images/logo.webp"
          width={size === "lg" ? 80 : 50}
        />
        <div className="absolute -right-1 -top-1 rounded-lg bg-background p-[3px]">
          <div
            className={cn(
              "rounded-md bg-[#9333ea] px-2 text-center text-xs font-semibold tracking-wider text-white",
              { "rounded px-0.5 text-[9px]": size === "sm" }
            )}
          >
            beta
          </div>
        </div>
      </div>
      {withText && <h4 className="text-lg font-semibold">{APP_NAME.FULL}</h4>}
    </Link>
  )
}

export { Logotype }
