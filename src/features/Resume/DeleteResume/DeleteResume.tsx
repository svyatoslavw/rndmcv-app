"use client"

import { redirect } from "next/navigation"
import toast from "react-hot-toast"

import { deleteResume, deleteResumeFromStore, selectResume } from "@/entities/resume"
import { PUBLIC_URLS } from "@/shared/config"
import { RESPONSE_STATUS } from "@/shared/constants"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
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
} from "@/shared/ui"

const DeleteResume = () => {
  const dispatch = useAppDispatch()
  const resume = useAppSelector(selectResume)

  const onDelete = async () => {
    try {
      const response = await deleteResume(resume.id)

      if (response.status === RESPONSE_STATUS.SUCCESS) {
        dispatch(deleteResumeFromStore(resume.id))
        toast.success("Successfully deleted!")
        redirect(PUBLIC_URLS.CREATE)
      } else {
        toast.error("Failed to delete resume")
      }
    } catch (error) {
      toast.error("An unexpected error occurred")
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="w-fit">
        <Button variant="destructive">Delete resume</Button>
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
