import Image from "next/image"
import Link from "next/link"

import { Button } from "@/shared/ui"

export default function NotFound() {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center gap-4">
      <h2 className="text-8xl font-bold">404!</h2>
      <Image src="/user.gif" width={200} height={200} alt="logo" />
      <div className="text-center font-medium">
        <h5>Uh oh! Looks like you got lost.</h5>
        <p>Go back to the homepage if you dare!</p>
      </div>
      <Link href={"/"}>
        <Button size={"lg"}>Go home</Button>
      </Link>
    </div>
  )
}
