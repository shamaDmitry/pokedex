import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { MainLayout } from './layouts/MainLayout'
import { PokedexPage } from './pages/PokedexPage'
import { RegionsPage } from './pages/RegionsPage'
import { FavoritesPage } from './pages/FavoritesPage'
import { ProfilePage } from './pages/ProfilePage'
import { PokemonPage } from './pages/PokemonPage'

// createRoot(document.getElementById('root')).render(<RouterProvider router={routes} />)

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<PokedexPage />} />
        <Route path="pokedex" element={<PokedexPage />} />
        <Route path="regions" element={<RegionsPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>

      <Route path="pokemon/:name" element={<PokemonPage />} />
    </Routes>
  </BrowserRouter>
)
