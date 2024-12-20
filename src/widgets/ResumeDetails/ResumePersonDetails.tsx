"use client"

import { MailIcon, MapPinIcon, PhoneCallIcon } from "lucide-react"

import { selectGeneralResume, toggleStatus } from "@/entities/resume"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"

const ResumePersonDetails = () => {
  const dispatch = useAppDispatch()
  const content = useAppSelector(selectGeneralResume("person"))

  const onEditChange = () => {
    dispatch(toggleStatus({ key: "isEditing", content: "person" }))
  }

  return (
    <div className="mt-5 rounded-lg bg-background p-6 shadow-lg dark:shadow-neutral-900">
      <button className="w-full text-start" onClick={onEditChange}>
        <h2 className="text-xl font-bold">{content.name || "Your name"}</h2>
        <h3 className="font-medium text-gray-400">{content.job || "Add your job"}</h3>
        <div className="mt-5 flex justify-between font-medium text-foreground/60">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm">
              <MailIcon size={18} />
              <span>{content.email || "Email"}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <PhoneCallIcon size={18} />
              <span>{content.phone || "Phone"}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPinIcon size={18} />
              <span>{content.address || "Address"}</span>
            </div>
          </div>
          <div className="h-20 w-20 rounded-full bg-primary/50" />
        </div>
      </button>
    </div>
  )
}

export { ResumePersonDetails }
