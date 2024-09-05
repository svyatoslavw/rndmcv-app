import { GraduationCapIcon } from "lucide-react"

import { ResumeDetails, selectGeneralResume } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { EducationList } from "@/widgets"

const ResumeEducationDetails = () => {
  const {
    education: { items }
  } = useAppSelector(selectGeneralResume)

  return (
    <ResumeDetails
      items={items}
      type="education"
      Icon={GraduationCapIcon}
      render={(items, provided) => (
        <div className="mx-0.5" ref={provided.innerRef} {...provided.droppableProps}>
          <EducationList education={items} />
        </div>
      )}
    />
  )
}

export { ResumeEducationDetails }
