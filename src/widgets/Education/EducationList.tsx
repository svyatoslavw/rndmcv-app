import { selectItem, toggleState } from "@/entities/resume"
import type { IEducation } from "@/shared/lib"
import { useAppDispatch } from "@/shared/lib/store"
import React from "react"
import { EducationItem } from "./EducationItem"

const EducationList = React.memo(function List({ education = [] }: { education: IEducation[] }) {
  const dispatch = useAppDispatch()

  const onEditChange = (educationId: string) => {
    dispatch(selectItem({ id: educationId, key: "education" }))
    dispatch(toggleState({ key: "isEditing", content: "education" }))
  }
  return education.map((education: IEducation, index: number) => (
    <EducationItem
      key={education.id}
      index={index}
      eduction={education}
      onEditChange={() => onEditChange(education.id)}
    />
  ))
})

export { EducationList }
