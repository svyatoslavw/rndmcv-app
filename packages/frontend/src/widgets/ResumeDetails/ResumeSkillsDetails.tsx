import { BrainIcon } from "lucide-react"

import { ResumeDetails, selectGeneralResume } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { SkillsList } from "@/widgets"

const ResumeSkillsDetails = () => {
  const {
    skills: { items }
  } = useAppSelector(selectGeneralResume)

  return (
    <ResumeDetails
      items={items}
      type="skills"
      Icon={BrainIcon}
      render={(items, provided) => (
        <div className="mx-0.5" ref={provided.innerRef} {...provided.droppableProps}>
          <SkillsList skills={items} />
        </div>
      )}
    />
  )
}

export { ResumeSkillsDetails }
