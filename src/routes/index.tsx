import * as React from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="p-2">
      <h3>Je suis un titre de niveau 3</h3>
      <ul>
        <li><Link to="/error">Vers la page d'erreur 404</Link></li>
        <li><Link to="/users/$users" params={{ users: 'Toto' }}>Vers l'utilisateur "Toto"</Link></li>
      </ul>
    </div>
  )
}
