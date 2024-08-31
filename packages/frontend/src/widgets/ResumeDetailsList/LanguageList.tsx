"use client"

import React from "react"
import toast from "react-hot-toast"

import { DraggableItem } from "./DraggableItem"
import { deleteResumeItem, selectItem, toggleStatus } from "@/entities/resume"
import type { ILanguage } from "@/shared/lib"
import { useAppDispatch } from "@/shared/lib/store"

const LanguageList = React.memo(function List({ languages = [] }: { languages: ILanguage[] }) {
  const dispatch = useAppDispatch()

  const onEditChange = (languageId: string) => {
    dispatch(selectItem({ id: languageId, key: "languages" }))
    dispatch(toggleStatus({ key: "isEditing", content: "languages" }))
  }

  const onRemove = (languageId: string) => {
    dispatch(deleteResumeItem({ key: "languages", id: languageId }))
    toast.success("Successfully deleted!")
  }

  return languages.map((language: ILanguage, index: number) => (
    <DraggableItem
      key={language.id}
      index={index}
      item={language}
      onRemove={() => onRemove(language.id)}
      onEditChange={() => onEditChange(language.id)}
      render={(item) => <>{item.language}</>}
    />
  ))
})

export { LanguageList }
