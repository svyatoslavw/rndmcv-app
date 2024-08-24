"use client"

import React from "react"

import { DraggableItem } from "./DraggableItem"
import { selectItem, toggleStatus } from "@/entities/resume"
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

  return experience.map((experience: IExperience, index: number) => (
    <DraggableItem
      key={experience.id}
      index={index}
      item={experience}
      onEditChange={() => onEditChange(experience.id)}
      render={(item) => <>{item.employer}</>}
    />
  ))
})

export { ExperienceList }
