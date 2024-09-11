import { IGeneral, IInitialStateResume } from "./resume.types"
import { TSectionItem } from "@/shared/lib/types"
import { isDate } from "@/shared/lib/utils"

export const getSelectedResume = (state: IInitialStateResume) => {
  const resume = state.resumes.find((r) => r.id === state.selectedId)
  if (resume) return resume

  return state.resumes[0]
}

export function reorderArray<T>(array: T[], from: number, to: number): T[] {
  const item = array[from]
  array.splice(from, 1)
  array.splice(to, 0, item)
  return array
}

export function createResumeItemHelper<T extends TSectionItem>(state: T[], item: T) {
  const { id, ...rest } = item
  state.push({ id: Date.now().toString(), ...rest } as unknown as T)
}

export function updateResumeItemDetailsHelper<T extends TSectionItem>(
  items: T[],
  selectedId: string | null,
  values: Partial<TSectionItem>
) {
  const item = items.find((p) => p.id === selectedId) as T as Record<string, unknown>
  Object.keys(values).forEach((k) => {
    const value = values[k as keyof TSectionItem]
    if (k === "endDate" || k === "startDate") {
      item[k] = value && isDate(value) ? value.toISOString() : value
    } else {
      item[k] = value
    }
  })
}

export const GENERAL_STATE: IGeneral = {
  isFirstLoading: true,
  isNameTyped: true,
  visibleBlocks: [],
  person: {
    name: "",
    job: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    information: [],
    links: []
  },
  projects: {
    items: [],
    selected: null
  },
  education: {
    items: [],
    selected: null
  },
  experience: {
    items: [],
    selected: null
  },
  skills: {
    items: [],
    selected: null
  },
  languages: {
    items: [],
    selected: null
  },
  certificates: {
    items: [],
    selected: null
  }
}