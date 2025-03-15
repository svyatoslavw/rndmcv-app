import { Logotype } from "@/shared/ui"
import { Button } from "@rndm/ui/components"
import Link from "next/link"

const ButtonFooter = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Logotype />
      <h5 className="text-muted-foreground">Ready to get started?</h5>

      <div className="flex gap-2">
        <Button>Create Resume</Button>
        <Button variant="outline">
          <Link href="#">About Project</Link>
        </Button>
      </div>
    </div>
  )
}

export { ButtonFooter }
