import { Table } from "@/features/table/Table"
import { TableActions } from "@/features/table/TableActions"
import { TableFilters } from "@/features/table/TableFilters"
import { TablePagination } from "@/features/table/TablePagination"
import { TableSearch } from "@/features/table/TableSearch"
import getUsers from "@/shared/actions/get-users"
import { Column } from "@/shared/types"
import { Resume, User } from "@rndm/database"
import { cn } from "@rndm/ui/lib/utils"
import { Eye, Shield } from "lucide-react"
import Image from "next/image"
import { Suspense } from "react"

const userColumns: Column<
  Pick<User, "id" | "email" | "role" | "name" | "createdAt" | "image"> & { resumes: Resume[] }
>[] = [
  {
    key: "email",
    render: (user) => (
      <div className="flex min-w-0 max-w-60 flex-1 items-center gap-2 overflow-hidden">
        <Image
          loading="lazy"
          priority={false}
          src={user.image}
          alt={user.name}
          width={45}
          height={45}
          className="shrink-0 rounded-full"
        />
        <div className="min-w-0 overflow-hidden">
          <h5 className="truncate font-medium">{user.name}</h5>
          <p className="truncate text-sm">{user.email}</p>
        </div>
      </div>
    )
  },
  {
    key: "role",
    render: (user) => (
      <span
        className={cn(
          "inline-flex w-20 shrink-0 items-center justify-center gap-1.5 rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-700",
          { "bg-green-100 text-green-700": user.role === "USER" }
        )}
      >
        <Shield className="h-3 w-3" />
        {user.role}
      </span>
    )
  },
  {
    key: "createdAt",
    render: (user) => (
      <div className="shrink-0 text-sm">
        Joined on {new Date(user.createdAt).toLocaleDateString()}
      </div>
    )
  },
  {
    key: "resumes",
    render: (user) => (
      <div className="flex shrink-0 items-center gap-2 text-sm">
        <Eye size={20} />
        {user.resumes.length} {user.resumes.length === 1 ? "resume" : "resumes"}
      </div>
    )
  },
  {
    key: "id",
    render: (user) => <TableActions item={user} />
  }
] as const

export default async function Users({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const page = Number(searchParams?.page) || 1
  const search = (searchParams?.search as string) || ""
  const sort = (searchParams?.sort as keyof User) || "createdAt"
  const direction = (searchParams?.direction as "asc" | "desc") || "desc"

  const { users, pagination } = await getUsers({
    page,
    sort,
    direction,
    search
  })

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric"
    })
  }
  return (
    <div className="w-full p-4">
      <section className="mb-4 flex items-center justify-between px-20">
        <h1 className="text-2xl font-bold">Users</h1>
        <div className="flex items-center gap-3">
          <TableSearch search={search} />
          <TableFilters />
        </div>
      </section>
      <Table data={users} columns={userColumns} />

      <Suspense>
        <TablePagination {...pagination} />
      </Suspense>
      {/* <div className="overflow-x-auto">
        <div className="space-y-2">
          {users.map((user) => (
            <div
              key={user.id}
              className="after:bg-primary relative flex w-full items-center justify-between rounded-lg bg-gray-50 p-3 transition-colors after:absolute after:left-0 after:top-0 after:z-10 after:block after:h-full after:w-[6px] after:rounded-l-lg after:content-[''] hover:bg-gray-100"
            >
              <div className="flex min-w-0 max-w-64 flex-1 items-center gap-2 overflow-hidden">
                <Image
                  src={user.image}
                  alt={user.name}
                  width={45}
                  height={45}
                  className="shrink-0 rounded-full"
                />
                <div className="min-w-0 overflow-hidden">
                  <h5 className="truncate font-medium">{user.name}</h5>
                  <p className="truncate text-sm">{user.email}</p>
                </div>
              </div>

              <span
                className={cn(
                  "inline-flex w-20 shrink-0 items-center justify-center gap-1.5 rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-700",
                  { "bg-green-100 text-green-700": user.role === "USER" }
                )}
              >
                <Shield className="h-3 w-3" />
                {user.role}
              </span>

              <div className="shrink-0 text-sm">Joined on {formatDate(user.createdAt)}</div>

              <div className="shrink-0 text-sm">
                <div className="flex items-center gap-2">
                  <Eye size={20} />
                  {user.resumes.length} {user.resumes.length === 1 ? "resume" : "resumes"}
                </div>
              </div>

              <div className="shrink-0">
                <div className="flex gap-1">
                  <Button size={"xs"} className="gap-1">
                    <SquarePenIcon size={16} />
                    Edit
                  </Button>
                  <Button variant={"success"} size={"xs"} className="gap-1">
                    <ShieldBan size={16} />
                    Ban
                  </Button>
                  <Button size={"xs"} variant="destructive" className="gap-1">
                    <Trash2 size={16} />
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  )
}
