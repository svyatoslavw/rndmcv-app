import { Button } from "@rndm/ui/components"
import Link from "next/link"

const TablePagination = ({
  totalPages,
  page,
  searchParams
}: {
  totalPages: number
  page: number
  searchParams?: { [key: string]: string | string[] | undefined }
}) => {
  const getHref = (newPage: number) => {
    const params = new URLSearchParams()
    if (searchParams?.search) params.set("search", searchParams.search as string)
    if (searchParams?.sort) params.set("sort", searchParams.sort as string)
    if (searchParams?.direction) params.set("direction", searchParams.direction as string)
    params.set("page", newPage.toString())
    return `/users?${params.toString()}`
  }

  return (
    <div className="mt-4 flex items-center justify-center gap-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <Button key={p} asChild variant={p === page ? "default" : "outline"}>
          <Link href={getHref(p)}>{p}</Link>
        </Button>
      ))}
    </div>
  )
}

export { TablePagination }
