import { BriefcaseBusinessIcon } from "lucide-react"

import { ExperienceList } from "../ResumeDetailsList/ExperienceList"

import { ResumeDetails, selectGeneralResume } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"

const ResumeExperienceDetails = () => {
  const { items } = useAppSelector(selectGeneralResume("experience"))

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
