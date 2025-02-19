import { FavoritesIcon } from '@/icons/FavoritesIcon'
import { BackIcon } from '@/icons/BackIcon'
import { getIcon } from '@/lib/colorMap'
import { useNavigate, useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { cn, formatPokemonId } from '../lib/utils'
import { getColor } from '../lib/colorMap'
import { Headline } from '../app/Headline'

const bgColors = {
  '#5090D6': 'before:bg-water',
  '#0B6DC3': 'before:bg-dragon',
  '#F4D23C': 'before:bg-electric',
  '#EC8FE6': 'before:bg-fairy',
  '#5269AD': 'before:bg-ghost',
  '#FF9D55': 'before:bg-fire',
  '#73CEC0': 'before:bg-ice',
  '#63BC5A': 'before:bg-grass',
  '#91C12F': 'before:bg-bug',
  '#CE416B': 'before:bg-fighting',
  '#919AA2': 'before:bg-normal',
  '#5A5465': 'before:bg-dark',
  '#5A8EA2': 'before:bg-steel',
  '#C5B78C': 'before:bg-rock',
  '#FA7179': 'before:bg-psychic',
  '#D97845': 'before:bg-ground',
  '#B567CE': 'before:bg-poison',
  '#89AAE3': 'before:bg-flying'
}

export const PokemonPage = () => {
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [id])

  if (!data) return null

  return (
    <div className="min-h-screen relative">
      <div
        className={cn(
          'flex flex-col items-center justify-end h-[307px] before:absolute before:h-[500px] before:w-full before:rounded-full lg:before:rounded before:-top-[250px] before:left-1/2 before:-translate-x-1/2',
          `${bgColors[getColor(data.types[0].type.name)]}`
        )}
      >
        {getIcon(data.types[0].type.name, {
          className: 'h-[200px] absolute left-1/2 -translate-x-1/2 trans text-white opacity-60 top-5'
        })}

        <img src={data.sprites.front_default} alt="" className="relative w-[200px]" />
      </div>

      <div className="absolute top-0 left-0 p-4 flex items-center justify-between w-full">
        <button
          onClick={() => navigate(-1)}
          className="size-8 flex items-center justify-center py-3 px-4 text-white cursor-pointer"
        >
          <BackIcon className="h-3.5 shrink-0" />
        </button>

        <button>
          <FavoritesIcon className="text-white" />
        </button>
      </div>

      <div className="p-4">
        <Headline className="capitalize mb-2">{data.name}</Headline>
        <div className="mb-5">Nº{formatPokemonId(data.order)}</div>

        {JSON.stringify(data, null, 2)}
      </div>
    </div>
  )
}
