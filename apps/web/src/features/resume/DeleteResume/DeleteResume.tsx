"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button
} from "@rndm/ui/components"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

import { deleteResumeService, selectResume, useResumeActions } from "@/entities/resume"
import { PUBLIC_URLS } from "@/shared/config"
import { RESPONSE_STATUS } from "@/shared/constants"
import { useAppSelector } from "@/shared/lib/store"
import { Trash2Icon } from "lucide-react"

const DeleteResume = () => {
  const { deleteResume } = useResumeActions()
  const resume = useAppSelector(selectResume)
  const { push } = useRouter()

  const onDelete = async () => {
    try {
      const response = await deleteResumeService(resume.id)
      console.log("@response", response)

      if (response.status === RESPONSE_STATUS.SUCCESS) {
        deleteResume({ id: resume.id })
        toast.success("Successfully deleted!")
        push(PUBLIC_URLS.BUILDER)
      } else {
        toast.error("Failed to delete resume")
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="w-fit">
        <Button size={"sm"} variant="destructive">
          <Trash2Icon className="mr-1 size-4" />
          <span>Delete</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your resume.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onDelete}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export { DeleteResume }
