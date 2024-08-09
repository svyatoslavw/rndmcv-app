"use client"

import { format } from "date-fns"
import React from "react"

import { DraggableItem } from "./DraggableItem"
import { selectItem, toggleStatus } from "@/entities/resume"
import type { IEducation } from "@/shared/lib"
import { useAppDispatch } from "@/shared/lib/store"

const EducationList = React.memo(function List({ education = [] }: { education: IEducation[] }) {
  const dispatch = useAppDispatch()

  const onEditChange = (educationId: string) => {
    dispatch(selectItem({ id: educationId, key: "education" }))
    dispatch(toggleStatus({ key: "isEditing", content: "education" }))
  }
  return education.map((education: IEducation, index: number) => (
    <DraggableItem
      key={education.id}
      index={index}
      item={education}
      onEditChange={() => onEditChange(education.id)}
      render={(item) => (
        <>
          <p>{item.school}</p>
          {item.startDate && item.endDate && (
            <p className="text-xs">
              {format(item.startDate, "PPP")} | {format(item.endDate, "PPP")}
            </p>
          )}
        </>
      )}
    />
  ))
})

export { EducationList }
