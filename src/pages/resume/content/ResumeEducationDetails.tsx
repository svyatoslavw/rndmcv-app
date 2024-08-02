import { ResumeDetails } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { EducationList } from "@/widgets"
import { GraduationCapIcon } from "lucide-react"

const ResumeEducationDetails = () => {
  const education = useAppSelector((state) => state.resume.education.items)

  return (
    <ResumeDetails
      items={education}
      type="education"
      Icon={GraduationCapIcon}
      render={(items, provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <EducationList education={items} />
          {provided.placeholder}
        </div>
      )}
    />
  )
}

export { ResumeEducationDetails }
