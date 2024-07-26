import { selectProject, toggleEditing } from "@/entities/resume/model/resume.slice"
import type { IProject } from "@/shared/lib"
import { useAppDispatch } from "@/shared/lib/store"
import React from "react"
import { ProjectItem } from "./ProjectItem"

const ProjectList = React.memo(function QuoteList({ projects = [] }: { projects: IProject[] }) {
  const dispatch = useAppDispatch()

  const onEditChange = (projectid: string) => {
    dispatch(selectProject(projectid))
    dispatch(toggleEditing("projects"))
  }
  return projects.map((project: IProject, index: number) => (
    <ProjectItem
      project={project}
      onEditChange={() => onEditChange(project.id)}
      index={index}
      key={project.id}
    />
  ))
})

export { ProjectList }
