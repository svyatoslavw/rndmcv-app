import { FetchBaseQueryError } from "@reduxjs/toolkit/query"

import type {
  ICertificate,
  IEducation,
  IExperience,
  ILanguage,
  IPerson,
  IProject,
  ISkill,
  TSectionItem,
  TSectionKey
} from "@/shared/lib/types"

export type ApiSuccessResult<T> = { data: T }
export type ApiErrorResult = { error: FetchBaseQueryError }

export type TColorMode = "basic" | "advanced" | "border"
export type TColorType = "accent" | "multicolor" | "image"

export type THeadingStyle =
  | "box"
  | "topBottomLine"
  | "underline"
  | "simple"
  | "line"
  | "shortUnderline"

export type THeadingSize = 12 | 16 | 20 | 24 | 28
export type TNameSize = 0 | 4 | 8 | 12 | 16
export type TJobSize = 0 | 2 | 6 | 10 | 14
export type TBorderSize = 4 | 8 | 12
export type THeadingIcon = "none" | "outline" | "filled"

export type TPosition = {
  pos: "top" | "left" | "right"
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

export type TBorderVisibility = {
  left: boolean
  right: boolean
  top: boolean
  bottom: boolean
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

export type TColors = {
  isAccent: TApplyAccent
  mode: TColorMode
  type: TColorType
  side: {
    left: TColorSide
    right: TColorSide
  }
  borderVisibility: TBorderVisibility
  borderSize: TBorderSize
}

export type TLayout = {
  layout: TPosition
  columns: {
    left: TSectionKey[]
    right: TSectionKey[]
  }
  columnsWidth: {
    left: number
    right: number
  }
}

export type TSpacing = {
  fontSize: number
  lineHeight: number
  marginX: number
  marginY: number
}

export type THeading = {
  style: THeadingStyle
  size: THeadingSize
  icons: THeadingIcon
}

export type TName = {
  size: TNameSize
  isBold: boolean
  font: string
}
export type TJob = {
  size: TJobSize
  isItalic: boolean
}

export interface IGeneral {
  isFirstLoading: boolean
  isNameTyped: boolean
  visibleBlocks: TSectionKey[]
  person: IPerson
  projects: {
    items: IProject[]
    selected: IProject | null
  }
  education: {
    items: IEducation[]
    selected: IEducation | null
  }
  experience: {
    items: IExperience[]
    selected: IExperience | null
  }
  skills: {
    items: ISkill[]
    selected: ISkill | null
  }
  languages: {
    items: ILanguage[]
    selected: ILanguage | null
  }
  certificates: {
    items: ICertificate[]
    selected: ICertificate | null
  }
}

export interface ICustomization {
  layout: TLayout
  colors: TColors
  spacing: TSpacing
  heading: THeading
  name: TName
  job: TJob
}

export interface IResume {
  id: string
  general: IGeneral
  customization: ICustomization
}

export interface IInitialStateResume {
  resumes: Array<IResume>
  selectedId: string | null
}

export type TUpdateKey = Exclude<
  keyof IGeneral,
  "person" | "isFirstLoading" | "isNameTyped" | "visibleBlocks"
>

export type UpdateContentAction = {
  values: Partial<IPerson>
}

export type SelectItemAction = {
  key: TUpdateKey
  id: string
}

export type ReorderItemsAction = {
  key: TUpdateKey
  from: number
  to: number
}

export interface UpdateItemAction {
  key: TUpdateKey
  item: TSectionItem
}

export interface UpdateDetailsAction {
  key: TUpdateKey
  values: Partial<TSectionItem>
}

export interface DeleteItemAction {
  key: TUpdateKey
  id: string
}

export type UpdateColumnsPayload = {
  left: TSectionKey[]
  right: TSectionKey[]
}

export type UpdateCustomizationPayload =
  | { key: "layout"; value: Partial<TLayout> }
  | { key: "colors"; value: Partial<TColors> }
  | { key: "spacing"; value: Partial<TSpacing> }
  | { key: "heading"; value: Partial<THeading> }
  | { key: "name"; value: Partial<TName> }
  | { key: "job"; value: Partial<TJob> }
