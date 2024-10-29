"use client"

import type { ISkill } from "@/shared/lib/types"

import React from "react"
import toast from "react-hot-toast"

import { DraggableItem } from "./DraggableItem"

import { useAppDispatch } from "@/app/store"
import { deleteResumeItem, selectItem, toggleStatus } from "@/entities/resume"

const SkillsList = React.memo(function List({ skills = [] }: { skills: ISkill[] }) {
  const dispatch = useAppDispatch()

  const onEditChange = (skillId: string) => {
    dispatch(selectItem({ id: skillId, key: "skills" }))
    dispatch(toggleStatus({ key: "isEditing", content: "skills" }))
  }

  const onRemove = (skillId: string) => {
    dispatch(deleteResumeItem({ key: "skills", id: skillId }))
    toast.success("Successfully deleted!")
  }

  return skills.map((skill: ISkill, index: number) => (
    <DraggableItem
      key={skill.id}
      index={index}
      item={skill}
      render={(item) => <>{item.skill}</>}
      onEditChange={() => onEditChange(skill.id)}
      onRemove={() => onRemove(skill.id)}
    />
  ))
})

export { SkillsList }
