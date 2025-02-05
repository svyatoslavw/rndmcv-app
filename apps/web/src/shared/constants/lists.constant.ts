import type { PersonInfo, PersonLink } from "../types"

export const PERSONAL_INFORMATION: PersonInfo[] = [
  { key: "date", text: "Date of birth", icon: "calendar-fold" },
  { key: "nationality", text: "Nationality", icon: "smile" },
  { key: "passport", text: "Passport or id", icon: "scan-face" },
  { key: "militaryService", text: "Military service", icon: "shield-half" },
  { key: "drivingLicense", text: "Driving license", icon: "key-square" },
  { key: "gender", text: "Gender or Pronoun", icon: "heart-handshake" }
]

export const PERSONAL_LINKS: PersonLink[] = [
  { key: "LinkedIn", text: "LinkedIn", url: "https://www.linkedin.com/", icon: "linkedin" },
  { key: "GitHub", text: "GitHub", url: "https://github.com/", icon: "github" },
  { key: "Twitter", text: "Twitter", url: "https://twitter.com/", icon: "twitter" },
  { key: "Website", text: "Website", url: "", icon: "globe" },
  { key: "Telegram", text: "Telegram", url: "https://t.me/", icon: "send" },
  { key: "Instagram", text: "Instagram", url: "https://instagram.com/", icon: "instagram" },
  { key: "Facebook", text: "Facebook", url: "https://facebook.com/", icon: "facebook" },
  { key: "YouTube", text: "YouTube", url: "https://youtube.com/", icon: "youtube" },
  { key: "Twitch", text: "Twitch", url: "https://twitch.tv/", icon: "twitch" },
  { key: "Medium", text: "Medium", url: "https://medium.com/", icon: "book-open" },
  { key: "Behance", text: "Behance", url: "https://www.behance.net/", icon: "palette" },
  { key: "Dribbble", text: "Dribbble", url: "https://dribbble.com/", icon: "dribbble" },
  { key: "StackOverflow", text: "StackOverflow", url: "https://stackoverflow.com", icon: "layers" },
  { key: "CodePen", text: "CodePen", url: "https://codepen.io/", icon: "codepen" },
  { key: "Dev.to", text: "Dev.to", url: "https://dev.to/", icon: "terminal" },
  { key: "GitLab", text: "GitLab", url: "https://gitlab.com/", icon: "gitlab" },
  { key: "Bitbucket", text: "Bitbucket", url: "https://bitbucket.org/", icon: "git-branch" },
  { key: "Discord", text: "Discord", url: "https://discord.com/users/", icon: "message-circle" },
  { key: "Skype", text: "Skype", url: "skype:", icon: "phone" },
  { key: "WhatsApp", text: "WhatsApp", url: "https://wa.me/", icon: "message-square" },
  { key: "Reddit", text: "Reddit", url: "https://reddit.com/user/", icon: "message-square-more" }
]
