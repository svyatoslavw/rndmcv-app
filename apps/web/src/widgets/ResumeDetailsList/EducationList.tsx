"use client"

import { format } from "date-fns"
import React from "react"
import toast from "react-hot-toast"

import { deleteResumeItem, selectItem, toggleStatus } from "@/entities/resume"
import { useAppDispatch } from "@/shared/lib/store"
import type { EducationEntity } from "@/shared/types"
import { DraggableItem } from "./DraggableItem"

const EducationList = React.memo(function List({
  education = []
}: {
  education: EducationEntity[]
}) {
  const dispatch = useAppDispatch()

  const onEditChange = (educationId: string) => {
    dispatch(selectItem({ id: educationId, key: "education" }))
    dispatch(toggleStatus({ key: "isEditing", content: "education" }))
  }

  const onRemove = (educationId: string) => {
    dispatch(deleteResumeItem({ key: "education", id: educationId }))
    toast.success("Successfully deleted!")
  }

  return education.map((education: EducationEntity, index: number) => (
    <DraggableItem
      key={education.id}
      index={index}
      item={education}
      render={(item) => (
        <>
          <p>{item.school}</p>
          {item.startDate && item.endDate && (
            <p className="text-xs">
              {/\d/.test(item.startDate) ? format(item.startDate, "PPP") : item.startDate} |{" "}
              {/\d/.test(item.endDate) ? format(item.endDate, "PPP") : item.endDate}
            </p>
          )}
        </>
      )}
      onEditChange={() => onEditChange(education.id)}
      onRemove={() => onRemove(education.id)}
    />
  ))
})

export { EducationList }
