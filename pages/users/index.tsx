import Link from 'next/link';

export default function Users({ users }) {
  return (
    <div>
      <h1>Users page</h1>
      <Link href={'/'}>Go Home</Link>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getServerSideProps = async () => {
  const data = await fetch('https://users-board-api.onrender.com/users')
    .then(response => response.json())

  return {
    props: {
      users: data.rows || []
    }
  }
}
