import { Outlet } from 'react-router'
import { Navigation } from '../app/Navigation'

export const MainLayout = () => {
  return (
    <div className="relative h-screen overflow-auto pb-[72px]">
      <div className="px-4">
        <Outlet />
      </div>

      <Navigation />
    </div>
  )
}
