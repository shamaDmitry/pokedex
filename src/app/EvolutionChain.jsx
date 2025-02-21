import useSWR from 'swr'
import { fetcher } from '@/lib/utils'
import { Spinner } from '@/app/Spinner'
import { Link } from 'react-router'
import { formatPokemonId } from '@/lib/utils'
import { COLORS, getColor, getIcon } from '../lib/colorMap'
import { cn } from '../lib/utils'
import { ArrowDown } from '../icons/ArrowDown'

const bgColors = {
  '#5090D6': 'bg-water',
  '#0B6DC3': 'bg-dragon',
  '#F4D23C': 'bg-electric',
  '#EC8FE6': 'bg-fairy',
  '#5269AD': 'bg-ghost',
  '#FF9D55': 'bg-fire',
  '#73CEC0': 'bg-ice',
  '#63BC5A': 'bg-grass',
  '#91C12F': 'bg-bug',
  '#CE416B': 'bg-fighting',
  '#919AA2': 'bg-normal',
  '#5A5465': 'bg-dark',
  '#5A8EA2': 'bg-steel',
  '#C5B78C': 'bg-rock',
  '#FA7179': 'bg-psychic',
  '#D97845': 'bg-ground',
  '#B567CE': 'bg-poison',
  '#89AAE3': 'bg-flying'
}

export const EvolutionChain = ({ type, url }) => {
  const { data, isLoading } = useSWR(() => url, fetcher)

  const renderEvolutionChain = (chain) => {
    const PokemonInfo = ({ name }) => {
      const { data: pokemon, isLoading } = useSWR(() => `https://pokeapi.co/api/v2/pokemon/${name}`, fetcher)

      if (isLoading) {
        return (
          <div className="flex flex-col items-center">
            <Spinner />
          </div>
        )
      }

      if (pokemon) {
        return (
          <div className="flex border border-muted-100 rounded-full w-full gap-3">
            <div
              className={cn(
                'flex items-center justify-center flex-col w-[150px] h-full rounded-full relative shrink-0',
                `${bgColors[getColor(pokemon.types[0].type.name)]}`
              )}
            >
              {getIcon(pokemon.types[0].type.name, {
                className: 'h-full absolute left-0 top-0  w-full text-white'
              })}

              <img className="relative" src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>

            <div className="flex-1 pr-5 py-2.5">
              <Link to={`/pokemon/${chain.species.name}`} className="text-base font-medium capitalize">
                {chain.species.name}
              </Link>

              <p className="font-medium text-xs mb-1">Nº{formatPokemonId(pokemon.order)}</p>

              <div className="flex gap-2 flex-wrap">
                {pokemon.types.map((type) => {
                  return (
                    <div
                      key={type.slot}
                      className="rounded-4xl flex items-center justify-center py-[3px] px-1.5 gap-2 text-sm  min-w-20 h-5"
                      style={{ backgroundColor: COLORS[type.type.name] }}
                    >
                      {getIcon(type.type.name, { className: 'h-full text-white size-4' })}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )
      }
    }

    return (
      <>
        <PokemonInfo name={chain.species.name} />

        {chain.evolves_to.length > 0 && (
          <div className="flex flex-col items-center w-full">
            <div className="my-3">
              <ArrowDown className="h-7" />
            </div>

            <div className="flex gap-8 w-full">
              {chain.evolves_to.map((evolution) => (
                <div key={evolution.species.url} className="flex flex-col items-center flex-1">
                  {renderEvolutionChain(evolution)}
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    )
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-5">
        <Spinner type={type} />
      </div>
    )
  }

  if (data) {
    return <>{renderEvolutionChain(data.chain)}</>
  }
}
