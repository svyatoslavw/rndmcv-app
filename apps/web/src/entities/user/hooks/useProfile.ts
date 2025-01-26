"use client"

import { useEffect, useState } from "react"

import { IUser } from "@/shared/types"

export const useProfile = () => {
  const [profile, setProfile] = useState<IUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/auth/me")

        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const data = await response.json()

        setProfile(data as IUser)
      } catch (error) {
        /* eslint-disable-next-line */
        console.error("Error fetching profile:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProfile()
  }, [])

  return { profile, isLoading }
}
