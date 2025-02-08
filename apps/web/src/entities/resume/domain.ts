import { DynamicIcon, TypedOmit } from "@/shared/types"

type DynamicState<T, U extends string> = {
  [key in U]: T[]
}

type TypedState<T, U extends string> = {
  selectedId: string | null
} & DynamicState<T, U>

export type CommonState = TypedState<string, "ids">

type CommonEntity = {
  id: string
  description?: string
}

export type SectionKey = "person" | "education" | "experience" | "projects" | "skills" | "languages"

export type SectionKeyWithoutPerson = Exclude<SectionKey, "person">

export type SectionEntity =
  | EducationEntity
  | ExperienceEntity
  | ProjectEntity
  | SkillEntity
  | LanguageEntity

export interface PersonLink {
  key: string
  text: string
  url: string
  icon: DynamicIcon
}

export interface PersonInfo {
  key: string
  text: string
  icon: DynamicIcon
}

export interface PersonEntity {
  name: string
  job: string
  email: string
  phone: string
  address: string
  information: PersonInfo[]
  links: PersonLink[]
}

export interface ProjectEntity extends CommonEntity {
  title: string
  url?: string
}

export interface EducationEntity extends CommonEntity {
  school: string
  degree?: string
  city?: string
  country?: string
  startDate?: string
  endDate?: string
}

export interface ExperienceEntity extends CommonEntity {
  employer: string
  job?: string
  city?: string
  country?: string
  startDate?: string
  endDate?: string
}

export interface SkillEntity extends CommonEntity {
  skill: string
  level: string
}

export interface LanguageEntity extends CommonEntity {
  language: string
  level: string
}

export type ResumeSection<T> = {
  items: T[]
  selected: T | null
}

export type ResumeStatus = "PUBLIC" | "PRIVATE"

export interface GeneralEntity {
  isFirstLoading: boolean
  isNameTyped: boolean
  status: ResumeStatus
  visibleBlocks: SectionKey[]
  person: PersonEntity
  projects: ResumeSection<ProjectEntity>
  education: ResumeSection<EducationEntity>
  experience: ResumeSection<ExperienceEntity>
  skills: ResumeSection<SkillEntity>
  languages: ResumeSection<LanguageEntity>
}

export type GeneralState = TypedState<GeneralEntity, "generals">

export type UpdateContentAction = {
  values: Partial<PersonEntity>
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
  item: SectionEntity
}

export interface UpdateDetailsAction {
  key: SectionKeyWithoutPerson
  values: Partial<SectionEntity>
}

export interface DeleteItemAction {
  key: SectionKeyWithoutPerson
  id: string
}

export interface StatusState {
  isEditing: keyof GeneralEntity | null
  isCreating: keyof GeneralEntity | null
}

export type StatusKey = "isEditing" | "isCreating"

export type UpdateStatusKeyAction = {
  key: StatusKey
  content: keyof GeneralEntity
}

export type ColorMode = "basic" | "advanced" | "border"
export type ColorType = "accent" | "multicolor" | "image"

export type NextFont = {
  className: string
  style: {
    fontFamily: string
    fontWeight?: number
    fontStyle?: string
  }
}

export type HeadingStyle =
  | "box"
  | "topBottomLine"
  | "underline"
  | "simple"
  | "line"
  | "shortUnderline"

export type HeadingSize = 2 | 4 | 6 | 8 | 10
export type NameSize = 0 | 4 | 8 | 12 | 16
export type JobSize = 0 | 2 | 6 | 10 | 14
export type BorderSize = 4 | 8 | 12
export type HeadingIcon = "none" | "outline" | "filled"
export type Size = "XS" | "S" | "M" | "L" | "XL"

export type LayoutPosition = {
  pos: "top" | "left" | "right"
  class: "flex-col" | "flex-row" | "flex-row-reverse"
}

export type AccentOptions = {
  name: boolean
  headings: boolean
  headingsLines: boolean
  headerIcons: boolean
  dots: boolean
  dates: boolean
  linkIcons: boolean
}

export type BorderOptions = {
  left: boolean
  right: boolean
  top: boolean
  bottom: boolean
}

export type ColorSide = {
  text: string
  accent: string
  background: string
}

export type ColorSides = {
  left: ColorSide
  right: ColorSide
}

export type Colors = {
  isAccent: AccentOptions
  mode: ColorMode
  type: ColorType
  side: ColorSides
  borderVisibility: BorderOptions
  borderSize: BorderSize
}

export type Layout = {
  layout: LayoutPosition
  columns: {
    left: SectionKey[]
    right: SectionKey[]
  }
  columnsWidth: {
    left: number
    right: number
  }
}

export type Spacing = {
  fontSize: number
  lineHeight: number
  marginX: number
  marginY: number
}

export type Heading = {
  style: HeadingStyle
  size: HeadingSize
  icons: HeadingIcon
}

export type Name = {
  size: NameSize
  isBold: boolean
  font: string
}
export type Job = {
  size: JobSize
  isItalic: boolean
}

type Font = {
  font: NextFont
  style: string
}

type SkillOptions = {
  icon: string
  showLevel: boolean
}

type ProjectOptions = {
  showDescription: boolean
}

export type EducationOptions = {
  showDates: boolean
  showLocation: boolean
  showDegree: boolean
}

export type ExperienceOptions = {
  showDates: boolean
  showLocation: boolean
  showDescription: boolean
}

type LanguageOptions = {
  icon: string
  showLevel: boolean
}

type Sections = {
  projects: ProjectOptions
  experience: ExperienceOptions
  skills: SkillOptions
  education: EducationOptions
  languages: LanguageOptions
}
export type UpdateColumnsPayload = {
  left: SectionKey[]
  right: SectionKey[]
}

export type UpdateCustomizationPayload =
  | { key: "layout"; value: Partial<Layout> }
  | { key: "colors"; value: Partial<Colors> }
  | { key: "spacing"; value: Partial<Spacing> }
  | { key: "heading"; value: Partial<Heading> }
  | { key: "name"; value: Partial<Name> }
  | { key: "job"; value: Partial<Job> }
  | { key: "font"; value: Partial<Font> }

export type UpdateSectionsPayload =
  | { key: "projects"; value: Partial<ProjectOptions> }
  | { key: "experience"; value: Partial<ExperienceOptions> }
  | { key: "skills"; value: Partial<SkillOptions> }
  | { key: "education"; value: Partial<EducationOptions> }
  | { key: "languages"; value: Partial<LanguageOptions> }

export interface CustomizationEntity {
  layout: Layout
  colors: Colors
  spacing: Spacing
  heading: Heading
  name: Name
  job: Job
  font: Font
  sections: Sections
}

export type CustomizationState = TypedState<CustomizationEntity, "customizations">

export interface ResumeEntity {
  id: string
  general: GeneralEntity
  customization: CustomizationEntity
}

export interface Response {
  id: string
  general: string
  customization: string
}

export type CreateResume = TypedOmit<Response, "id">

export type UpdateResume = Response
