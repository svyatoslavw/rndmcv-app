import {
  BrainIcon,
  BriefcaseBusinessIcon,
  CalendarFoldIcon,
  FolderOpenIcon,
  GithubIcon,
  GlobeIcon,
  GraduationCapIcon,
  HeartHandshakeIcon,
  KeySquareIcon,
  LanguagesIcon,
  LinkedinIcon,
  LucideIcon,
  ScanFaceIcon,
  ShieldHalfIcon,
  SmileIcon,
  TwitterIcon
} from "lucide-react"

import type { IPersonInfo, IPersonLink } from "../types"

import type { TUpdateKey } from "@/entities/resume"

interface IContentSection {
  content: TUpdateKey
  icon: LucideIcon
  description: string
}

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
  }
]

export const PERSONAL_INFORMATION: IPersonInfo[] = [
  { key: "date", text: "Date of birth", icon: "CalendarFold" },
  { key: "nationality", text: "Nationality", icon: "Smile" },
  { key: "passport", text: "Passport or id", icon: "ScanFace" },
  { key: "militaryService", text: "Military service", icon: "ShieldHalf" },
  { key: "drivingLicense", text: "Driving license", icon: "KeySquare" },
  { key: "gender", text: "Gender or Pronoun", icon: "HeartHandshake" }
]

export const PERSONAL_LINKS: IPersonLink[] = [
  { key: "LinkedIn", text: "LinkedIn", url: "https://www.linkedin.com/", icon: "Linkedin" },
  { key: "GitHub", text: "GitHub", url: "https://github.com/johndoe", icon: "Github" },
  { key: "Twitter", text: "Twitter", url: "https://twitter.com/johndoe", icon: "Twitter" },
  { key: "Website", text: "Website", url: "https://johndoe.com", icon: "Globe" }
]

export const ICONS = {
  CalendarFold: CalendarFoldIcon,
  HeartHandshake: HeartHandshakeIcon,
  Smile: SmileIcon,
  ScanFace: ScanFaceIcon,
  ShieldHalf: ShieldHalfIcon,
  KeySquare: KeySquareIcon,
  Linkedin: LinkedinIcon,
  Github: GithubIcon,
  Twitter: TwitterIcon,
  Globe: GlobeIcon
}
