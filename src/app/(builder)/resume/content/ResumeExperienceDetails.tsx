import { BriefcaseBusinessIcon } from "lucide-react"

import { ResumeDetails } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { ExperienceList } from "@/widgets"

const ResumeExperienceDetails = () => {
  const experience = useAppSelector((state) => state.resume.experience.items)

  return (
    <ResumeDetails
      items={experience}
      type="experience"
      Icon={BriefcaseBusinessIcon}
      render={(items, provided) => (
        <div className="mx-0.5" ref={provided.innerRef} {...provided.droppableProps}>
          <ExperienceList experience={items} />
        </div>
      )}
    />
  )
}

export { ResumeExperienceDetails }
