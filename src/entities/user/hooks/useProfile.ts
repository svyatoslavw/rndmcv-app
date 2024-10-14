import { useQuery } from "@tanstack/react-query"

import { axiosClassic } from "@/shared/lib/api"
import { IUser } from "@/shared/lib/types"

export const useProfile = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => await axiosClassic.get<IUser>("/auth/me"),
    select: ({ data }) => data,
    retry: false
  })

  return { profile: data, isLoading, isSuccess }
}
