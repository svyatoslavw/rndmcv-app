"use client"

import React from "react"
import toast from "react-hot-toast"

import { deleteResumeItem, selectItem, toggleStatus } from "@/entities/resume"
import { useAppDispatch } from "@/shared/lib/store"
import type { LanguageEntity } from "@/shared/types"
import { DraggableItem } from "./DraggableItem"

const LanguageList = React.memo(function List({ languages = [] }: { languages: LanguageEntity[] }) {
  const dispatch = useAppDispatch()

  const onEditChange = (languageId: string) => {
    dispatch(selectItem({ id: languageId, key: "languages" }))
    dispatch(toggleStatus({ key: "isEditing", content: "languages" }))
  }

  const onRemove = (languageId: string) => {
    dispatch(deleteResumeItem({ key: "languages", id: languageId }))
    toast.success("Successfully deleted!")
  }

  return languages.map((language: LanguageEntity, index: number) => (
    <DraggableItem
      key={language.id}
      index={index}
      item={language}
      render={(item) => <>{item.language}</>}
      onEditChange={() => onEditChange(language.id)}
      onRemove={() => onRemove(language.id)}
    />
  ))
})

export { LanguageList }
