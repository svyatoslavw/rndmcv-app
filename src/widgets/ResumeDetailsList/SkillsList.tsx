import React from "react"

import { DraggableItem } from "./DraggableItem"
import { selectItem, toggleStatus } from "@/entities/resume"
import type { ISkill } from "@/shared/lib"
import { useAppDispatch } from "@/shared/lib/store"

const SkillsList = React.memo(function List({ skills = [] }: { skills: ISkill[] }) {
  const dispatch = useAppDispatch()

  const onEditChange = (projectid: string) => {
    dispatch(selectItem({ id: projectid, key: "skills" }))
    dispatch(toggleStatus({ key: "isEditing", content: "skills" }))
  }
  return skills.map((skill: ISkill, index: number) => (
    <DraggableItem
      key={skill.id}
      index={index}
      item={skill}
      onEditChange={() => onEditChange(skill.id)}
      render={(item) => <>{item.skill}</>}
    />
  ))
})

export { SkillsList }
