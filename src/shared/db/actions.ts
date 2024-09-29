"use server"

import { TSession } from "../lib/types"

import { auth } from "@/auth"

export const getAuthSession = async (): Promise<TSession> => {
  try {
    const session = await auth()
    return session
  } catch (err) {
    throw err
  }
}

export const getUserSession = async (): Promise<TSession> => {
  try {
    const session = await auth()

    return session
  } catch (err) {
    throw err
  }
}
