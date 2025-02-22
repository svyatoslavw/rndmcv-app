import getUsers from "@/shared/actions/get-users"

export default async function Users() {
  const users = await getUsers()
  return (
    <div>
      <h1>Users</h1>
      <div>
        {users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </div>
  )
}
