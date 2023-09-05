import Link from 'next/link';

export default function UserById({ user }) {
  return (
    <div>
      <h1>{user.id}</h1>
      <p>{user.name}</p>
      <Link href={'/users'}>User list</Link>
    </div>
  )
}

export const getStaticPaths = async () => {
  const data = await fetch('https://users-board-api.onrender.com/users')
    .then(response => response.json())

  const userIds = data.rows.map(user => user.id)

  return {
    paths: userIds.map(id => ({ params: { id: id.toString() } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const user = await fetch(`https://users-board-api.onrender.com/users/${params.id}`)
    .then(response => response.json())

  return {
    props: {
      user,
    }
  }
}
