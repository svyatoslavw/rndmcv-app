import { IInitialStateResume, TypeSectionItem } from "@/shared/lib/types"
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

export function createResumeItemHelper<T extends TypeSectionItem>(state: T[], item: T) {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, ...rest } = item

  state.push({ id: Date.now().toString(), ...rest } as unknown as T)
}

export function updateResumeItemDetailsHelper<T extends TypeSectionItem>(
  items: T[],
  selectedId: string | null,
  values: Partial<TypeSectionItem>
) {
  const item = items.find((p) => p.id === selectedId) as T as Record<string, unknown>

  Object.keys(values).forEach((k) => {
    const value = values[k as keyof TypeSectionItem]

    if (k === "endDate" || k === "startDate") {
      item[k] = value && isDate(value) ? value.toISOString() : value
    } else {
      item[k] = value
    }
  })
}
