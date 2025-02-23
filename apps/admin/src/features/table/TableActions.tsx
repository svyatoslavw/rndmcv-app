"use client"

import { ADMIN_URLS } from "@/shared/config"
import { Button } from "@rndm/ui/components"
import { ShieldBan, SquarePenIcon, Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"

const TableActions = <T extends { id: string }>({ item }: { item: T }) => {
  const router = useRouter()
  return (
    <div className="flex shrink-0 gap-1">
      <Button
        onClick={() => router.push(ADMIN_URLS.EDIT_USER(item.id))}
        size={"xs"}
        className="gap-1"
      >
        <SquarePenIcon size={16} /> Edit
      </Button>
      <Button variant={"success"} size={"xs"} className="gap-1">
        <ShieldBan size={16} /> Ban
      </Button>
      <Button size={"xs"} variant="destructive" className="gap-1">
        <Trash2 size={16} /> Delete
      </Button>
    </div>
  )
}

export { TableActions }
