import { FetchBaseQueryError } from "@reduxjs/toolkit/query"
import { type ClassValue, clsx } from "clsx"
import { format } from "date-fns"
import { twMerge } from "tailwind-merge"

import { TypeSectionItem } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isDate(value: unknown): value is Date {
  return value instanceof Date
}

export function isString(value: unknown): value is string {
  return typeof value === "string"
}

export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null
}

export function createResumeItemHelper<T>(state: T[], item: T) {
  state.push({ id: Date.now().toString(), ...item })
}

export function deleteResumeItemHelper<T extends { id: string }>(state: T[], id: string) {
  return state.filter((item) => item.id !== id)
}

export function updateResumeItemDetailsHelper<T extends TypeSectionItem>(
  state: T[],
  selectedId: string | null,
  values: Partial<T>
) {
  const item = state.find((p) => p.id === selectedId) as T as Record<string, unknown>
  Object.keys(values).forEach((key) => {
    const value = values[key as keyof T]
    if (key === "endDate" || key === "startDate") {
      item[key] = value && isDate(value) ? value.toISOString() : value
    } else {
      item[key] = value
    }
  })
}

export function convertValueFromObject<T extends number | string>(
  size: T,
  sizeMap: Record<T, string>
): string {
  return sizeMap[size] || "unknown"
}

export function formatSectionDate(date: string): string {
  return /\d/.test(date) ? format(new Date(date), "PPP") : date
}

const isClient = typeof window !== "undefined"

export function saveToLS(key: string, value: string) {
  if (isClient) localStorage.setItem(key, value)
}

export function getFromLS(key: string) {
  if (isClient) return localStorage.getItem(key)
}

export const getAuthURL = (provider: string): string => {
  return `${process.env.SERVER_URL}/auth/${provider}-init`
}

export function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return typeof error === "object" && error != null && "status" in error
}

export function isErrorWithMessage(error: unknown): error is { message: string } {
  return (
    typeof error === "object" &&
    error != null &&
    "message" in error &&
    typeof (error as any).message === "string"
  )
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
