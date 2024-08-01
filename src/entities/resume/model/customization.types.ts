export type TBlockOrder = "person" | "education" | "experience" | "projects" | "skills"

export type TColorType = "basic" | "advanced" | "border"
export type TColorSubtype = "accent" | "multicolor" | "image"

export type TLayoutPosition = {
  position: "top" | "left" | "right"
  class: "flex-col" | "flex-row" | "flex-row-reverse"
}

export type TColorSide = {
  text: string
  accent: string
  background: string
}

export type TColorSides = {
  left: TColorSide
  right: TColorSide
}

export type UpdateColumnsPayload = {
  left: TBlockOrder[]
  right: TBlockOrder[]
}

export type UpdateColumnsWidthPayload = "left" | "right"

export type UpdateColorsPayload = {
  side: {
    left: TColorSide
    right: TColorSide
  }
}

export type IInitialStateCustomization = {
  layout: TLayoutPosition
  columns: {
    left: TBlockOrder[]
    right: TBlockOrder[]
  }
  columnsWidth: {
    left: number
    right: number
  }
  colors: {
    type: TColorType
    subtype: TColorSubtype
    side: {
      left: TColorSide
      right: TColorSide
    }
  }
}
