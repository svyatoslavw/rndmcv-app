import { SectionKey } from "@/shared/types"
import { EducationBlock } from "./EducationBlock"
import { ExperienceBlock } from "./ExperienceBlock"
import { LanguagesBlock } from "./LanguagesBlock"
import { PersonBlock } from "./PersonBlock"
import { ProjectsBlock } from "./ProjectsBlock"
import { SkillsBlock } from "./SkillsBlock"

export const BlockComponents: Record<SectionKey, React.FC<any>> = {
  person: PersonBlock,
  education: EducationBlock,
  experience: ExperienceBlock,
  projects: ProjectsBlock,
  skills: SkillsBlock,
  languages: LanguagesBlock
}
