import { type ClassValue, clsx } from "clsx"
import { format } from "date-fns"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isDate(value: unknown): value is Date {
  return value instanceof Date
}

export function convertValueFromObject<T extends number | string>(
  size: T,
  sizeMap: Record<T, string>
): string {
  return sizeMap[size] || "unknown"
}

export function formatSectionDate(date: string, formatter?: string): string {
  return /\d/.test(date) ? format(new Date(date), formatter || "PPP") : date
}

const isClient = typeof window !== "undefined"

export function saveToLS(key: string, value: string) {
  if (isClient) localStorage.setItem(key, value)
}

export function getFromLS(key: string) {
  if (isClient) return localStorage.getItem(key)
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
