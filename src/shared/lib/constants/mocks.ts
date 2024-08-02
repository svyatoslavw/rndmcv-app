import type { TColorSides, TLayoutPosition } from "@/entities/resume"

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

export const LAYOUT_DATA: TLayoutPosition[] = [
  { position: "left", class: "flex-row" },
  { position: "top", class: "flex-col" },
  { position: "right", class: "flex-row-reverse" }
]

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
