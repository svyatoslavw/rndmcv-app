import type { IGeneral, IResume, TypeColorSides } from "../types"

import { DEFAULT_MULTICOLORS } from "./colors.constant"
import { CUSTOMIZATION_STATE } from "./data.constant"

const general: IGeneral = {
  visibleBlocks: ["projects", "education", "experience", "skills", "person", "languages"],
  person: {
    name: "John Doe",
    job: "Software Engineer",
    email: "example@gmail.com",
    phone: "+1234567890",
    address: "123 Main St, Kyiv, Ukraine",
    date: "2020-01-01",
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
  certificates: {
    items: [
      {
        id: "1",
        certificate: "Certificate 1",
        information:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque aliquet turpis nulla, eleifend faucibus est sollicitudin ut."
      }
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
  isFirstLoading: false
}

const createResume = (colors: TypeColorSides): IResume => ({
  id: colors.left.background,
  general,
  customization: {
    ...CUSTOMIZATION_STATE,
    layout: {
      columns: {
        left: ["person", "education", "languages"],
        right: ["experience", "projects", "skills"]
      },
      layout: CUSTOMIZATION_STATE.layout.layout,
      columnsWidth: CUSTOMIZATION_STATE.layout.columnsWidth
    },
    colors: {
      side: {
        left: colors.left,
        right: colors.right
      },
      borderVisibility: CUSTOMIZATION_STATE.colors.borderVisibility,
      borderSize: CUSTOMIZATION_STATE.colors.borderSize,
      isAccent: CUSTOMIZATION_STATE.colors.isAccent,
      mode: "advanced",
      type: "multicolor"
    }
  }
})

export const RESUME_TEMPLATES = DEFAULT_MULTICOLORS.map((colors) => createResume(colors))
