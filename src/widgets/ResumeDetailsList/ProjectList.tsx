"use client"

import type { Project } from "@/shared/types"

import React from "react"
import toast from "react-hot-toast"

import { DraggableItem } from "./DraggableItem"

import { deleteResumeItem, selectItem, toggleStatus } from "@/entities/resume"
import { useAppDispatch } from "@/shared/lib/store"

const ProjectList = React.memo(function List({ projects = [] }: { projects: Project[] }) {
  const dispatch = useAppDispatch()

  const onEditChange = (projectid: string) => {
    dispatch(selectItem({ id: projectid, key: "projects" }))
    dispatch(toggleStatus({ key: "isEditing", content: "projects" }))
  }

  const onRemove = (projectid: string) => {
    dispatch(deleteResumeItem({ key: "projects", id: projectid }))
    toast.success("Successfully deleted!")
  }

  return projects.map((project: Project, index: number) => (
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
