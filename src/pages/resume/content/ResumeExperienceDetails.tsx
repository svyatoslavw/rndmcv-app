import { ResumeDetails } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { ExperienceList } from "@/widgets"
import { BriefcaseBusinessIcon } from "lucide-react"

const ResumeExperienceDetails = () => {
  const experience = useAppSelector((state) => state.resume.experience.items)

  return (
    <ResumeDetails
      items={experience}
      type="experience"
      Icon={BriefcaseBusinessIcon}
      render={(items, provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <ExperienceList experience={items} />
          {provided.placeholder}
        </div>
      )}
    />
  )
}

export { ResumeExperienceDetails }
