import { FetchBaseQueryError } from "@reduxjs/toolkit/query"

import type {
  ICertificate,
  IEducation,
  IExperience,
  ILanguage,
  IPerson,
  IProject,
  ISkill,
  TypeSectionItem,
  TypeSectionKey,
  TypeSectionKeyWithoutPerson
} from "@/shared/lib/types"

export type ApiSuccessResult<T> = { data: T }
export type ApiErrorResult = { error: FetchBaseQueryError }

export type TypeColorMode = "basic" | "advanced" | "border"
export type TypeColorType = "accent" | "multicolor" | "image"

export type NextFont = {
  className: string
  style: {
    fontFamily: string
    fontWeight?: number
    fontStyle?: string
  }
}

export type TypeHeadingStyle =
  | "box"
  | "topBottomLine"
  | "underline"
  | "simple"
  | "line"
  | "shortUnderline"

export type TypeHeadingSize = 12 | 16 | 20 | 24 | 28
export type TypeNameSize = 0 | 4 | 8 | 12 | 16
export type TypeJobSize = 0 | 2 | 6 | 10 | 14
export type TypeBorderSize = 4 | 8 | 12
export type TypeHeadingIcon = "none" | "outline" | "filled"

export type TypePosition = {
  pos: "top" | "left" | "right"
  class: "flex-col" | "flex-row" | "flex-row-reverse"
}

export type TypeApplyAccent = {
  name: boolean
  headings: boolean
  headingsLines: boolean
  headerIcons: boolean
  dots: boolean
  dates: boolean
  linkIcons: boolean
}

export type TypeBorderVisibility = {
  left: boolean
  right: boolean
  top: boolean
  bottom: boolean
}

export type TypeColorSide = {
  text: string
  accent: string
  background: string
}

export type TypeColorSides = {
  left: TypeColorSide
  right: TypeColorSide
}

export type TypeColors = {
  isAccent: TypeApplyAccent
  mode: TypeColorMode
  type: TypeColorType
  side: TypeColorSides
  borderVisibility: TypeBorderVisibility
  borderSize: TypeBorderSize
}

export type TypeLayout = {
  layout: TypePosition
  columns: {
    left: TypeSectionKey[]
    right: TypeSectionKey[]
  }
  columnsWidth: {
    left: number
    right: number
  }
}

export type TypeSpacing = {
  fontSize: number
  lineHeight: number
  marginX: number
  marginY: number
}

export type TypeHeading = {
  style: TypeHeadingStyle
  size: TypeHeadingSize
  icons: TypeHeadingIcon
}

export type TypeName = {
  size: TypeNameSize
  isBold: boolean
  font: string
}
export type TypeJob = {
  size: TypeJobSize
  isItalic: boolean
}

type TypeFont = {
  font: NextFont
  style: string
}

export interface IGeneral {
  isFirstLoading: boolean
  isNameTyped: boolean
  visibleBlocks: TypeSectionKey[]
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
  layout: TypeLayout
  colors: TypeColors
  spacing: TypeSpacing
  heading: TypeHeading
  name: TypeName
  job: TypeJob
  font: TypeFont
}

export interface IResume {
  id: string
  general: IGeneral
  customization: ICustomization
}

export interface IResumeResponse {
  id: string
  general: string
  customization: string
}

export interface IInitialStateResume {
  resumes: Array<IResume>
  selectedId: string | null
}

export type UpdateContentAction = {
  values: Partial<IPerson>
}

export type SelectItemAction = {
  key: TypeSectionKeyWithoutPerson
  id: string
}

export type ReorderItemsAction = {
  key: TypeSectionKeyWithoutPerson
  from: number
  to: number
}

export interface UpdateItemAction {
  key: TypeSectionKeyWithoutPerson
  item: TypeSectionItem
}

export interface UpdateDetailsAction {
  key: TypeSectionKeyWithoutPerson
  values: Partial<TypeSectionItem>
}

export interface DeleteItemAction {
  key: TypeSectionKeyWithoutPerson
  id: string
}

export type UpdateColumnsPayload = {
  left: TypeSectionKey[]
  right: TypeSectionKey[]
}

export type UpdateCustomizationPayload =
  | { key: "layout"; value: Partial<TypeLayout> }
  | { key: "colors"; value: Partial<TypeColors> }
  | { key: "spacing"; value: Partial<TypeSpacing> }
  | { key: "heading"; value: Partial<TypeHeading> }
  | { key: "name"; value: Partial<TypeName> }
  | { key: "job"; value: Partial<TypeJob> }
  | { key: "font"; value: Partial<TypeFont> }

export type TypeThemeKey =
  | "theme-green"
  | "theme-blue"
  | "theme-violet"
  | "theme-red"
  | "theme-rose"
  | "theme-black"
  | "theme-orange"

export interface IInitialStateSettings {
  theme: TypeThemeKey
  autosave: {
    isEnabled: boolean
    interval: number
  }
  isResumeSavedEnabled: boolean
}

export interface IInitialStateStatus {
  isEditing: keyof IGeneral | null
  isCreating: keyof IGeneral | null
}

export type TypeStatusKey = "isEditing" | "isCreating"

export type UpdateStatusKeyAction = {
  key: TypeStatusKey
  content: keyof IGeneral
}
