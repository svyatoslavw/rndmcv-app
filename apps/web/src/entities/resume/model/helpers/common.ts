import { isDate } from "@/shared/lib/utils"
import { CustomizationState, GeneralState, SectionEntity } from "../../domain"

export const getSelectedGeneral = (state: GeneralState) => {
  const general = state.generals.find((r) => r.id === state.selectedId)

  if (general) return general

  return state.generals[0]
}

export const getSelectedCustomization = (state: CustomizationState) => {
  const customization = state.customizations.find((r) => r.id === state.selectedId)

  if (customization) return customization

  return state.customizations[0]
}

export function reorderArray<T>(array: T[], from: number, to: number): T[] {
  const item = array[from] as T

  array.splice(from, 1)
  array.splice(to, 0, item)

  return array
}

export function createResumeItemHelper<T extends SectionEntity>(state: T[], item: T) {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, ...rest } = item

  state.push({ id: Date.now().toString(), ...rest } as unknown as T)

  return state
}

export function deleteResumeItemHelper<T extends SectionEntity>(state: T[], id: string) {
  return state.filter((it) => it.id !== id)
}

export function updateResumeItemDetailsHelper<T extends SectionEntity>(
  items: T[],
  selectedId: string | null,
  values: Partial<SectionEntity>
) {
  const item = items.find((p) => p.id === selectedId) as T as Record<string, unknown>

  if (!item) return items

  Object.keys(values).forEach((k) => {
    const value = values[k as keyof SectionEntity]

    if (k === "endDate" || k === "startDate") {
      item[k] = value && isDate(value) ? value.toISOString() : value
    } else {
      item[k] = value
    }
  })

  return items
}
