import { useGetProfileQuery } from "../model/user.api"

export const useProfile = () => {
  const { data, isLoading, isFetching } = useGetProfileQuery()
  if (!data) return

  return {
    data,
    isLoading,
    isFetching
  }
}
