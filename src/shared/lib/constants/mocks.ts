import type { TLayoutPosition } from "@/entities/resume/model/customization.slice"

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
