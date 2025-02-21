import { FavoritesIcon } from '@/icons/FavoritesIcon'
import { BackIcon } from '@/icons/BackIcon'
import { getIcon } from '@/lib/colorMap'
import { useNavigate, useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { capitalize, cn, fetcher, formatPokemonId } from '../lib/utils'
import { getColor } from '@/lib/colorMap'
import { Headline } from '@/app/Headline'
import { TypeBadge } from '@/app/TypeBadge'
import { StatItem } from '../app/StatItem'
import { WeightIcon } from '../icons/WeightIcon'
import { HeightIcon } from '../icons/HeightIcon'
import { CategoryIcon } from '../icons/CategoryIcon'
import { AbilityIcon } from '../icons/AbilityIcon'
import { AbilityItem } from '../app/AbilityItem'
import useSWR from 'swr'
import { EvolutionChain } from '../app/EvolutionChain'

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
  const { name } = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [name])

  const { data: species } = useSWR(`https://pokeapi.co/api/v2/pokemon-species/${name}`, fetcher)

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

        <img src={data.sprites.other['official-artwork'].front_default} alt="" className="relative h-[150px]" />
      </div>

      <div className="absolute top-0 left-0 p-4 flex items-center justify-between w-full">
        <button
          onClick={() => navigate('/pokedex')}
          className="size-8 flex items-center justify-center py-3 px-4 text-white cursor-pointer"
        >
          <BackIcon className="h-3.5 shrink-0" />
        </button>

        <button>
          <FavoritesIcon className="text-white" />
        </button>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <Headline className="capitalize mb-2">{data.name}</Headline>
            <div className="mb-6">Nº{formatPokemonId(data.order)}</div>

            <div className="flex flex-wrap gap-2 mb-6">
              {data.types.map((type) => {
                return <TypeBadge key={type.slot} type={type.type.name} />
              })}
            </div>

            <div className="mb-5">
              Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.
            </div>

            <div className="grid lg:grid-cols-2 gap-4 mb-5">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <WeightIcon className="size-4 text-black/60" />
                  <span className="uppercase font-medium text-xs text-black/60">Weight</span>
                </div>

                <StatItem value={`${data.weight} kg`} />
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2">
                  <HeightIcon className="size-4 text-black/60" />
                  <span className="uppercase font-medium text-xs text-black/60">Height</span>
                </div>

                <StatItem value={`${(data.height * 1) / 10} m`} />
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2">
                  <CategoryIcon className="size-4 text-black/60" />
                  <span className="uppercase font-medium text-xs text-black/60">Category</span>
                </div>

                <div className="flex flex-wrap gap-2 *:flex-1">
                  {species?.egg_groups.map((item) => {
                    return <StatItem key={item.url} value={capitalize(item.name)} />
                  })}
                </div>
              </div>

              <div className="flex flex-col">
                <div className="mb-2 flex items-center gap-2">
                  <AbilityIcon className="size-4 text-black/60" />

                  <span className="uppercase font-medium text-xs text-black/60">Ability</span>
                </div>

                <div className="flex flex-wrap gap-2 *:flex-1 flex-1">
                  {data.abilities.map((ability) => {
                    return (
                      <AbilityItem
                        type={data.types[0].type.name}
                        key={ability.slot}
                        url={ability.ability.url}
                        className="h-full"
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          <div>
            <Headline tag="h2" className="text-center lg:text-left capitalize mb-2">
              Evolution Chain
            </Headline>

            <EvolutionChain type={data.types[0].type.name} url={species?.evolution_chain.url} />
          </div>
        </div>

        {/* <Headline className="capitalize mb-2">Weaknesses</Headline> */}
      </div>
    </div>
  )
}
