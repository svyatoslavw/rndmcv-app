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
    <Link className="flex items-center gap-2 transition hover:scale-90" href={PUBLIC_URLS.HOME}>
      <div className="relative">
        <Image
          alt="logo"
          draggable={false}
          height={size === "lg" ? 80 : 50}
          loading={isLazy ? "lazy" : "eager"}
          className={size === "lg" ? "rounded-lg" : "rounded-md"}
          src="/purple.svg"
          width={size === "lg" ? 80 : 50}
        />
        <div className="bg-background absolute bottom-0 left-0 rounded-md p-[2px]">
          <div
            className={cn(
              "rounded-md bg-[#9333ea] px-2 text-center text-xs font-semibold tracking-wider text-white",
              { "rounded px-[2px] text-[9px]": size === "sm" }
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
