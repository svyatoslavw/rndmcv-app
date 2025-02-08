import { Button } from "@rndm/ui/components"
import { ArrowBigUpDashIcon, SearchXIcon } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center">
      <SearchXIcon height={64} width={64} />
      <div className="mb-2 text-center">
        <h2 className="mb-2 text-8xl font-bold">404!</h2>
        <h5 className="font-medium">Uh oh! Looks like you got lost.</h5>
      </div>
      <Link href={"/"} className="transition hover:scale-110">
        <Button variant={"secondary"}>
          <ArrowBigUpDashIcon className="mr-2" size={16} />
          Go home
        </Button>
      </Link>
    </div>
  )
}
