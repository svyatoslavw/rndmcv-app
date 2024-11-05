import { HomeIcon, SearchXIcon } from "lucide-react"
import Link from "next/link"

import { Button } from "@/shared/ui"

export default function NotFound() {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center">
      <SearchXIcon height={64} width={64} />
      <div className="mb-10 text-center">
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
