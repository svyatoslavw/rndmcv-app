import { GraduationCapIcon } from "lucide-react"

import { useAppSelector } from "@/app/store"
import { ResumeDetails, selectGeneralResume } from "@/entities/resume"
import { EducationList } from "@/widgets"

const ResumeEducationDetails = () => {
  const {
    education: { items }
  } = useAppSelector(selectGeneralResume)

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
