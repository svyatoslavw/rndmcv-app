"use client"

import React from "react"
import toast from "react-hot-toast"

import { deleteResumeItem, selectItem, toggleStatus } from "@/entities/resume"
import { useAppDispatch } from "@/shared/lib/store"
import type { ProjectEntity } from "@/shared/types"
import { DraggableItem } from "./DraggableItem"

const ProjectList = React.memo(function List({ projects = [] }: { projects: ProjectEntity[] }) {
  const dispatch = useAppDispatch()

  const onEditChange = (projectid: string) => {
    dispatch(selectItem({ id: projectid, key: "projects" }))
    dispatch(toggleStatus({ key: "isEditing", content: "projects" }))
  }

  const onRemove = (projectid: string) => {
    dispatch(deleteResumeItem({ key: "projects", id: projectid }))
    toast.success("Successfully deleted!")
  }

  return projects.map((project: ProjectEntity, index: number) => (
    <DraggableItem
      key={project.id}
      index={index}
      item={project}
      render={(item) => <>{item.title}</>}
      onEditChange={() => onEditChange(project.id)}
      onRemove={() => onRemove(project.id)}
    />
  ))
})

export { ProjectList }
