import { selectItem, toggleState } from "@/entities/resume/model/resume.slice"
import type { IProject } from "@/shared/lib"
import { useAppDispatch } from "@/shared/lib/store"
import React from "react"
import { ProjectItem } from "./ProjectItem"

const ProjectList = React.memo(function List({ projects = [] }: { projects: IProject[] }) {
  const dispatch = useAppDispatch()

  const onEditChange = (projectid: string) => {
    dispatch(selectItem({ id: projectid, key: "projects" }))
    dispatch(toggleState({ key: "isEditing", content: "projects" }))
  }
  return projects.map((project: IProject, index: number) => (
    <ProjectItem
      key={project.id}
      index={index}
      project={project}
      onEditChange={() => onEditChange(project.id)}
    />
  ))
})

export { ProjectList }
