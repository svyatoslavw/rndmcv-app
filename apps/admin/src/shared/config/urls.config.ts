export const ADMIN_URLS = {
  AUTH: "/",
  DASHBOARD: "/dashboard",
  USERS: "/users",
  RESUMES: "/resumes",
  EDIT_USER: (id: string) => `/users/edit/${id}`
}
