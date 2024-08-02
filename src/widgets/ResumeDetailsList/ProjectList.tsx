import React from "react"

import { DraggableItem } from "./DraggableItem"
import { selectItem, toggleStatus } from "@/entities/resume"
import type { IProject } from "@/shared/lib"
import { useAppDispatch } from "@/shared/lib/store"

const ProjectList = React.memo(function List({ projects = [] }: { projects: IProject[] }) {
  const dispatch = useAppDispatch()

  const onEditChange = (projectid: string) => {
    dispatch(selectItem({ id: projectid, key: "projects" }))
    dispatch(toggleStatus({ key: "isEditing", content: "projects" }))
  }
  return projects.map((project: IProject, index: number) => (
    <DraggableItem
      key={project.id}
      index={index}
      item={project}
      onEditChange={() => onEditChange(project.id)}
      render={(item) => <>{item.title}</>}
    />
  ))
})

export { ProjectList }
