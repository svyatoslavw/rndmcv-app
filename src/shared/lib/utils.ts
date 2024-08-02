import { TUpdateItem } from "@/entities/resume/model/resume.types"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isDate(value: unknown): value is Date {
  return value instanceof Date
}

/**
 * Reorders an array by moving an item from one index to another.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array to be reordered.
 * @param {number} from - The index of the item to be moved.
 * @param {number} to - The index to move the item to.
 * @returns {T[]} - The reordered array.
 */
export function reorderArray<T>(array: T[], from: number, to: number): T[] {
  const item = array[from]
  array.splice(from, 1)
  array.splice(to, 0, item)
  return array
}

export function createResumeItemHelper<T>(state: T[], item: T) {
  state.push({ id: Date.now().toString(), ...item })
}

export function updateResumeItemDetailsHelper<T extends TUpdateItem>(
  state: T[],
  selectedId: string | null,
  key: string,
  value: string | Date
) {
  const item = state.find((p) => p.id === selectedId) as T as Record<string, unknown>
  if (item && key in item) {
    if ((key === "endDate" || key === "startDate") && isDate(value)) {
      item[key] = value.toISOString()
    } else {
      item[key] = value
    }
  }
}
