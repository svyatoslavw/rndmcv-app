import { isDate } from "@/shared/lib/utils"
import { CustomizationInitialState, GeneralInitialState, SectionItem } from "@/shared/types"

export const getSelectedGeneral = (state: GeneralInitialState) => {
  const general = state.generals.find((r) => r.id === state.selectedId)

  if (general) return general

  return state.generals[0]
}

export const getSelectedCustomization = (state: CustomizationInitialState) => {
  const customization = state.customizations.find((r) => r.id === state.selectedId)

  if (customization) return customization

  return state.customizations[0]
}

export function reorderArray<T>(array: T[], from: number, to: number): T[] {
  const item = array[from]

  array.splice(from, 1)
  array.splice(to, 0, item)

  return array
}

export function createResumeItemHelper<T extends SectionItem>(state: T[], item: T) {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, ...rest } = item

  state.push({ id: Date.now().toString(), ...rest } as unknown as T)
}

export function deleteResumeItemHelper<T extends SectionItem>(state: T[], id: string) {
  return state.filter((it) => it.id !== id)
}

export function updateResumeItemDetailsHelper<T extends SectionItem>(
  items: T[],
  selectedId: string | null,
  values: Partial<SectionItem>
) {
  const item = items.find((p) => p.id === selectedId) as T as Record<string, unknown>

  Object.keys(values).forEach((k) => {
    const value = values[k as keyof SectionItem]

    if (k === "endDate" || k === "startDate") {
      item[k] = value && isDate(value) ? value.toISOString() : value
    } else {
      item[k] = value
    }
  })
}
