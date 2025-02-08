import { Work_Sans } from "next/font/google"
import { CustomizationEntity, GeneralEntity } from "../types"

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"]
})

export const GENERAL_STATE: GeneralEntity = {
  isFirstLoading: true,
  isNameTyped: true,
  status: "PUBLIC",
  visibleBlocks: [],
  person: {
    name: "",
    job: "",
    email: "",
    phone: "",
    address: "",
    information: [],
    links: []
  },
  projects: {
    items: [],
    selected: null
  },
  education: {
    items: [],
    selected: null
  },
  experience: {
    items: [],
    selected: null
  },
  skills: {
    items: [],
    selected: null
  },
  languages: {
    items: [],
    selected: null
  }
}

export const CUSTOMIZATION_STATE: CustomizationEntity = {
  layout: {
    layout: { pos: "left", class: "flex-row" },
    columns: {
      left: ["person"],
      right: []
    },
    columnsWidth: {
      left: 40,
      right: 60
    }
  },
  colors: {
    mode: "basic",
    type: "accent",
    isAccent: {
      name: true,
      headings: false,
      headingsLines: true,
      headerIcons: false,
      dots: false,
      dates: false,
      linkIcons: false
    },
    side: {
      left: {
        background: "#e3e1e1",
        text: "#000000",
        accent: "#a855f7"
      },
      right: {
        background: "#FFFFFF",
        text: "#000000",
        accent: "#a855f7"
      }
    },
    borderVisibility: {
      top: true,
      bottom: true,
      left: true,
      right: true
    },
    borderSize: 8
  },
  spacing: {
    fontSize: 7,
    lineHeight: 1.45,
    marginX: 20,
    marginY: 20
  },
  heading: {
    size: 8,
    icons: "outline",
    style: "shortUnderline"
  },
  name: {
    size: 12,
    isBold: true,
    font: "default"
  },
  job: {
    size: 6,
    isItalic: false
  },
  font: {
    font: workSans,
    style: "sans"
  },
  sections: {
    education: {
      showDates: true,
      showDegree: false,
      showLocation: true
    },
    experience: {
      showDates: true,
      showLocation: false,
      showDescription: true
    },
    projects: {
      showDescription: true
    },
    languages: {
      icon: "★",
      showLevel: true
    },
    skills: {
      icon: "★",
      showLevel: true
    }
  }
}
