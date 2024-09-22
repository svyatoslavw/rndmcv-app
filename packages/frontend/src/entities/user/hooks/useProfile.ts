import { useQuery } from "@tanstack/react-query"

import { userService } from "../../common/api/user.service"

export const useProfile = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["profile"],
    queryFn: () => userService.getProfile(),
    retry: false
  })

  return { profile: data, isLoading, isSuccess }
}
