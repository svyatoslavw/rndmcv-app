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
      items={items}
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
