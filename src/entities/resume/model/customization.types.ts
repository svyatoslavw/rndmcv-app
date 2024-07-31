export type TBlockOrder = "person" | "education" | "experience" | "projects" | "skills"

export type TColorType = "basic" | "advanced" | "border"

export type TLayoutPosition = {
  position: "top" | "left" | "right"
  class: "flex-col" | "flex-row" | "flex-row-reverse"
}

export type UpdateColumnsPayload = {
  left: TBlockOrder[]
  right: TBlockOrder[]
}

export type UpdateColumnsWidthPayload = "left" | "right"

export type UpdateColorsPayload = {
  color: {
    left: string
    right: string
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
    color: {
      left: string
      right: string
    }
  }
}
