"use client"

import React from "react"
import toast from "react-hot-toast"

import { DraggableItem } from "./DraggableItem"
import { deleteResumeItem, selectItem, toggleStatus } from "@/entities/resume"
import type { IExperience } from "@/shared/lib"
import { useAppDispatch } from "@/shared/lib/store"

const ExperienceList = React.memo(function List({
  experience = []
}: {
  experience: IExperience[]
}) {
  const dispatch = useAppDispatch()

  const onEditChange = (experienceId: string) => {
    dispatch(selectItem({ id: experienceId, key: "experience" }))
    dispatch(toggleStatus({ key: "isEditing", content: "experience" }))
  }

  const onRemove = (experienceId: string) => {
    dispatch(deleteResumeItem({ key: "experience", id: experienceId }))
    toast.success("Successfully deleted!")
  }

  return experience.map((experience: IExperience, index: number) => (
    <DraggableItem
      key={experience.id}
      index={index}
      item={experience}
      onRemove={() => onRemove(experience.id)}
      onEditChange={() => onEditChange(experience.id)}
      render={(item) => <>{item.employer}</>}
    />
  ))
})

export { ExperienceList }
