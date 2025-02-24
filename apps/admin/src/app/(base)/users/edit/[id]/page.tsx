import { getUserById } from "@/shared/actions/get-user-by-id"
import Image from "next/image"
import { notFound } from "next/navigation"

type Params = { id: string }

export default async function EditUser({ params }: { params: Promise<Params> }) {
  const { id } = await params

  const user = await getUserById(id)

  if (!user) return notFound()

  return (
    <div>
      <h1>Edit User</h1>
      <Image src={user.image} alt={user.name} width={100} height={100} />
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}
