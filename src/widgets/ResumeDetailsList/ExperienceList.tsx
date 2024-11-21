"use client"

import React from "react"
import toast from "react-hot-toast"

import { DraggableItem } from "./DraggableItem"
import { useAppDispatch } from "@/app/store"
import { deleteResumeItem, selectItem, toggleStatus } from "@/entities/resume"
import type { Experience } from "@/shared/types"

const ExperienceList = React.memo(function List({ experience = [] }: { experience: Experience[] }) {
  const dispatch = useAppDispatch()

  const onEditChange = (experienceId: string) => {
    dispatch(selectItem({ id: experienceId, key: "experience" }))
    dispatch(toggleStatus({ key: "isEditing", content: "experience" }))
  }

  const onRemove = (experienceId: string) => {
    dispatch(deleteResumeItem({ key: "experience", id: experienceId }))
    toast.success("Successfully deleted!")
  }

  return experience.map((experience: Experience, index: number) => (
    <DraggableItem
      key={experience.id}
      index={index}
      item={experience}
      render={(item) => <>{item.employer}</>}
      onEditChange={() => onEditChange(experience.id)}
      onRemove={() => onRemove(experience.id)}
    />
  ))
})

export { ExperienceList }
