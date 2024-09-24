import {
  BrainIcon,
  BriefcaseBusinessIcon,
  FolderOpenIcon,
  GraduationCapIcon,
  LanguagesIcon,
  ScrollTextIcon
} from "lucide-react"

import type { IContentSection, IPersonInfo, IPersonLink } from "../types"

export const CONTENT_SECTIONS: IContentSection[] = [
  {
    content: "education",
    icon: GraduationCapIcon,
    description: "Show off your primary education, college degrees & exchange semesters."
  },
  {
    content: "experience",
    icon: BriefcaseBusinessIcon,
    description: "A place to highlight your professional experience - including internships."
  },
  {
    content: "skills",
    icon: BrainIcon,
    description: "List your technical, managerial or soft skills in this section."
  },
  {
    content: "languages",
    icon: LanguagesIcon,
    description: "You speak more than one language? Make sure to list them here."
  },
  {
    content: "projects",
    icon: FolderOpenIcon,
    description: "Worked on a particular challenging project in the past? Mention it here."
  },
  {
    content: "certificates",
    icon: ScrollTextIcon,
    description: "Show off your certifications and awards in this section. "
  }
]

export const PERSONAL_INFORMATION: IPersonInfo[] = [
  { key: "date", text: "Date of birth", icon: "calendar-fold" },
  { key: "nationality", text: "Nationality", icon: "smile" },
  { key: "passport", text: "Passport or id", icon: "scan-face" },
  { key: "militaryService", text: "Military service", icon: "shield-half" },
  { key: "drivingLicense", text: "Driving license", icon: "key-square" },
  { key: "gender", text: "Gender or Pronoun", icon: "heart-handshake" }
]

export const PERSONAL_LINKS: IPersonLink[] = [
  { key: "LinkedIn", text: "LinkedIn", url: "https://www.linkedin.com/", icon: "linkedin" },
  { key: "GitHub", text: "GitHub", url: "https://github.com/johndoe", icon: "github" },
  { key: "Twitter", text: "Twitter", url: "https://twitter.com/johndoe", icon: "twitter" },
  { key: "Website", text: "Website", url: "https://johndoe.com", icon: "globe" }
]
