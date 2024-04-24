import * as React from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const { t } = useTranslation();

  return (
    <div className="p-2">
      <h1>{t('home')}</h1>
      <h3>Je suis un titre de niveau 3</h3>
      <ul>
        <li><Link to="/error">Vers la page d'erreur 404</Link></li>
        <li><Link to="/user/$user" params={{ user: 'Toto' }}>Vers l'utilisateur "Toto"</Link></li>
      </ul>
    </div>
  )
}
