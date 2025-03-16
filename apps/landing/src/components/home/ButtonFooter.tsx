import { PUBLIC_URLS } from "@/shared/config"
import { Logotype } from "@/shared/ui"
import { Button } from "@rndm/ui/components"
import Link from "next/link"

const ButtonFooter = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Logotype />
      <h5 className="text-muted-foreground">Ready to get started?</h5>

      <div className="flex gap-2">
        <Link href={PUBLIC_URLS.APP} target="_blank">
          <Button>Create Resume</Button>
        </Link>
        <Link href="#">
          <Button variant="outline">About Project</Button>
        </Link>
      </div>
    </div>
  )
}

export { ButtonFooter }
