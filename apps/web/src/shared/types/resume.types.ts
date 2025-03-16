import { IconName } from "lucide-react/dynamic"

export type TypedPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

export type TypedOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}

export type DynamicIcon = IconName

type CommonEntity = {
  id: string
  description?: string
}

export type SectionKey = "person" | "education" | "experience" | "projects" | "skills" | "languages"

export type SectionKeyWithoutPerson = Exclude<SectionKey, "person">

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

export interface Person {
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

export type SectionEntity =
  | EducationEntity
  | ExperienceEntity
  | ProjectEntity
  | SkillEntity
  | LanguageEntity

export interface ICreateResume {
  general: string
  customization: string
}

export interface IUpdateResume {
  id: string
  general: string
  customization: string
}

export type ResumeSection<T> = {
  items: T[]
  selected: T | null
}

export type ResumeStatus = "PUBLIC" | "PRIVATE"

export interface GeneralEntity {
  isFirstLoading: boolean
  isNameTyped: boolean
  title: string
  status: ResumeStatus
  visibleBlocks: SectionKey[]
  person: PersonEntity
  projects: ResumeSection<ProjectEntity>
  education: ResumeSection<EducationEntity>
  experience: ResumeSection<ExperienceEntity>
  skills: ResumeSection<SkillEntity>
  languages: ResumeSection<LanguageEntity>
}

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
  | "wavy"

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

export type LayoutVariant = "1-column" | "2-columns"

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
  variant: LayoutVariant
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

export type SkillLayoutVariant = "grid" | "level" | "compact" | "default"

export type SkillLayout = {
  variant: SkillLayoutVariant
  value: string
}

type SkillOptions = {
  icon: string
  showLevel: boolean
  layout: SkillLayout
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

export interface ResumeEntity {
  id: string
  general: GeneralEntity
  customization: CustomizationEntity
}

export interface IResumeResponse {
  id: string
  general: string
  customization: string
}

export type CreateResume = TypedOmit<IResumeResponse, "id">

export type UpdateResume = IResumeResponse
