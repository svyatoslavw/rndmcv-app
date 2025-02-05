import { ColorSides, GeneralEntity, ResumeEntity } from "../types"
import { DEFAULT_MULTICOLORS } from "./colors.constant"
import { CUSTOMIZATION_STATE } from "./state.constant"

export const GENERAL_TEMPLATES: GeneralEntity = {
  id: "",
  visibleBlocks: ["projects", "education", "experience", "skills", "person", "languages"],
  person: {
    name: "John Doe",
    job: "Software Engineer",
    email: "example@gmail.com",
    phone: "+1234567890",
    address: "123 Main St, Kyiv, Ukraine",
    information: [],
    links: []
  },
  projects: {
    items: [
      {
        id: "1",
        title: "Project 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque aliquet turpis nulla, eleifend faucibus est sollicitudin ut."
      }
    ],
    selected: null
  },
  education: {
    items: [
      {
        id: "1",
        school: "University 1",
        degree: "Degree 1",
        city: "Kyiv",
        country: "Ukraine",
        startDate: "2020-01-01",
        endDate: "2020-01-01",
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque aliquet turpis nulla, eleifend faucibus est sollicitudin ut."
      }
    ],
    selected: null
  },
  experience: {
    items: [
      {
        id: "1",
        employer: "Employer 1",
        city: "Kyiv",
        country: "Ukraine",
        startDate: "2020-01-01",
        endDate: "2020-01-01",
        description:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque aliquet turpis nulla, eleifend faucibus est sollicitudin ut."
      }
    ],
    selected: null
  },
  skills: {
    items: [
      { id: "1", skill: "Skill 1", level: "2" },
      { id: "2", skill: "Skill 2", level: "4" }
    ],
    selected: null
  },
  languages: {
    items: [
      {
        id: "1",
        language: "Language 1",
        level: "2"
      },
      {
        id: "2",
        language: "Language 2",
        level: "4"
      }
    ],
    selected: null
  },
  isNameTyped: true,
  isFirstLoading: false,
  status: "PRIVATE"
}

const createResume = (colors: ColorSides): ResumeEntity => ({
  id: colors.left.background,
  general: GENERAL_TEMPLATES,
  customization: {
    ...CUSTOMIZATION_STATE,
    layout: {
      ...CUSTOMIZATION_STATE.layout,
      columns: {
        left: ["person", "education", "languages"],
        right: ["experience", "projects", "skills"]
      }
    },
    colors: {
      ...CUSTOMIZATION_STATE.colors,
      side: {
        left: colors.left,
        right: colors.right
      },
      mode: "advanced",
      type: "multicolor"
    }
  }
})

export const RESUME_TEMPLATES = DEFAULT_MULTICOLORS.map((colors) => createResume(colors))
