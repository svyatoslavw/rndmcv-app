import type {
  IEducation,
  IExperience,
  ILanguage,
  IPerson,
  IProject,
  ISkill,
  SectionItem,
  SectionKey,
  SectionKeyWithoutPerson
} from "@/shared/types"

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
export type TypeSize = "XS" | "S" | "M" | "L" | "XL"

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
    left: SectionKey[]
    right: SectionKey[]
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

type TypeSections = {
  projects: TypeProject
  experience: TypeExperience
  skills: TypeSkill
  education: TypeEducation
  languages: TypeLanguage
}

export type ResumeSection<T> = {
  items: T[]
  selected: T | null
}

export interface IGeneral {
  isFirstLoading: boolean
  isNameTyped: boolean
  visibleBlocks: SectionKey[]
  person: IPerson
  projects: ResumeSection<IProject>
  education: ResumeSection<IEducation>
  experience: ResumeSection<IExperience>
  skills: ResumeSection<ISkill>
  languages: ResumeSection<ILanguage>
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

export interface IInitialStateResume {
  resumes: Array<IResume>
  selectedId: string | null
}

export type UpdateContentAction = {
  values: Partial<IPerson>
}

export type SelectItemAction = {
  key: SectionKeyWithoutPerson
  id: string
}

export type ReorderItemsAction = {
  key: SectionKeyWithoutPerson
  from: number
  to: number
}

export interface UpdateItemAction {
  key: SectionKeyWithoutPerson
  item: SectionItem
}

export interface UpdateDetailsAction {
  key: SectionKeyWithoutPerson
  values: Partial<SectionItem>
}

export interface DeleteItemAction {
  key: SectionKeyWithoutPerson
  id: string
}

export type UpdateColumnsPayload = {
  left: SectionKey[]
  right: SectionKey[]
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
