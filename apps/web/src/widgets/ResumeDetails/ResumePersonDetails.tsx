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
    <div className="bg-background mt-5 rounded p-6">
      <button className="w-full text-start" onClick={onEditChange}>
        <h2 className="text-xl font-bold">{content.name || "Your name"}</h2>
        <h3 className="font-medium text-gray-400">{content.job || "Add your job"}</h3>
        <div className="text-foreground/60 mt-5 flex justify-between font-medium">
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
          <div className="bg-primary/50 h-20 w-20 rounded-full" />
        </div>
      </button>
    </div>
  )
}

export { ResumePersonDetails }
