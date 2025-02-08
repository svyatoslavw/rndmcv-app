import { CustomizationEntity, SectionEntity } from "@/shared/types"

import { isDate } from "@/shared/lib/utils"

export function reorderArray<T>(array: T[], from: number, to: number): T[] {
  const item = array[from]

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

export const isValidCustomization = (
  customization: Partial<CustomizationEntity> | undefined
): customization is CustomizationEntity => {
  if (!customization) return false

  // Проверяем основные поля
  const requiredFields: (keyof CustomizationEntity)[] = [
    "layout",
    "colors",
    "spacing",
    "heading",
    "name",
    "job",
    "sections"
  ]

  const hasAllFields = requiredFields.every((field) => field in customization)
  if (!hasAllFields) return false

  const { layout } = customization
  if (!layout) return false

  if (
    !layout.layout?.pos ||
    !layout.layout?.class ||
    !layout.columns?.left ||
    !layout.columns?.right ||
    !layout.columnsWidth?.left ||
    !layout.columnsWidth?.right
  ) {
    return false
  }

  const { colors } = customization
  if (!colors) return false

  if (
    !colors.mode ||
    !colors.type ||
    !colors.isAccent ||
    !colors.side?.left ||
    !colors.side?.right ||
    !colors.borderVisibility ||
    !colors.borderSize
  ) {
    return false
  }

  const { spacing } = customization
  if (!spacing) return false

  if (
    typeof spacing.fontSize !== "number" ||
    typeof spacing.lineHeight !== "number" ||
    typeof spacing.marginX !== "number" ||
    typeof spacing.marginY !== "number"
  ) {
    return false
  }

  const { sections } = customization
  if (!sections) return false
  const requiredSections = ["education", "experience", "projects", "languages", "skills"]

  return requiredSections.every((section) => section in sections)
}
