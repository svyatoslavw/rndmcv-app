import type { IPersonInfo, IPersonLink } from "../types"

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
