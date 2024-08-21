import {
  BrainIcon,
  BriefcaseBusinessIcon,
  FolderOpenIcon,
  GraduationCapIcon,
  LanguagesIcon,
  LucideIcon
} from "lucide-react"

import { IPersonInformation } from "../types"

import type { TColorSides, THeading, TJob, TName, TPosition } from "@/entities/resume"
import { TUpdateKey } from "@/entities/resume"

interface IPersonalInformation {
  value: keyof IPersonInformation
  title: string
}

export const PERSONAL_INFORMATION: IPersonalInformation[] = [
  { value: "date", title: "Date of birth" },
  { value: "nationality", title: "Nationality" },
  { value: "passport", title: "Passport or id" },
  { value: "militaryService", title: "Military service" },
  { value: "drivingLicense", title: "Driving license" },
  { value: "gender", title: "Gender or Pronoun" }
]

export const DEFAULT_DATA = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 234 567 890",
  address: "123 Main St, Anytown, USA",
  summary: "Experienced software developer with expertise in React and Node.js.",
  experience: [
    {
      company: "Tech Company",
      role: "Senior Developer",
      duration: "Jan 2020 - Present",
      description: "Developing and maintaining web applications using React and Node.js."
    },
    {
      company: "Another Tech Company",
      role: "Junior Developer",
      duration: "Jan 2018 - Dec 2019",
      description: "Worked on various frontend projects using React and Redux."
    }
  ],
  education: [
    {
      institution: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      duration: "2014 - 2018"
    }
  ],
  skills: ["React", "Node.js", "JavaScript", "HTML", "CSS"]
}

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

export const LAYOUT_DATA: TPosition[] = [
  { pos: "left", class: "flex-row" },
  { pos: "top", class: "flex-col" },
  { pos: "right", class: "flex-row-reverse" }
]

export const HEADING_STYLES: THeading["style"][] = [
  "box",
  "underline",
  "simple",
  "line",
  "shortUnderline"
]

export const HEADING_SIZES: THeading["size"][] = [12, 16, 20, 24, 28]
export const NAME_SIZES: TName["size"][] = [0, 4, 8, 12, 16]
export const JOB_SIZES: TJob["size"][] = [0, 2, 6, 10, 14]
export const HEADING_ICONS: THeading["icons"][] = ["none", "outline", "filled"]

export const DEFAULT_MULTICOLORS: TColorSides[] = [
  {
    left: {
      accent: "#ef4444",
      text: "#ffffff",
      background: "#155e75"
    },
    right: {
      accent: "#ef4444",
      text: "#000000",
      background: "#fffcf9"
    }
  },
  {
    left: {
      accent: "#3b82f6",
      text: "#000000",
      background: "#e5e7eb"
    },
    right: {
      accent: "#3b82f6",
      text: "#000000",
      background: "#ffffff"
    }
  },
  {
    left: {
      accent: "#22c55e",
      text: "#000000",
      background: "#fcf5ed"
    },
    right: {
      accent: "#22c55e",
      text: "#000000",
      background: "#ffffff"
    }
  },
  {
    left: {
      accent: "#a855f7",
      text: "#000000",
      background: "#e5e7eb"
    },
    right: {
      accent: "#a855f7",
      text: "#000000",
      background: "#ffffff"
    }
  },
  {
    left: {
      accent: "#06b6d4",
      text: "#000000",
      background: "#e5e7eb"
    },
    right: {
      accent: "#06b6d4",
      text: "#000000",
      background: "#ffffff"
    }
  },
  {
    left: {
      accent: "#ec4899",
      text: "#000000",
      background: "#e5e7eb"
    },
    right: {
      accent: "#ec4899",
      text: "#000000",
      background: "#ffffff"
    }
  },
  {
    left: {
      accent: "#14b8a6",
      text: "#000000",
      background: "#e5e7eb"
    },
    right: {
      accent: "#14b8a6",
      text: "#000000",
      background: "#ffffff"
    }
  },
  {
    left: {
      accent: "#4f46e5",
      text: "#000000",
      background: "#e5e7eb"
    },
    right: {
      accent: "#4f46e5",
      text: "#000000",
      background: "#ffffff"
    }
  }
]

export const DEFAULT_COLORS: TColorSides[] = [
  {
    left: {
      accent: "#ef4444",
      text: "#000000",
      background: "#e5e7eb"
    },
    right: {
      accent: "#ef4444",
      text: "#000000",
      background: "#ffffff"
    }
  },
  {
    left: {
      accent: "#3b82f6",
      text: "#000000",
      background: "#e5e7eb"
    },
    right: {
      accent: "#3b82f6",
      text: "#000000",
      background: "#ffffff"
    }
  },
  {
    left: {
      accent: "#22c55e",
      text: "#000000",
      background: "#e5e7eb"
    },
    right: {
      accent: "#22c55e",
      text: "#000000",
      background: "#ffffff"
    }
  },
  {
    left: {
      accent: "#a855f7",
      text: "#000000",
      background: "#e5e7eb"
    },
    right: {
      accent: "#a855f7",
      text: "#000000",
      background: "#ffffff"
    }
  },
  {
    left: {
      accent: "#06b6d4",
      text: "#000000",
      background: "#e5e7eb"
    },
    right: {
      accent: "#06b6d4",
      text: "#000000",
      background: "#ffffff"
    }
  },
  {
    left: {
      accent: "#ec4899",
      text: "#000000",
      background: "#e5e7eb"
    },
    right: {
      accent: "#ec4899",
      text: "#000000",
      background: "#ffffff"
    }
  },
  {
    left: {
      accent: "#14b8a6",
      text: "#000000",
      background: "#e5e7eb"
    },
    right: {
      accent: "#14b8a6",
      text: "#000000",
      background: "#ffffff"
    }
  },
  {
    left: {
      accent: "#4f46e5",
      text: "#000000",
      background: "#e5e7eb"
    },
    right: {
      accent: "#4f46e5",
      text: "#000000",
      background: "#ffffff"
    }
  }
]
