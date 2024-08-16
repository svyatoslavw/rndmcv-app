import { type ClassValue, clsx } from "clsx"
import { format } from "date-fns"
import { twMerge } from "tailwind-merge"

import type { TUpdateItem } from "@/entities/resume"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isDate(value: unknown): value is Date {
  return value instanceof Date
}

export function isString(value: unknown): value is string {
  return typeof value === "string"
}

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

export function convertSize<T extends number>(size: T, sizeMap: Record<T, string>): string {
  return sizeMap[size] || "unknown"
}

export function formatSectionDate(date: string): string {
  return /\d/.test(date) ? format(new Date(date), "PPP") : date
}
