import { HomeIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/shared/ui"

export default function NotFound() {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center">
      <Image
        draggable={false}
        loading="lazy"
        src="/not-found.png"
        width={64}
        height={64}
        alt="not-found"
      />
      <div className="mb-8 text-center">
        <h2 className="text-8xl font-bold">404!</h2>
        <h5 className="font-medium">Uh oh! Looks like you got lost.</h5>
      </div>
      <Link href={"/"}>
        <Button className="w-40 items-center">
          <HomeIcon size={16} className="mr-2" />
          Go home
        </Button>
      </Link>
    </div>
  )
}
