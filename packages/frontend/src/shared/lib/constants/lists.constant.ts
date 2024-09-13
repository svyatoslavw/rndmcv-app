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
  ScanFaceIcon,
  ShieldHalfIcon,
  SmileIcon,
  TwitterIcon
} from "lucide-react"
import type { useTranslations } from "next-intl"

import type { IContentSection, IPersonInfo, IPersonLink } from "../types"

export const getContentSections = (t: ReturnType<typeof useTranslations>) => {
  const sections: IContentSection[] = [
    {
      content: "education",
      icon: GraduationCapIcon,
      description: t("education.description"),
      label: t("education.title")
    },
    {
      content: "experience",
      icon: BriefcaseBusinessIcon,
      description: t("experience.description"),
      label: t("experience.title")
    },
    {
      content: "skills",
      icon: BrainIcon,
      description: t("skills.description"),
      label: t("skills.title")
    },
    {
      content: "languages",
      icon: LanguagesIcon,
      description: t("languages.description"),
      label: t("languages.title")
    },
    {
      content: "projects",
      icon: FolderOpenIcon,
      description: t("projects.description"),
      label: t("projects.title")
    }
  ]

  return sections
}

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
