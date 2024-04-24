import { createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/user/$user')({
  component: User,
})

function User() {
  const { user } = useParams({});

  return(<>Hello {user} !</>)
}