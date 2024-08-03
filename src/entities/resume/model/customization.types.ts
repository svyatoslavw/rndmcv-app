export type TBlockOrder = "person" | "education" | "experience" | "projects" | "skills"

export type TColorMode = "basic" | "advanced" | "border"
export type TColorType = "accent" | "multicolor" | "image"

export type TLayoutPosition = {
  position: "top" | "left" | "right"
  class: "flex-col" | "flex-row" | "flex-row-reverse"
}

export type TApplyAccent = {
  name: boolean
  headings: boolean
  headingsLines: boolean
  headerIcons: boolean
  dots: boolean
  dates: boolean
  linkIcons: boolean
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

export type TSpacing = {
  fontSize: number
  lineHeight: number
  marginX: number
  marginY: number
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
    applyAccent: TApplyAccent
    mode: TColorMode
    type: TColorType
    side: {
      left: TColorSide
      right: TColorSide
    }
  }
  spacing: TSpacing
}
