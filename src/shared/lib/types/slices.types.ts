import type {
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

export type TypeHeadingSize = 2 | 4 | 6 | 8 | 10
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

type TypeSkill = {
  icon: string
  showLevel: boolean
}

type TypeProject = {
  showDescription: boolean
}

export type TypeEducation = {
  showDates: boolean
  showLocation: boolean
  showDegree: boolean
}

export type TypeExperience = {
  showDates: boolean
  showLocation: boolean
  showDescription: boolean
}

type TypeLanguage = {
  icon: string
  showLevel: boolean
}

export type TypeSections = {
  projects: TypeProject
  experience: TypeExperience
  skills: TypeSkill
  education: TypeEducation
  languages: TypeLanguage
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
}

export interface ICustomization {
  layout: TypeLayout
  colors: TypeColors
  spacing: TypeSpacing
  heading: TypeHeading
  name: TypeName
  job: TypeJob
  font: TypeFont
  sections: TypeSections
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

export interface IResumeResponse2 {
  id: string
  general: IGeneral
  customization: ICustomization
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

export type UpdateSectionsPayload =
  | { key: "projects"; value: Partial<TypeProject> }
  | { key: "experience"; value: Partial<TypeExperience> }
  | { key: "skills"; value: Partial<TypeSkill> }
  | { key: "education"; value: Partial<TypeEducation> }
  | { key: "languages"; value: Partial<TypeLanguage> }

export interface IInitialStateSettings {
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
