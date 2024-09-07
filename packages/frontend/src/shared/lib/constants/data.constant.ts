import { ICustomization } from "@/entities/resume"

export const CUSTOMIZATION_STATE: ICustomization = {
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
        background: "#e5e7eb",
        text: "#000000",
        accent: "#a855f7"
      },
      right: {
        background: "#FFFFFF",
        text: "#000000",
        accent: "#a855f7"
      }
    }
  },
  spacing: {
    fontSize: 12,
    lineHeight: 1.45,
    marginX: 20,
    marginY: 20
  },
  heading: {
    size: 20,
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
  }
}
