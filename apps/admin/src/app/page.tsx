import { ADMIN_URLS } from "@/shared"
import { redirect } from "next/navigation"

export default function Home() {
  redirect(ADMIN_URLS.DASHBOARD)
}
