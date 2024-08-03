import { CaptionsIcon, ClipboardListIcon } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/shared/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/shared/ui/dialog"

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center font-primary">
      <h1 className="mt-10 w-[450px] text-center text-5xl font-extrabold">
        What do you want to create?
      </h1>
      <div className="mt-16 flex gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <div className="flex h-28 w-44 cursor-pointer flex-col justify-end gap-2 rounded-3xl rounded-bl-none bg-rose-500 p-2 text-sm text-white shadow transition-all hover:bg-rose-400">
              <ClipboardListIcon size={26} />
              <span>Resume</span>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4"></div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <div className="flex h-28 w-44 cursor-pointer flex-col justify-end gap-2 rounded-3xl rounded-bl-none bg-blue-500 p-2 text-sm text-white shadow transition-all hover:bg-blue-400">
          <CaptionsIcon size={26} />
          <span>Personal Website</span>
        </div>
        <Link
          to="resume/content"
          className="flex h-28 w-44 cursor-pointer flex-col justify-end gap-2 rounded-3xl rounded-bl-none bg-blue-500 p-2 text-sm text-white shadow transition-all hover:bg-blue-400"
        >
          <CaptionsIcon size={26} />
          <span>Personal Website</span>
        </Link>
        <Link
          to="resume/customize"
          className="flex h-28 w-44 cursor-pointer flex-col justify-end gap-2 rounded-3xl rounded-bl-none bg-blue-500 p-2 text-sm text-white shadow transition-all hover:bg-blue-400"
        >
          <CaptionsIcon size={26} />
          <span>Personal Website</span>
        </Link>
      </div>
    </main>
  )
}
