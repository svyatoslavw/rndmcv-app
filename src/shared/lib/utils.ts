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

export function convertValueFromObject<T extends number | string>(
  size: T,
  sizeMap: Record<T, TypeSize>
): TypeSize {
  return sizeMap[size] || "unknown"
}

export function formatSectionDate(date: string, formatter?: string): string {
  return /\d/.test(date) ? format(new Date(date), formatter || "PPP") : date
}

export function debounce<T extends (...args: any[]) => void>(func: T, ms: number) {
  let timer: NodeJS.Timeout | null = null

  return function (this: any, ...args: Parameters<T>) {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      func.apply(this, args)
    }, ms)
  }
}

export function formatSeconds(seconds: number) {
  const minutes = Math.floor(seconds / 60)

  return seconds >= 60 ? `${minutes}m` : `${seconds}s`
}

export function formatLocation(city: string, country: string) {
  if (city && country) return `${city}, ${country}`

  return city || country || ""
}

export function toSizeObject<T extends string | number | symbol>(
  array: T[],
  objectMapper?: (values: T) => string
): Record<T, TypeSize> {
  const typeSizes: TypeSize[] = ["XS", "S", "M", "L", "XL"]

  return array.reduce(
    (acc, item, index) => {
      const key = typeSizes[index]
      const value = typeof item === "object" && objectMapper ? objectMapper(item) : item

      return { ...acc, [value]: key }
    },
    {} as Record<T, TypeSize>
  )
}
