"use client"

import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { deleteResumeFromStore, selectResume } from "@/entities/resume"
import { PUBLIC_URLS } from "@/shared/config"
import { RESPONSE_STATUS } from "@/shared/constants"
import { deleteResume } from "@/shared/lib/actions"
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
  const router = useRouter()

  const onDelete = async () => {
    const response = await deleteResume(resume.id)

    if (response.status === RESPONSE_STATUS.SUCCESS) {
      dispatch(deleteResumeFromStore({ id: resume.id }))
      toast.success("Successfully deleted!")
      router.push(PUBLIC_URLS.CREATE)
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
