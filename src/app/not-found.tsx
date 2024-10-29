import { HomeIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/shared/ui"

export default function NotFound() {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center">
      <Image
        alt="not-found"
        draggable={false}
        height={64}
        loading="lazy"
        src="/images/not-found.png"
        width={64}
      />
      <div className="mb-8 text-center">
        <h2 className="text-8xl font-bold">404!</h2>
        <h5 className="font-medium">Uh oh! Looks like you got lost.</h5>
      </div>
      <Link href={"/"}>
        <Button className="w-40 items-center">
          <HomeIcon className="mr-2" size={16} />
          Go home
        </Button>
      </Link>
    </div>
  )
}
