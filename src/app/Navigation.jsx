import { NavLink } from 'react-router'
import { v4 as uuidv4 } from 'uuid'
import { PokedexIcon } from '@/icons/PokedexIcon'
import { PokedexActiveIcon } from '@/icons/PokedexActiveIcon'
import { RegionsIcon } from '@/icons/RegionsIcon'
import { RegionsActiveIcon } from '@/icons/RegionsActiveIcon'
import { FavoritesIcon } from '@/icons/FavoritesIcon'
import { FavoritesActiveIcon } from '@/icons/FavoritesActiveIcon'
import { ProfileIcon } from '@/icons/ProfileIcon'
import { ProfileActiveIcon } from '@/icons/ProfileActiveIcon'
import { cn } from '../lib/utils'

const menuItems = [
  { id: uuidv4(), path: '/pokedex', icon: <PokedexIcon />, activeIcon: <PokedexActiveIcon />, name: 'pokedex' },
  { id: uuidv4(), path: '/regions', icon: <RegionsIcon />, activeIcon: <RegionsActiveIcon />, name: 'regions' },
  { id: uuidv4(), path: '/favorites', icon: <FavoritesIcon />, activeIcon: <FavoritesActiveIcon />, name: 'favorites' },
  { id: uuidv4(), path: '/profile', icon: <ProfileIcon />, activeIcon: <ProfileActiveIcon />, name: 'profile' }
]

export const Navigation = ({ className }) => {
  return (
    <div className={cn('flex gap-4 *:flex-auto fixed bg-white py-2 h-[72px] bottom-0 left-0 w-full', className)}>
      {menuItems.map((menuItem) => {
        return (
          <NavLink key={menuItem.id} to={menuItem.path}>
            {({ isActive }) => {
              return (
                <div className="flex items-center justify-center flex-col">
                  <span>{isActive ? menuItem.activeIcon : menuItem.icon}</span>
                  <span className={cn('capitalize', isActive ? 'opacity-100' : 'opacity-0')}>{menuItem.name}</span>
                </div>
              )
            }}
          </NavLink>
        )
      })}
    </div>
  )
}
