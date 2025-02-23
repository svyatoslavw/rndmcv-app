import Image from "next/image"
import Link from "next/link"

import { cn } from "@rndm/ui/lib/utils"
import { APP_NAME } from "../config"
import { ADMIN_URLS } from "../config/urls.config"

interface LogotypeProps {
  size?: "lg" | "sm"
  withText?: boolean
  isLazy?: boolean
}

const Logotype = ({ size = "lg", withText = false, isLazy = false }: LogotypeProps) => {
  return (
    <Link
      draggable={false}
      className="flex items-center gap-2 transition hover:scale-95"
      href={ADMIN_URLS.DASHBOARD}
    >
      <div className="relative">
        <Image
          alt="logo"
          draggable={false}
          height={size === "lg" ? 80 : 60}
          loading={isLazy ? "lazy" : "eager"}
          className={size === "lg" ? "select-none rounded-lg" : "select-none rounded-md"}
          src="/black-white.svg"
          width={size === "lg" ? 80 : 60}
        />
        <div className="bg-background absolute bottom-0 left-0 rounded-lg p-[2px]">
          <div
            className={cn(
              "rounded-lg bg-[#9333ea] px-2 text-center text-xs font-semibold tracking-wider text-white",
              { "rounded px-[2px] text-[9px]": size === "sm" }
            )}
          >
            {APP_NAME.SHORT}
          </div>
        </div>
      </div>
      {withText && <h4 className="text-lg font-semibold">{APP_NAME.FULL}</h4>}
    </Link>
  )
}

export { Logotype }
