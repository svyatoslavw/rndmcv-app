import { type ClassValue, clsx } from "clsx"
import { format } from "date-fns"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isDate(value: unknown): value is Date {
  return value instanceof Date
}

type TypeSize = "XS" | "S" | "M" | "L" | "XL"

/* Get value from object */
export function convertValueFromObject<T extends number | string>(
  size: T,
  sizeMap: Record<T, TypeSize>
): TypeSize {
  return sizeMap[size] || "unknown"
}

/* Format date (default: May 15th, 2024) */
export function formatSectionDate(date: string, formatter?: string): string {
  return /\d/.test(date) ? format(new Date(date), formatter || "PPP") : date
}

/* Debounce function */
export function debounce<T extends (...args: any[]) => void>(func: T, ms: number) {
  let timer: NodeJS.Timeout | null = null

  return function (this: any, ...args: Parameters<T>) {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      func.apply(this, args)
    }, ms)
  }
}

/* Format seconds to minutes */
export function formatSeconds(seconds: number) {
  const minutes = Math.floor(seconds / 60)

  return seconds >= 60 ? `${minutes}m` : `${seconds}s`
}

export function formatLocation(city: string, country: string) {
  if (city && country) return `${city}, ${country}`

  return city || country || ""
}

/* Convert array to object, where key is array item and value is size */
export function toSizeObject<T extends string | number | symbol>(
  array: T[],
  objectMapper?: (values: T) => string
): Record<T, TypeSize> {
  const typeSizes: TypeSize[] = ["XS", "S", "M", "L", "XL"]

  if (!array.length) return {} as Record<T, TypeSize>

  return array.reduce(
    (acc, item, index) => {
      const key = typeSizes[index % typeSizes.length]
      const value = objectMapper ? objectMapper(item) : item

      acc[value as T] = key
      return acc
    },
    {} as Record<T, TypeSize>
  )
}

export function uuid() {
  return crypto.randomUUID()
}
