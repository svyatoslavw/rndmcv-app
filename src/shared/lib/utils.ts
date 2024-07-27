import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isDate(value: unknown): value is Date {
  return value instanceof Date
}

export function reorderArray<T>(array: T[], from: number, to: number): T[] {
  const item = array[from]
  array.splice(from, 1)
  array.splice(to, 0, item)
  return array
}
