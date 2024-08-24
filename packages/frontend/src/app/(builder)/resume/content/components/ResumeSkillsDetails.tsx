import { BrainIcon } from "lucide-react"

import { ResumeDetails } from "@/entities/resume"
import { useAppSelector } from "@/shared/lib/store"
import { SkillsList } from "@/widgets"

const ResumeSkillsDetails = () => {
  const skills = useAppSelector((state) => state.resume.skills.items)

  return (
    <ResumeDetails
      items={skills}
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
