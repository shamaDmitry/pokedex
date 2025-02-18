import { createBrowserRouter, Navigate } from 'react-router'
import { FavoritesPage } from '@/pages/FavoritesPage'
import { PokedexPage } from '@/pages/PokedexPage'
import { RegionsPage } from '@/pages/RegionsPage'
import { ProfilePage } from '@/pages/ProfilePage'

export const routes = createBrowserRouter([
  {
    path: '/pokedex',
    Component: PokedexPage
  },
  {
    path: '/regions',
    Component: RegionsPage
  },
  {
    path: '/favorites',
    Component: FavoritesPage
  },
  {
    path: '/profile',
    Component: ProfilePage
  }
])
