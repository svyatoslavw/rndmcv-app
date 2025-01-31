import { BrainIcon } from "lucide-react"

import { SkillsList } from "../ResumeDetailsList/SkillsList"

import { ResumeDetails, selectGeneralResume } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"

const ResumeSkillsDetails = () => {
  const { items } = useAppSelector(selectGeneralResume("skills"))

  return (
    <ResumeDetails
      Icon={BrainIcon}
      items={items}
      render={(items, provided) => (
        <div ref={provided.innerRef} className="mx-0.5" {...provided.droppableProps}>
          <SkillsList skills={items} />
        </div>
      )}
      type="skills"
    />
  )
}

export { ResumeSkillsDetails }
