import { GraduationCapIcon } from "lucide-react"

import { EducationList } from "../ResumeDetailsList/EducationList"

import { ResumeDetails, selectGeneralResume } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"

const ResumeEducationDetails = () => {
  const { items } = useAppSelector(selectGeneralResume("education"))

  return (
    <ResumeDetails
      Icon={GraduationCapIcon}
      items={items}
      render={(items, provided) => (
        <div ref={provided.innerRef} className="mx-0.5" {...provided.droppableProps}>
          <EducationList education={items} />
        </div>
      )}
      type="education"
    />
  )
}

export { ResumeEducationDetails }
