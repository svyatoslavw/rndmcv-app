"use client"

import React from "react"
import toast from "react-hot-toast"

import { DraggableItem } from "./DraggableItem"
import { deleteResumeItem, selectItem, toggleStatus } from "@/entities/resume"
import { useAppDispatch } from "@/shared/lib/store"
import type { IProject } from "@/shared/lib/types"

const ProjectList = React.memo(function List({ projects = [] }: { projects: IProject[] }) {
  const dispatch = useAppDispatch()

  const onEditChange = (projectid: string) => {
    dispatch(selectItem({ id: projectid, key: "projects" }))
    dispatch(toggleStatus({ key: "isEditing", content: "projects" }))
  }

  const onRemove = (projectid: string) => {
    dispatch(deleteResumeItem({ key: "projects", id: projectid }))
    toast.success("Successfully deleted!")
  }

  return projects.map((project: IProject, index: number) => (
    <DraggableItem
      key={project.id}
      index={index}
      item={project}
      onEditChange={() => onEditChange(project.id)}
      onRemove={() => onRemove(project.id)}
      render={(item) => <>{item.title}</>}
    />
  ))
})

export { ProjectList }
