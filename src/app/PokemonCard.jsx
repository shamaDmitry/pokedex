import { NavLink } from 'react-router'
import { getColor, getColorWithOpacity, getIcon } from '../lib/colorMap'
import { TypeBadge } from '@/app/TypeBadge'
import { cn } from '@/lib/utils'
import { Favorite2Icon } from '@/icons/Favorite2Icon'
import { formatPokemonId } from '../lib/utils'

export const PokemonCard = ({ data }) => {
  const { types, order, name, sprites } = data

  return (
    <div
      className={cn('rounded-2xl flex gap-2.5')}
      style={{ backgroundColor: getColorWithOpacity(types[0].type.name, 0.5) }}
    >
      <div className="font-semibold flex-1 py-3 px-4">
        <p className="text-xs mb-1 text-[#333]">Nº{formatPokemonId(order)}</p>

        <NavLink to={`/pokemon/${name}`} className="text-xl mb-3 text-black capitalize inline-flex">
          {name}
        </NavLink>

        <div className="flex items-center gap-2">
          {types.map((type) => {
            return <TypeBadge key={type.slot} type={type.type.name} />
          })}
        </div>
      </div>

      <div
        className={cn('rounded-2xl w-[126px] shrink-0 flex items-center justify-center relative')}
        style={{ backgroundColor: getColor(types[0].type.name) }}
      >
        <button className="cursor-pointer size-8 z-50 absolute top-1.5 right-1.5 hover:opacity-50">
          <Favorite2Icon className="text-white"></Favorite2Icon>
        </button>

        <div className="flex items-center justify-center absolute top-2 bottom-2 right-2 left-2 bg-clip-text bg-red-500">
          {getIcon(types[0].type.name, {
            style: { color: '#fff' },
            className: 'h-full w-full'
          })}
        </div>

        <img className="relative z-10 pointer-events-none" src={sprites.front_default} alt={name} />
      </div>
    </div>
  )
}
