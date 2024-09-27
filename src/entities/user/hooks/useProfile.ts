import { useQuery } from "@tanstack/react-query"

import { axiosInstance } from "@/entities/common/api"
import { IUser } from "@/shared/lib/types"

export const useProfile = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => await axiosInstance.get<IUser>("/auth/me"),
    select: ({ data }) => data,
    retry: false
  })

  return { profile: data, isLoading, isSuccess }
}
