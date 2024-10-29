import { BriefcaseBusinessIcon } from "lucide-react"

import { useAppSelector } from "@/app/store"
import { ResumeDetails, selectGeneralResume } from "@/entities/resume"
import { ExperienceList } from "@/widgets"

const ResumeExperienceDetails = () => {
  const {
    experience: { items }
  } = useAppSelector(selectGeneralResume)

  return (
    <ResumeDetails
      Icon={BriefcaseBusinessIcon}
      items={items}
      render={(items, provided) => (
        <div ref={provided.innerRef} className="mx-0.5" {...provided.droppableProps}>
          <ExperienceList experience={items} />
        </div>
      )}
      type="experience"
    />
  )
}

export { ResumeExperienceDetails }
